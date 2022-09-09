import { Link } from "gatsby"
import React, { useState } from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import logo from "../images/mandariinimedia_logo_vaaka_valkea.png"

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const breakpoints = useBreakpoint()

  return breakpoints.sm ? (
    <header className="w-full h-16 bg-orange drop-shadow-lg">
      <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
        <span className="text-white">
          <img
            src={logo}
            width="144"
            height="73"
            alt="logo"
            className="w-32 m-2"
          />
        </span>

        <div
          className={`${
            !isMenuVisible ? "hidden" : ""
          } border border-gray-200 rounded-lg list-none fixed top-0 right-0 pl-4 pr-10 pt-16 pb-4 bg-orange z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 list-none`}
        >
          <p className="md:hidden z-90 fixed top-2 right-5">
            <button
              className="text-right text-white text-4xl"
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              &times;
            </button>
          </p>

          <p>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
              key="mitä teen"
              to="/#mita-teen"
              onClick={() => setIsMenuVisible(false)}
            >
              Miten voin auttaa?
            </Link>
          </p>
          <p>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
              key="kuka olen"
              to="/#kuka-olen"
              onClick={() => setIsMenuVisible(false)}
            >
              Tutustutaan
            </Link>
          </p>
          <p>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
              key="portfolio"
              to="/#portfolio"
              onClick={() => setIsMenuVisible(false)}
            >
              Portfolio
            </Link>
          </p>
          <p>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
              key="yhdeydenotto"
              to="/#yhteydenotto"
              onClick={() => setIsMenuVisible(false)}
            >
              Otahan yhteyttä
            </Link>
          </p>
        </div>

        <div className="flex items-center md:hidden">
          <button
            className="text-white text-4xl font-bold opacity-90 hover:opacity-100 duration-300"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  ) : (
    <header className="bg-orange">
      <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
        <nav className={`block flex items-center w-auto h-32`}>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
            key="mitä teen"
            to="/#mita-teen"
          >
            MITEN VOIN AUTTAA?
          </Link>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
            key="kuka olen"
            to="/#kuka-olen"
          >
            TUTUSTUTAAN
          </Link>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
            key="portfolio"
            to="/#portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
            key="yhdeydenotto"
            to="/#yhteydenotto"
          >
            OTAHAN YHTEYTTÄ
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Menu
