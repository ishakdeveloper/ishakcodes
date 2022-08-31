import React from "react";
import { RichText, Link } from "../../../components";

const SkillsSection = ({ slice }) => (
  <section className="my-16">
    <div className="mb-6">
      <span className="title">
        <RichText field={slice.primary.title} />
      </span>
      <RichText field={slice.primary.description} />

      <Link href={slice.primary.button} className="btn btn-secondary btn-xl">
        {slice.primary.buttonText}
      </Link>
    </div>

    <div>
      {slice?.items?.map((item, i) => (
        <div key={i} className="my-4">
          <RichText field={item.title} />
          <RichText field={item.description} />
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
