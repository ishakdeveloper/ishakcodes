import React, { useContext } from "react";
import { RichText, Image, Link } from "../../../components";
import { GlobalContext } from "../../../context/GlobalContext";
import { format } from "date-fns";
import { asDate } from "@prismicio/helpers";
import { Container } from "../../../components/Container";

const FeaturedBlogPosts = ({ slice }) => {
  const { recentPosts } = useContext(GlobalContext);

  return (
    <section id={slice.primary.id} className="bg-light-blue-1 py-28">
      <Container>
        <div className="container">
          <div className="max-w-4xl">
            <RichText
              field={slice.primary.title}
              className="typography-heading-2"
            />

            <RichText
              field={slice.primary.description}
              className="typography-text-1"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {recentPosts.map((result, index) => (
              <BlogCard key={index} post={result} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedBlogPosts;

const BlogCard = ({ post }) => {
  const {
    title,
    description,
    featuredImage,
    publishDate,
    // category,
  } = post.data;

  return (
    <div className="shadow-main rounded-[20px]">
      <Link href={post}>
        <div className="rounded-[20px]">
          <Image
            {...featuredImage}
            dimensions={{ width: 480, height: 200 }}
            className="rounded-tl-[20px] rounded-tr-[20px]"
          />
        </div>
        <div className="px-6 py-8">
          <div>
            <RichText
              field={title}
              className="text-2xl font-bold leading-[1.6] text-primary-black"
            />
            <RichText
              field={description}
              className="mb-4 text-lg text-gray-500 line-clamp-2"
            />
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-primary-black font-medium">
                {format(asDate(publishDate), "d MMMM, yyyy")}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <span className="text-xl font-semibold text-primary-blue">
              Read Story
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
