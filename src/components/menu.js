import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <header className="bg-orange">
    <div className="flex flex-wrap items-center justify-evenly max-w-4xl p-2 mx-auto md:p-8">
      <nav className={`md:block md:flex md:items-center w-auto`}>
        <Link
          className="lg:block mt-4 text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0"
          key="mitä teen"
          to="/#mita-teen"
        >
          MITÄ TEEN
        </Link>
        <span className="bg-gray-100 h-4 w-4 ml-8 mr-8 lg:ml-32 lg:mr-24 rounded-full">
          &nbsp;
        </span>
        <Link
          className="lg:block mt-4 text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0"
          key="portfolio"
          to="/#portfolio"
        >
          PORTFOLIO
        </Link>
      </nav>
    </div>
  </header>
)

export default Menu
