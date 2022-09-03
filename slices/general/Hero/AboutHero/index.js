import React from "react";
import { RichText } from "../../../../components";
import { Container } from "../../../../components/Container";

const AboutHero = ({ slice }) => {
  return (
    <section className="pt-14 pb-14">
      <Container>
        <div className="max-w-7xl">
          <RichText
            field={slice.primary.title}
            className="typography-heading-1 mb-3"
          />
          <RichText
            field={slice.primary.titleInfo}
            className="font-medium text-[28px] leading-[1.4] mb-8"
          />
          <RichText
            field={slice.primary.description}
            className="typography-text-1 max-w-5xl"
          />
        </div>

        <div className="mt-24">
          <div className="w-1 h-28 bg-primary-black mb-6"></div>
          <span className="uppercase text-base font-medium text-primary-black tracking-[10px]">
            Read more
          </span>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
