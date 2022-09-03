import React from "react";
import { RichText, Link } from "../../../../components";
import { Container } from "../../../../components/Container";

const SkillsSection = ({ slice }) => (
  <section className="bg-primary-blue">
    <Container>
      <div className="flex justify-between items-center py-24 gap-24">
        <div className="mb-6 w-8/12/12">
          <RichText
            field={slice.primary.title}
            className="text-white typography-heading-2"
          />
          <RichText
            field={slice.primary.description}
            className="text-white font-normal text-xl leading-[1.905]"
          />

          <Link
            href={slice.primary.button}
            className="btn btn-secondary btn-xl mt-4"
          >
            {slice.primary.buttonText}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {slice?.items?.map((item, i) => (
            <div
              key={i}
              className="rounded-[20px] py-8 px-10 bg-primary-blue-2 text-white"
            >
              <RichText field={item.title} className="text-xl font-bold mb-2" />
              <RichText field={item.description} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default SkillsSection;