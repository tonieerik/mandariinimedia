import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Intro from "../components/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import WhatIDo from "../components/whatido"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sceneryImage: file(relativePath: { eq: "maisema.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sceneryImageMobile: file(relativePath: { eq: "maisema-mobile.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const breakpoints = useBreakpoint()

  /*
  return (
    <div>
      <br />
      <center>SIVUSTO ON RAKENTEILLA</center>
    </div>
  )
  */
  return (
    <Layout>
      <SEO title="Mandariinimedia" />

      <Intro />

      <section
        className={`bg-teal flex justify-center items-center text-gray-100 font-bold tracking-wider ${
          breakpoints.md ? "h-32 text-xl px-10" : "h-64 text-2xl"
        }`}
      >
        <i>Oivaltava viestintä vakuuttaa, vaikuttaa ja valloittaa.</i>
      </section>

      <WhatIDo />

      {breakpoints.md ? (
        <Img fluid={data.sceneryImageMobile.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.sceneryImage.childImageSharp.fluid} />
      )}

      <Portfolio />
    </Layout>
  )
}

export default IndexPage
