import React from "react";
import { RichText, Link } from "../../../components";

const AboutSection = ({ slice }) => (
  <section className="my-16">
    <span className="title">
      <RichText field={slice.primary.title} />
    </span>
    <div>
      <RichText field={slice.primary.description} />
    </div>
    <div>
      <Link href={slice.primary.button} className="btn btn-secondary btn-xl">
        {slice.primary.button_text}
      </Link>
    </div>
    <div className="w-64 h-64">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
  </section>
);

export default AboutSection;
