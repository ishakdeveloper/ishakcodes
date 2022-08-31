import React from "react";
import { RichText } from "../../../components";

const Hero = ({ slice }) => {
  return (
    <section>
      <span className="title">
        <RichText field={slice.primary.title} />
      </span>
      <RichText field={slice.primary.email} />
    </section>
  );
};

export default Hero;
