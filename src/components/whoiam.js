import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()

  return (
    <div className={`bg-white ${breakpoints.md ? "px-8 py-8" : "px-24 py-16"}`}>
      <h2 className="text-teal text-xl font-bold">Nelli tässä moi!</h2>

      <p>
        Uskon työssäni siihen, että viestinnällä todellakin on väliä. Voihan
        sillä vakuuttaa, vaikuttaa ja valloittaa – ja vielä mitä muuta! Ei siis
        ole suinkaan merkityksetöntä, millaiset sanat ja lauseet seuraavat
        tekstissä toisiaan. Siksi olen viestijä – ja ennen kaikkea kirjoittaja –
        joka syttyy eloisasta ja nokkelasta kielenkäytöstä.
      </p>

      <p>
        Kirjoittajaksi ei kuitenkaan synnytä, vaan kirjoittajaksi tullaan. Oma
        polkuni on kulkenut Jyväskylän yliopiston suomen kielen ja viestinnän
        opintojen kautta muun muassa toimittajaksi, tiedottajaksi ja
        viestintäsuunnittelijaksi. Oppimismatkani viestinnän kentällä on ollut
        lukuisten tekstien värittämä, ja olen siitä hurjan kiitollinen.{" "}
      </p>

      <p>
        Nyt olen viestintäyrittäjä ja teen työkseni sitä, mitä rakastan. Saan
        kirjoittaa erilaisia tekstejä, erilaisiin tarpeisiin ja erilaisille
        kohderyhmille. Innostun joka kerta siitä, kun pienen pienestä ideasta
        kuoriutuu lopulta ajatuksia herättävä – jopa koskettava – teksti.
        Sellainen, joka pitää lukijan otteessaan ensimmäisestä sanasta
        viimeiseen pisteeseen saakka.
      </p>

      <p>
        Ja ne parhaimmat ideat ja ajatukset putkahtavat mieleeni usein luonnon
        helmassa – milloin koiran kanssa lenkkeillen, milloin maastopyörän
        satulassa polkien. Luonto onkin minulle äärettömän antoisa voimavara,
        joka tarjoaa loputtomasti leppoisaa vastapainoa ruudun ääressä
        naputtamiselle.
      </p>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="kuka-olen">
    <div className="self-center text-xl text-white w-1/6 whitespace-no-wrap transform -rotate-90 tracking-widest">
      KUKA&nbsp;OLEN
    </div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="kuka-olen">
    <div className="self-center text-xl text-white w-1/12 whitespace-no-wrap transform -rotate-90 tracking-widest">
      KUKA&nbsp;OLEN
    </div>
    <Content />
  </section>
)

const WhoIAm = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default WhoIAm
