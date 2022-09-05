import React from "react";
import { RichText } from "../../../../components";
import { Container } from "../../../../components/Container";

const HeroDefault = ({ slice }) => {
  return (
    <section id={slice.primary.id} className="pt-10 lg:pt-20">
      <Container>
        <div>
          <div className="max-w-7xl mx-auto text-center">
            <RichText
              field={slice.primary.title}
              className="mb-8 typography-heading-1"
            />

            <RichText
              field={slice.primary.description}
              className="text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroDefault;
