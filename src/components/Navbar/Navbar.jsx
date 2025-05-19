import React, { useState, useEffect } from "react";
import NavElement from "../ui/NavElement/NavElement";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../ui/Button/Button";

function Navbar() {
  const navLinksData = [
    { path: "/", text: "الرئيسية" },
    { path: "تعرف-علينا", text: "تعرف علينا" },
    { path: "خدماتنا", text: "خدماتنا" },
    { path: "تواصل-معنا", text: "للتواصل معنا" },
  ];

  const middleIndex = Math.ceil(navLinksData.length / 2);
  const firstHalfLinks = navLinksData.slice(0, middleIndex);
  const secondHalfLinks = navLinksData.slice(middleIndex);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex items-center w-screen px-4 md:px-8 md:pe-[7rem] text-white 
                     fixed top-0 left-0 right-0 h-[70px] z-50
                     justify-between md:justify-center transition-colors duration-300 ease-in-out
                     ${isScrolled ? "bg-[rgb(27,38,44)] shadow" : "bg-transparent"}`}
      >
        <div className="md:hidden">
          <NavLink to="تواصل-معنا">
            <Button className={`py-2 rounded-full mx-0`}>
              <i className="fa-solid fa-phone"></i>
            </Button>
          </NavLink>
        </div>

        <div className="md:hidden">
          <NavLink to="/" className="hover:opacity-90 transition-opacity">
            <img src={Logo} alt="Logo" className="h-[70px] w-auto" />
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-row-reverse items-center space-x-4 space-x-reverse">
          <ul className="flex flex-row-reverse items-center space-x-2 space-x-reverse">
            {firstHalfLinks.map((link) => (
              <NavElement key={link.path} path={link.path}>
                {link.text}
              </NavElement>
            ))}
          </ul>

          <div>
            <NavLink to="/" className="hover:opacity-90 transition-opacity ">
              <img src={Logo} alt="Logo" className="h-[70px] w-auto" />
            </NavLink>
          </div>

          <ul className="flex flex-row-reverse items-center space-x-2 space-x-reverse">
            {secondHalfLinks.map((link) => (
              <NavElement key={link.path} path={link.path}>
                {link.text}
              </NavElement>
            ))}
          </ul>
          <NavLink to="تواصل-معنا">
            <Button className={`py-2 rounded-full`}>
              <i className="fa-solid fa-phone"></i>
            </Button>
          </NavLink>
        </div>
      </nav>

      <div
        className={`
          md:hidden bg-[rgb(27,38,44)] text-white shadow-lg
          fixed top-[70px] left-0 right-0 z-40 
          transition-all duration-600 ease-in-out transform
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col items-center py-4">
          {navLinksData.map((link) => (
            <NavElement
              key={link.path}
              path={link.path}
              onClick={toggleMobileMenu}
              className="py-2 w-full text-center"
            >
              {link.text}
            </NavElement>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
