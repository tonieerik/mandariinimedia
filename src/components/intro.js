import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <p className="mb-4">
      Hei, oletko vailla osaavaa sisällöntuottajaa, pesunkestävää toimittajaa,
      tehokasta copywriteria tai tarkkasilmäistä kielenhuoltajaa? Mainiota, että
      löysit minut!
    </p>
    <p className="mb-4">
      Olen Nelli, sanojen maailmassa seikkaileva ajattelija. Viestinnän
      asiantuntijana autan yrityksiä, organisaatioita ja medioita kertomaan
      viestinsä niin, että se iskostuu taatusti vastaanottajan mieleen. Satsaan
      aina siihen, että jokainen teksti on sujuvasti, ymmärrettävästi ja
      vetävästi toteutettu.
    </p>
    <p className="mb-4">
      Ota siis avuksesi kielenkäytön ja kirjoittamisen ammattilainen, joka
      loihtii puolestasi tekstejä – sellaisia, joilla on merkitystä ja arvoa.
      Koska kirjoittaminen on leipälajini ja tarinankerronta intohimoni, voit
      tilata minulta kaikkea aina asiakasreferensseistä blogiartikkeleihin ja
      henkilötarinoista kielenhuoltoprojekteihin.
    </p>
    <p className="mb-4">
      Kirjoittaen kaikki on mahdollista. Rupatellaan ihmeessä lisää, miten voin
      olla sinulle avuksi.
    </p>
  </>
)

const Mobile = () => (
  <section className="mx-8 my-8">
    <Content />
  </section>
)

const Desktop = () => (
  <section className="mx-48 my-16">
    <Content />
  </section>
)

const Intro = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Intro
