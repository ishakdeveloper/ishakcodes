import React from "react";
import { RichText } from "../../../components";

const Tools = ({ slice }) => (
  <section className="my-16">
    <div className="mb-6">
      <span className="title">
        <RichText field={slice.primary.title} />
      </span>
      <RichText field={slice.primary.description} />
    </div>

    <div>
      {slice?.items?.map((item, i) => (
        <div key={i} className="flex w-32">
          <img src={item.toolLogo.url} alt={item.toolLogo.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default Tools;
