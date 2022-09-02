import React from "react";
import { RichText, Link, Image } from "../../../components";
import { Container } from "../../../components/Container";

const AboutSection = ({ slice }) => (
  <section className="my-16 bg-light-blue-1 ">
    <Container>
      <div className="relative ">
        <div className="relative flex justify-end py-32">
          <div className="rounded-3xl z-10">
            <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              className="object-cover rounded-3xl w-[490px] h-[512px]"
            />
          </div>
          <div className="relative bg-white rounded-3xl shadow-md my-16 z-0 w-10/12 flex items-center">
            <div>
              <RichText
                field={slice.primary.title}
                className="text-4xl text-primary-black font-bold"
              />
              <RichText
                field={slice.primary.description}
                className="font-normal text-xl leading-[1.9]"
              />
              <div>
                <Link
                  href={slice.primary.button}
                  className="btn btn-secondary btn-xl"
                >
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
