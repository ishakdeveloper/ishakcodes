import React from "react";
import { RichText } from "../../../components";

const FeaturedBlogPosts = ({ slice }) => (
  <section>
    <RichText field={slice.primary.title} />
    <RichText field={slice.primary.description} />

    <div></div>
  </section>
);

export default FeaturedBlogPosts;
