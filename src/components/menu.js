import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(
        relativePath: { eq: "mandariinimedia_logo_mandariini.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="bg-orange">
      <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
        <nav className={`block flex items-center w-auto`}>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0"
            key="mitä teen"
            to="/#mita-teen"
          >
            MITÄ TEEN
          </Link>
          <a href="/"><Img
            fluid={data.logoImage.childImageSharp.fluid}
            className="mx-2 lg:mx-12 w-16 lg:w-24"
          /></a>
          <Link
            className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0"
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
