import React from "react";
import { RichText } from "../../../components";

const AboutHero = ({ slice }) => {
  return (
    <section>
      <RichText field={slice.primary.title} />
      <RichText field={slice.primary.titleInfo} />
      <RichText field={slice.primary.description} />
      <RichText field={slice.primary.email} />
    </section>
  );
};

export default AboutHero;
