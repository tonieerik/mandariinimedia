import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { GatsbyImage } from "gatsby-plugin-image"

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      nelliImage: file(relativePath: { eq: "sisallontuottaja-nelli.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90)
        }
      }
    }
  `)

  const breakpoints = useBreakpoint()

  return (
    <div
      className={`bg-white w-full ${
        breakpoints.md ? "px-8 py-8" : "flex px-24 py-16"
      }`}
    >
      <div className={`mr-8 ${breakpoints.l ? "basis-1/2" : "basis-2/3"}`}>
        <h2 className="text-teal text-xl font-bold">Nelli tässä moi!</h2>

        <p>
          Uskon työssäni siihen, että viestinnällä todellakin on väliä. Voihan
          sillä vakuuttaa, vaikuttaa ja valloittaa. Ja vielä mitä muuta! Ei siis
          ole suinkaan merkityksetöntä, millaiset sanat ja lauseet seuraavat
          tekstissä toisiaan. Siksi olen viestijä – ja ennen kaikkea kirjoittaja
          – joka syttyy eloisasta ja vetävästä kielenkäytöstä.
        </p>

        <p>
          Kirjoittajaksi ei kuitenkaan synnytä, vaan kirjoittajaksi tullaan. Oma
          polkuni on mutkitellut Jyväskylän yliopiston suomen kielen ja
          viestinnän opintojen kautta muun muassa toimittajaksi, tiedottajaksi
          ja viestintäsuunnittelijaksi. Värikäs matkani viestinnän kentällä on
          sytyttänyt palon auttaa myös muita kertomaan viestinsä osuvasti.
        </p>

        <p>
          Nyt olen viestintäyrittäjä ja teen työkseni sitä, mistä nautin. Saan
          kirjoittaa monenlaisia tekstejä, vaihteleviin tarpeisiin ja
          erilaisille kohderyhmille. Innostun joka kerta siitä, kun idean
          aihiosta kuoriutuu lopulta ajatuksia herättävä ja jopa koskettava
          teksti. Sellainen, joka pitää lukijan otteessaan ensimmäisestä sanasta
          viimeiseen pisteeseen saakka.
        </p>

        <p>
          Ja ne parhaimmat ideat ja ajatukset putkahtavat mieleeni usein luonnon
          helmassa – milloin koiran kanssa lenkkeillen, milloin maastopyörän
          satulassa polkien. Luonto onkin minulle äärettömän antoisa voimavara
          ja luovuuden lähde, joka tarjoaa loputtomasti leppoisaa vastapainoa
          läppärin ruudun ääressä naputtamiselle.
        </p>

        <p>
          Tukikohtani sijaitsee tällä hetkellä Jyväskylässä, mutta kirjoittaa
          voi vallan hyvin myös vaikkapa retkeilyauton laverilla Atlantin
          aaltojen pauhatessa taustalla. Paikkariippumaton yrittäjyys tarjoaa
          hillittömän vapauden tehdä tietotyötä missä ja milloin vain. Se pitää
          mieleni pirteänä. Niinpä palvelen myös sinua missä ikinä oletkin.
        </p>
      </div>
      <div className={`mt-6 ${breakpoints.l ? "basis-1/2" : "basis-1/3"}`}>
        <GatsbyImage
          image={data.nelliImage.childImageSharp.gatsbyImageData}
          alt="Sisällöntuottaja Nelli"
        />
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="kuka-olen">
    <div className="w-1/12">&nbsp;</div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="kuka-olen">
    <div className="self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
      TUTUSTUTAAN
    </div>
    <Content />
  </section>
)

const WhoIAm = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default WhoIAm
