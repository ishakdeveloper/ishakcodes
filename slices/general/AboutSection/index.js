import React from "react";
import { RichText, Link } from "../../../components";
import { Container } from "../../../components/Container";

const AboutSection = ({ slice }) => (
  <section className="mt-32 bg-light-blue-1 relative">
    <Container>
      <div>
        <div className="flex py-16">
          <div className="absolute rounded-3xl z-10 shadow-main -top-6">
            <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              className="object-cover rounded-3xl w-[400px] h-[500px]"
            />
          </div>
          <div className="ml-auto py-12 px-16 bg-white rounded-3xl shadow-main z-0 w-2/3 flex items-center">
            <div>
              <RichText
                field={slice.primary.title}
                className="typography-heading-2"
              />
              <RichText
                field={slice.primary.description}
                className="typography-text-1 mt-2"
              />
              <div className="mt-6">
                <Link href={slice.primary.button} className="btn btn-primary">
                  {slice.primary.button_text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutSection;
