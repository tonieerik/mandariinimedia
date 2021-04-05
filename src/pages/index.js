import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Intro from "../components/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import WhatIDo from "../components/whatido"

const recommendations = [
  {
    author: "Anna Mäkelä, Content Manager, Duunitori",
    text:
      "Mandariinimedian Nelli on tuottanut Duunitorin työelämämediaan laadukkaita ja hyvin kirjoitettuja artikkeleita. Hän ehdottaa aktiivisesti kiinnostavia ideoita ja toteuttaa sovitut toimeksiannot aikataulussa. Yhteistyö Nellin kanssa on sujuvaa ja työn jälki priimaa. Suosittelen Nelliä lämpimästi erilaisiin tehtäviin kirjoittamisen ja sisällöntuotannon parissa.",
  },
  {
    author: "Anna-Kaisa Talvitie, viestintäpäällikkö, Kasvu Open",
    text:
      "Mandariinimedian Nelli on luotettava ammattikirjoittaja. Toimeksiannosta eteenpäin Nelli ottaa vastuun työstä: yhteydenpidosta haastateltaviin, taustatyöstä, aikataulusta ja tärkeimmästä – tekstin sielusta. Jokainen työ on vastannut toiveitamme. Iso peukku!",
  },
  {
    author: "Mirva Kiviaho, toimituspäällikkö, Tuuma-kustannu",
    text:
      "Mandariinimedia on luotettava yhteistyökumppani. Nelli hoitaa käsikirjoitusten kielenhuollot tarkasti ja sovitun aikataulun mukaisesti.",
  },
  {
    author: "Toni Leppänen, elämyspalveluyrittäjä, Huvimestari",
    text:
      "Nelli tuntee sisällöntuotannon salat ja paneutuu kirjoittamiseen tosissaan. Hän suunnittelee inspiroivia somesisältöjä, toteuttaa ne ammattilaisen ottein ja seuraa tuloksia. Nellin apu on pieni kulu siihen nähden, millaista hyötyä Huvimestari saa energisestä ja ajankohtaisesta markkinointiviestinnästä.",
  },
]

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

      <section className="bg-teal flex flex-col justify-center items-center text-gray-100 font-bold text-md py-12">
        <div className="h-12 font-bold text-lg">
          Asiakkaan suusta kuuluu totuus
        </div>
        <Carousel
          autoPlay={true}
          interval={7000}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          {recommendations.map((x, i) => (
            <div key={`refe-${i}`} className="leading-tight font-normal">
              <i>"{x.text}"</i>
              <br />
              <br />
              <p className="font-semibold">{x.author}</p>
            </div>
          ))}
        </Carousel>
      </section>

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
