import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { linkResolver } from "../../prismic";
import { Link } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { RichText } from "../RichText";
import { Container } from "../Container";

export const Header = ({ logo_text, navigation }) => {
  return (
    <header>
      <Container>
        <Disclosure as="nav">
          {({ open }) => (
            <div>
              <div className="relative flex items-center justify-between h-24">
                <div className="flex items-center justify-center md:flex-1 sm:items-stretch sm:justify-between">
                  {/* Main logo_text */}
                  <div className="font-bold text-2xl">
                    <Link href="/" className="flex items-center flex-shrink-0">
                      <RichText field={logo_text} />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="items-center hidden sm:flex sm:ml-6 space-x-8">
                    {navigation &&
                      navigation.map((item, index) => (
                        <NavLink key={index} {...item} />
                      ))}
                  </div>
                </div>

                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2">
                    <span className="block w-6 h-6" aria-hidden="true">
                      <FontAwesomeIcon icon={open ? faBars : faXmark} />
                    </span>
                    <span className="sr-only">
                      {open ? "Open" : "Close"} main menu
                    </span>
                  </Disclosure.Button>
                </div>
              </div>

              {/* Mobile Nav */}
              <Disclosure.Panel className="pt-2 pb-3 sm:hidden gap-2 grid">
                {navigation &&
                  navigation.map((item, index) => (
                    <Disclosure.Button key={index} as={NavLink} {...item} />
                  ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </Container>
    </header>
  );
};

const NavLink = ({ link, linkLabel }) => {
  const { pathname } = useRouter();
  const isCurrent = pathname === linkResolver(link);

  return (
    <Link
      href={link}
      className={`${
        isCurrent ? "text-primary-blue" : "text-primary-black"
      } text-base font-medium`}
      aria-current={isCurrent ? "page" : undefined}
    >
      {linkLabel}
    </Link>
  );
};
