import React, { useContext } from "react";
import { RichText, Image, Link } from "../../../components";
import { GlobalContext } from "../../../context/GlobalContext";
import { format } from "date-fns";
import { asDate } from "@prismicio/helpers";

const FeaturedBlogPosts = ({ slice }) => {
  const { recentPosts } = useContext(GlobalContext);

  return (
    <section id={slice.primary.id} className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <RichText
            field={slice.primary.title}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50"
          />

          <RichText
            field={slice.primary.description}
            className="mb-20 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((result, index) => (
            <BlogCard key={index} post={result} />
          ))}
        </div>
      </div>
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
    <Link href={post}>
      <Image
        {...featuredImage}
        dimensions={{ width: 480, height: 260 }}
        className="mb-8"
      />
      <RichText field={title} className="mb-4 text-3xl" />
      <RichText
        field={description}
        className="mb-4 text-lg text-gray-500 line-clamp-2"
      />

      <div className="flex items-center gap-4">
        <div>
          <p className="text-gray-600">
            {format(asDate(publishDate), "d MMMM, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};
