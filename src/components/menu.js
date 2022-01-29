import { Link } from "gatsby"
import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Menu = () => {
  const breakpoints = useBreakpoint()

  return (
    <header className="bg-orange">
      <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
        <nav className={`block flex items-center w-auto h-32`}>
          <Link
            className={`lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 ${
              breakpoints.md ? "px-2" : "px-4"
            }`}
            key="mitä teen"
            to="/#mita-teen"
          >
            MITÄ TEEN
          </Link>
          <Link
            className={`lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 ${
              breakpoints.md ? "px-2" : "px-4"
            }`}
            key="kuka olen"
            to="/#kuka-olen"
          >
            KUKA OLEN
          </Link>
          <Link
            className={`lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 ${
              breakpoints.md ? "px-2" : "px-4"
            }`}
            key="portfolio"
            to="/#portfolio"
          >
            PORTFOLIO
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Menu
