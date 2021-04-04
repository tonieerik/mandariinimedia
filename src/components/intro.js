import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <>
    <p className="mb-4">
      Kaipaatko osaavaa sisällöntuottajaa tai tehokasta copywriteria? Tai
      kenties pesunkestävää journalistia tai tarkkasilmäistä kielenhuoltajaa?
      Mahtavaa, että löysit minut! Viestinnän ammattilaisena tarjoan
      monipuolisen osaamiseni käyttöösi. Voit tilata minulta kaikkea aina
      henkilötarinoista blogiartikkeleihin ja laskeutumissivuista
      kielenhuoltoprojekteihin.
    </p>
    <p className="mb-4">
      Olen Nelli, seikkailumielinen ja loputtoman utelias viestintäyrittäjä
      Jyväskylästä. Teksteilläni haluan innostaa, koskettaa ja herättää
      oivalluksia. Kielen ja viestinnän asiantuntijana sytyn eloisasta ja
      nokkelasta kielenkäytöstä, joka pitää lukijan otteessaan viimeiseen
      pisteeseen saakka. Hion jokaisesta tekstistä timantin, joka vakuuttaa
      paitsi sinut myös asiakkaasi.
    </p>
    <p className="mb-4">
      Yliopisto-opintoni ovat luoneet viestijän identiteetilleni vankan
      jalustan. Urallani olen työskennellyt viestinnän kentällä niin
      toimittajana, tiedottajana, viestintäsuunnittelijana, sisällöntuottajana
      kuin kielenhuoltajana. Jos jotain olen vuosien varrella oppinut, niin sen,
      että viestinnällä todellakin on väliä. Sillä voi vakuuttaa, vaikuttaa ja
      valloittaa.
    </p>
    <p className="mb-4">
      Uskon, että kirjoittaen kaikki on mahdollista. Siksi siitä kannattaa ottaa
      kaikki ilo ja hyöty irti. Ota siis avuksesi viestinnän ammattilainen,
      jonka leipälaji ja intohimo on kirjoittaminen. Loihdin puolestasi
      tekstejä, joilla on merkitystä ja arvoa. Laita viestiä tai soita, niin
      rupatellaan lisää.
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
