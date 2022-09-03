import React from "react";
import { RichText, Image } from "../../../components";
import { Container } from "../../../components/Container";

const Tools = ({ slice }) => (
  <section id={slice.primary.id} className="py-12 md:py-44">
    <Container>
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <RichText
            field={slice.primary.title}
            className="typography-heading-1"
          />

          <RichText
            field={slice.primary.description}
            className="typography-text-1 mt-3"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto gap-x-20 gap-y-4 mt-12">
          {slice?.items?.map((item, index) => {
            return (
              <Image key={index} {...item.toolLogo} className="w-auto py-6" />
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default Tools;
