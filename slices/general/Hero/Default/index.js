import React from "react";
import { RichText } from "../../../../components";
import { Container } from "../../../../components/Container";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../../components/Link";

const HeroDefault = ({ slice }) => {
  return (
    <section id={slice.primary.id} className="pt-24">
      <Container>
        <div className="space-y-[26rem]">
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

          <div className="flex items-end justify-between">
            <div className="">
              <Link href={slice.primary.github_link}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fill-current"
                  size="2x"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center absolute left-0 right-0 ml-auto mr-auto">
              <div className="h-28 w-[2px] bg-primary-black"></div>
              <span className="uppercase text-base font-medium text-primary-black tracking-[10px] mt-4">
                Read more
              </span>
            </div>
            <div className="justify-end">
              <a href={`mailto:${slice.primary.email}`}>
                <span className="text-primary-black text-base font-semibold flex justify-end">
                  {slice.primary.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroDefault;
