import React from "react";
import { RichText, Link } from "../../../components";
import { Container } from "../../../components/Container";

const AboutSection = ({ slice }) => (
  <section className="mt-20 lg:mt-32 bg-light-blue-1 relative">
    <Container>
      <div>
        <div className="flex flex-col md:flex-row py-16 gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-y-12 lg:gap-x-0">
          <div className="order-2 md:order-1 md:w-[400px] lg:absolute rounded-3xl z-10 shadow-main -top-6">
            <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              className="object-cover rounded-3xl md:w-[400px] h-[500px]"
            />
          </div>
          <div className="order-1 md:order-2 ml-auto py-12 px-16 bg-white rounded-3xl shadow-main z-0 lg:w-3/6 xl:w-2/3 flex items-center">
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
