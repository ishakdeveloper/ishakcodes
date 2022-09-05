import React from "react";
import { RichText } from "../../../../components";
import { Container } from "../../../../components/Container";

const AboutHero = ({ slice }) => {
  return (
    <section className="pb-10 lg:pb-24 pt-0 lg:pt-12">
      <Container>
        <div className="max-w-7xl">
          <RichText
            field={slice.primary.title}
            className="typography-heading-1 mb-3"
          />
          <RichText
            field={slice.primary.titleInfo}
            className="font-medium text-2xl lg:text-[28px] leading-[1.4] mb-8"
          />
          <RichText
            field={slice.primary.description}
            className="typography-text-1 max-w-5xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
