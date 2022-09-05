import { Link } from "../Link";
import { RichText } from "../RichText";
import { Container } from "../Container";

export const Footer = ({
  button,
  button_label,
  email,
  copyright_text,
  text,
  links,
}) => {
  return (
    <footer className="py-8 lg:py-16 text-white bg-primary-black">
      <Container>
        <div className="max-w-6xl">
          <div>
            <RichText
              field={text}
              className="text-2xl lg:text-[2.875rem] font-bold leading-[1.3]"
            />
            <div className="flex flex-col md:flex-row items-start md:items-center space-x-4 mb-12 lg:mb-24 mt-4">
              <div className="mb-4 md:mb-0">
                <Link href={button} className="btn btn-secondary">
                  {button_label}
                </Link>
              </div>
              <a href={`mailto:${email}`}>
                <RichText
                  field={email}
                  className="text-base font-semibold text-white"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="my-6 h-[2px] w-full bg-white"></div>

        {/* Footer main */}
        <div className="flex flex-wrap justify-between overflow-hidden lg:flex-row lg:flex-nowrap">
          <div className="flex items-center">
            <span className="font-semibold text-xl mr-2">&copy;</span>
            <span className="font-semibold text-base text-white">
              {copyright_text}
            </span>
          </div>
          {/* Footer links */}
          {links && (
            <ul className="flex space-x-8">
              {links.map(({ link, linkLabel }, index) => (
                <li key={index} className="my-2">
                  <Link
                    href={link}
                    className="font-medium text-base text-white hover:text-primary-blue ease-in-out transition-colors"
                  >
                    {linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
};
