import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      duunitoriAnnaMuittariImage: file(
        relativePath: { eq: "Duunitori-Anna-Muittari.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      kopiostoGogiImage: file(
        relativePath: { eq: "Kopiosto-Constantinos-Mavromichalis-Gogi.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      tunnejamieliKisuImage: file(
        relativePath: { eq: "Tunnejamieli-Kisu.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      duunitoriMonaKajanderImage: file(
        relativePath: { eq: "Duunitori-Mona-Kajander.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      opBerttaHakkinenImage: file(
        relativePath: { eq: "OP-Bertta-Hakkinen.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      kasvuopenNinaRautiainenImage: file(
        relativePath: { eq: "Kasvuopen-Nina-Rautiainen.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      kasvuopenYrityskulttuuriImage: file(
        relativePath: { eq: "Kasvuopen-yrityskulttuuri.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      pohjoisenpolutTommiLahtonenImage: file(
        relativePath: { eq: "Pohjoisenpolut-Tommi-Lahtonen.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <div
      className={`w-full bg-white flex pb-8 ${
        breakpoints.md ? "px-0 flex-col" : "px-8 flex-row"
      }
    `}
    >
      <div
        className={`bg-white ${breakpoints.md ? "px-8 py-8" : "px-24 py-16"}
    `}
      >
        <h2 className="text-xl text-teal">Tutustu kirjoituksiini</h2>
        <div className="p-8 pt-0">
          Portfoliooni olen listannut muutamia esimerkkejä erityyppisistä
          teksteistä, jotka on julkaistu verkossa.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={data.kopiostoGogiImage.childImageSharp.gatsbyImageData}
              alt="Constantinos Mavromichalis"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.kopiosto.fi/kopiosto/viihteen-leikkikentilla-saa-heittaytya-luovuuden-vietavaksi/"
                target="_blank"
                rel="noreferrer"
              >
                Kopiosto: Viihteen leikkikentillä saa heittäytyä luovuuden
                vietäväksi
              </a>
            </p>
            <p className="text-sm">
              Vapaus tehdä omannäköistä viihdettä pitää tv-toimittaja, juontaja
              ja sisällöntuottaja Constantinos ”Gogi” Mavromichalisin mielen
              virkeänä. Niinpä hän on jatkuvasti ideoimassa ja luomassa uutta.
              Parhaat toteutukset syntyvät aitojen tarinoiden ja valloittavan
              huumorin liitosta.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={data.tunnejamieliKisuImage.childImageSharp.gatsbyImageData}
              alt="Kisu"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.tunnejamieli.fi/2021/11/16/uni-ja-arkiset-teot-huoltavat-aivoja/"
                target="_blank"
                rel="noreferrer"
              >
                Tunne &amp; Mieli: Uni ja arkiset teot huoltavat aivoja
              </a>
            </p>
            <p className="text-sm">
              Aivotutkija Kiti Müller vakuuttaa, että jokainen voi pitää huolta
              päänuppinsa terveydestä. Arkisetkin teot lisäävät virkeitä työ- ja
              elinvuosia.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.duunitoriMonaKajanderImage.childImageSharp.gatsbyImageData
              }
              alt="Mona Kajander"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/paikkariippumaton-tyo"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Monan työ ei katso aikaa tai paikkaa &ndash; näin
                jatkuva etätyö ympäri maailmaa onnistuu: ”En halua istua neljän
                seinän sisällä”
              </a>
            </p>
            <p className="text-sm">
              Reissaamisen ja työnteon yhdistäminen on nyt mahdollista Mona
              Kajanderille, joka luopui kokonaan pysyvästä kodistaan
              Rovaniemellä. Digiyrittäjän paikkariippumaton työ kulkee sinne,
              minne hän ikinä haluaakaan matkustaa.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.duunitoriAnnaMuittariImage.childImageSharp.gatsbyImageData
              }
              alt="Anna Muittari"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/alanvaihtajan-tarina-poliisista-varhaiskasvatuksen-opettajaksi"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Alanvaihto muutti Annan elämän kertaheitolla &ndash;
                rohkea loikka poliisista päiväkotiin kannatti: ”Onneksi
                uskalsin”
              </a>
            </p>
            <p className="text-sm">
              Joskus elämässä täytyy repäistä, eikä jahkailla loputtomiin. Anna
              Muittari muutti Jyväskylästä Saariselälle ja vaihtoi poliisin
              viran varhaiskasvatuksen opettajan arkeen. Nyt hän nauttii
              työstään pohjoisen luonnon ympäröimänä, vaikka aluksi
              alanvaihdossa ei tuntunut olevan lainkaan järkeä.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={data.opBerttaHakkinenImage.childImageSharp.gatsbyImageData}
              alt="Bertta Häkkinen"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.op-media.fi/yrittajyys/kiertotaloudesta-vaatebisneksen-uusi-musta2/"
                target="_blank"
                rel="noreferrer"
              >
                OP Media: Kiertotaloudesta vaatebisneksen uusi musta &ndash;
                Rekki kannustaa nyt vastuullisen kuluttamisen tielle
              </a>
            </p>
            <p className="text-sm">
              Kestävä kehitys, kiertotalous ja vastuullisuus ovat nykypäivän
              ilmiöitä, jotka näkyvät entistä vahvemmin vaatebisneksessä. Second
              hand -vaatteistaan tunnettu Rekki tahtoo luoda vastuullista
              kulutuskulttuuria myös ulkomailla.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.kasvuopenNinaRautiainenImage.childImageSharp
                  .gatsbyImageData
              }
              alt="Nina Rautiainen"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/vastuullisen-liiketoiminnan-maihinnousu-on-rytinalla-kaynnissa/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Vastuullisen liiketoiminnan maihinnousu on rytinällä
                käynnissä
              </a>
            </p>
            <p className="text-sm">
              Nyt yritys kuin yritys voi saavuttaa etulyöntiaseman markkinoilla,
              kun se huomioi elintärkeät vastuullisuuskysymykset
              liiketoiminnassaan.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.kasvuopenYrityskulttuuriImage.childImageSharp
                  .gatsbyImageData
              }
              alt="Yrityskulttuuri"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/kannustava-yrityskulttuuri-parantaa-tyontekijoiden-tyytyvaisyytta-ja-suorituskykya/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Kannustava yrityskulttuuri parantaa työntekijöiden
                tyytyväisyyttä ja suorituskykyä
              </a>
            </p>
            <p className="text-sm">
              Parhaimmillaan yrityskulttuuri on voima, joka auttaa sekä yritystä
              että yksilöä menestymään. Vaikka samantyyppiset toimintatavat
              toistuvat eri yrityksissä, jokaisen yrityksen kulttuuri on aina
              uniikki – onhan se työntekijöidensä summa.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.pohjoisenpolutTommiLahtonenImage.childImageSharp
                  .gatsbyImageData
              }
              alt="Tommi Lahtonen"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.pohjoisenpolut.fi/suomen-kuuluisin-pitka-vaellusreitti-on-jo-osin-ka/4748166"
                target="_blank"
                rel="noreferrer"
              >
                Pohjoisen Polut: UKK-reitti kaipaa pelastusta
              </a>
            </p>
            <p className="text-sm">
              Tommi Lahtonen kulki jalkaisin Suomi-neidon helmoilta päälaelle
              saakka. Hän uskoo, että pitkille reiteille olisi kysyntää, ja
              siksi unohdettu UKK-reitti pitäisi herättää henkiin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <div className="w-1/12">&nbsp;</div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <div className="self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
      PORTFOLIO
    </div>
    <Content />
  </section>
)

const Portfolio = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Portfolio
