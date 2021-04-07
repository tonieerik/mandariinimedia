import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <h1>
      Valitse freelance-sisällöntuottaja, joka taikoo puolestasi tuloksellista
      markkinointiviestintää
    </h1>
    <p className="mb-4">
      Freelance-sisällöntuottaja on joustava ja näppärä valinta, kun tarvitset
      osaavaa viestinnän ammattilaista säännölliseksi kumppaniksi tai silloin
      tällöin apukäsiksi.
    </p>
    <p className="mb-4">
      Freelance-sisällöntuottajana toteutan vaikuttavia tekstisisältöjä eri
      viestintäkanaviin ja tarpeisiin. Palan halusta hioa yrityksesi sisällöt
      viimeisen päälle kuntoon. Vakuuttava sisältö houkuttelee luoksesi uusia
      asiakkaita ja sitouttaa jo olemassa olevia.
    </p>
  </>
)

const Mobile = () => (
  <section className="mx-8 my-8">
    <Content />
  </section>
)

const Desktop = () => (
  <section className="mx-24 my-16">
    <Content />
  </section>
)

const Intro = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Intro
