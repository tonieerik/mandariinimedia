import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <h1 className="text-teal">
      Freelancesisällöntuottaja sinun tarpeitasi ja toiveitasi varten
    </h1>
    <p className="mb-4">
      Freelancerina toimiva sisällöntuottaja on joustava ja näppärä valinta, kun
      tarvitset osaavaa viestinnän ammattilaista säännölliseksi kumppaniksi tai
      silloin tällöin apukäsiksi. Usein viestinnän ulkoistaminen on kannattava
      ratkaisu, koska se helpottaa kummasti yrityksen arkea – ja ennen kaikkea
      säästää aikaa ja rahaa.
    </p>
    <p className="mb-4">
      Freelancesisällöntuottajana toteutan vaikuttavia tekstisisältöjä eri
      viestintäkanaviin – sinun tarpeitasi ja toiveitasi kuunnellen. Minulta
      syntyvät niin blogiartikkelit, asiakasreferenssit kuin somepostauksetkin.
      Sisällöntuottajana kirjoitan jokaisen tekstin pieteetillä, jotta se
      vakuuttaa paitsi sinut myös asiakkaasi.
    </p>
    <p className="mb-4">
      Sisällöntuottajan sydämeni sykkii lujaa silloin, kun saan päästää
      näppäimistöni laulamaan. Freelancerin vapaus on parasta polttoainetta
      tekstille kuin tekstille. Ja tämän kirjoittajan palon suuntaan aina
      siihen, että vakuuttava sisältö houkuttelee luoksesi uusia asiakkaita ja
      sitouttaa jo olemassa olevia.
    </p>
    <p className="mb-4">
      Kuulostaa aika hyvältä, eikö? Laitetaanko siis yrityksesi sisällöt
      viimeisen päälle kuntoon? Valitse freelancesisällöntuottaja, joka taikoo
      puolestasi vaikuttavia tekstejä – sellaisia, joilla on merkitystä ja
      arvoa.
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
