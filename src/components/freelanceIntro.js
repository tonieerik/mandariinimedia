import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <h1 className="text-teal">
      Freelancesisällöntuottaja, joka saa viestisi erottumaan massasta
    </h1>
    <p className="mb-4">
      Moi, olen Nelli, luovuudesta ammentava freelancesisällöntuottaja!
      Nykypäivänä laadukasta sisällöntuotantoa ei voi sivuuttaa, jos haluaa
      pärjätä digitaalisessa markkinoinnissa. Niinpä autan yritystäsi
      saavuttamaan asettamasi tavoitteet sisältömarkkinoinnin keinoin.
    </p>
    <p className="mb-4">
      Freelancerina toimiva sisällöntuottaja on joustava ja näppärä valinta, kun
      tarvitset osaavaa viestinnän ammattilaista säännölliseksi kumppaniksi tai
      silloin tällöin apukäsiksi. Viestinnän ulkoistaminen
      freelancesisällöntuottajalle kannattaa, koska se helpottaa yrityksesi
      arkea – ja säästää aikaa ja rahaa.
    </p>
    <p className="mb-4">
      Freelancesisällöntuottajana ideoin, suunnittelen, tuotan ja julkaisen
      vaikuttavia tekstisisältöjä eri viestintäkanaviin – sinun tarpeitasi ja
      toiveitasi kuunnellen. Kynästäni syntyvät niin blogiartikkelit,
      asiakasreferenssit kuin somepostaukset. Sisällöntuottajana kirjoitan
      jokaisen tekstin pieteetillä, jotta se vakuuttaa paitsi sinut myös
      asiakkaasi.
    </p>
    <p className="mb-4">
      Nautin sisällöntuottajan monipuolisesta ja luovasta työstä, kun saan
      päästää näppäimistön laulamaan. Uskon, että intohimo kirjoittamiseen on
      parasta polttoainetta tekstille kuin tekstille. Kielenkäytön
      ammattilaisena pyrin siihen, että vakuuttava sisältö houkuttelee luoksesi
      uusia asiakkaita ja sitouttaa jo olemassa olevia.
    </p>
    <p className="mb-4">
      Laitetaanko yrityksesi sisällöt viimeisen päälle kuntoon? Valitse
      freelancesisällöntuottaja, joka taikoo puolestasi vaikuttavia tekstejä –
      sellaisia, joilla on merkitystä ja arvoa.
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
