import { createClient } from "../../prismic";
import { getLayoutProps, getSeoProps } from "../../utils/fetchData";
import { Layout, RichText } from "../../components";
import { fetchLinks } from "../../slices/general/fetchLinks";

const Projects = ({ data, url, lang, layout, provider }) => {
  const seo = getSeoProps({
    page: data,
    url,
    lang,
    // defaultSeo: layout.defaultSeo.data,
  });

  return (
    <Layout {...layout} seo={seo} provider={provider}>
      <div className="container text-center">
        <RichText
          field={data.title}
          plainText
          as="h1"
          className="text-5xl mb-4"
        />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const layout = await getLayoutProps({ client });

  const page = await client.getSingle("projects_page", {
    fetchLinks,
  });

  return {
    props: {
      layout,
      provider: {},
      ...page,
    },
  };
};

export default Projects;
