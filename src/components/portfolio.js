import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()

  return (
    <div
      className={`bg-white flex pb-8 ${
        breakpoints.md ? "px-0 flex-col" : "px-8 flex-row"
      }
    `}
    >
      <div
        className={`bg-white ${breakpoints.md ? "px-8 py-8" : "px-24 py-16"}
    `}
      >
        <h2 className="text-xl text-teal">Tutustu kirjoituksiini:</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://tyoelama-duunitori.imgix.net/wp-content/uploads/2020/09/aamukahvilla-henriikka-reinman-eraopas.jpg?auto=format&crop=faces&fit=crop&h=1066&w=1600"
                alt="Henriikka Reinman"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/aamukahvilla-henriikka-eraopas"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Oivallus metsäretkellä vei Henriikan, 29, unelmien
                uralle &ndash; hektinen arki Helsingissä vaihtui luonnonrauhaan
              </a>
            </p>
            <p className="text-sm">
              Kun Aamukahvilla-blogin kirjoittaja, somevaikuttaja ja
              viestintäyrittäjä Henriikka Reinman löysi itsensä yhä uudestaan
              luonnon helmasta, hän oivalsi, että hän haluaa seikkailla metsässä
              myös työkseen. Erä- ja luonto-oppaan tutkinto auttoi suuntaamaan
              somevaikuttajan työtä lähemmäs omia mielenkiinnon kohteita. Pian
              luonnosta tuli intohimotyö.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://kasvuopen.fi/wp-content/uploads/2020/04/2019-dolea-800x533.jpg"
                alt="Ismo Sillanpää ja Mika Salomäki"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/maailman-ekologisin-pillikone-valloittaa-juomalasit-ympari-maailmaa/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Maailman ekologisin pillikone valloittaa juomalasit
                ympäri maailmaa
              </a>
            </p>
            <p className="text-sm">
              Muovin kulutus on räjähtänyt käsiin viimeisten vuosikymmenten
              aikana. Vaikka muovinen pilli on pieni ylellisyystuote, niitä
              käytetään valtavat määrät maailmanlaajuisesti. Dolea Straw on
              innovoinut uudenlaisen pillin, joka on täysin kierrätettävä,
              biohajoava ja liimaton. Kasvuyritys haluaa tehdä maailmasta
              puhtaamman paikan pilli kerrallaan.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://tyoelama-duunitori.imgix.net/wp-content/uploads/2020/12/hanna-tim.jpg?auto=format&crop=faces&fit=crop&h=1260&w=2400"
                alt="Tim De Maziere ja Hanna Vartia"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/pakuelama-toissa-tien-paalla"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Hannan ja Timin seikkailusta tuli elämäntapa &ndash;
                pakettiauto on ollut jo vuosia koti ja työpaikka
              </a>
            </p>
            <p className="text-sm">
              Elämää ei ole tehty hukattavaksi vain toimistossa istumiseen,
              uskovat Hanna Vartia ja Tim De Maziere. Suomalais-belgialainen
              pariskunta toteutti haaveensa ja lähti seikkailemaan ympäri
              Eurooppaa omalla reissupakullaan. Spontaanista seikkailusta
              muodostui nopeasti elämäntapa, jolle ei näy loppua.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://kasvuopen.fi/wp-content/uploads/2020/09/nainen_vihreydessa_pexels-800x534.jpg"
                alt="Kuvituskuva: nainen vihreydessä"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/kasvuyrityksen-hiilijalanjalki-kuriin-ilmastositoumuksen-avulla/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Kasvuyrityksen hiilijalanjälki kuriin
                Ilmastositoumuksen avulla
              </a>
            </p>
            <p className="text-sm">
              Vastuullisuus on iso teema, joka puhuttaa yritysmaailmassa. Yksi
              konkreettinen ekoteko on tarttua ilmastoasioihin.
              Keskuskauppakamari lanseerasi vuoden 2019 lopussa
              päästövähennyksiä edistävän Ilmastositoumuksen, joka on saanut
              monet kasvuyritykset tarttumaan tuumasta toimeen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <Content />
    <div className="self-center text-xl text-white w-1/6 whitespace-no-wrap transform -rotate-90 tracking-widest">
      PORTFOLIO
    </div>
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <Content />
    <div className="self-center text-xl text-white w-1/12 whitespace-no-wrap transform -rotate-90 tracking-widest">
      PORTFOLIO
    </div>
  </section>
)

const Portfolio = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Portfolio
