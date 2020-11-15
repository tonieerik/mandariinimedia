import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <p className="mb-4">
      Olen Nelli, seikkailunhaluinen tarinankertoja ja loputtoman utelias
      sisällöntuottaja. Jutuillani haluan innostaa, koskettaa ja herättää
      oivalluksia. Sytyn eloisasta kielenkäytöstä, joka pitää lukijan otteessaan
      viimeiseen pisteeseen saakka.
    </p>
    <p className="mb-4">
      Kaipaatpa sitten kutkuttavan artikkelin rustaajaa, napakoiden
      somesisältöjen tekijää tai asiantuntevaa kielenhuoltajaa, olen sinua
      varten. Ota yhteyttä, niin rupatellaan ihmeessä lisää.
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
