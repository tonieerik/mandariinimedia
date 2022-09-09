import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()

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
            {!breakpoints.md && (
              <img
                src="https://www.kopiosto.fi/app/uploads/2022/06/02155555/021-Kopiosto-Constantinos-Mavromichalis-Gogi.jpg"
                alt="Constantinos Mavromichalis"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://www.tunnejamieli.fi/wp-content/uploads/2021/11/Kisu-1280x640.jpg"
                alt="Kisu"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://tyoelama-duunitori.imgix.net/wp-content/uploads/2022/05/credit_Jessica_Riskila%CC%88_Dreamy_Lapland_Visuals.jpeg?auto=format&crop=faces&fit=crop&h=1260&q=60&w=2400"
                alt="Mona Kajander"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://tyoelama-duunitori.imgix.net/wp-content/uploads/2022/06/AnnaMuittari_1.jpg"
                alt="Anna Muittari"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://www.op-media.fi/contentassets/567d36e81c874f1396c99e6b5d75abcf/rekki1_1600x900.jpg?width=1900&height=800&mode=crop&center=0.5,0.5"
                alt="Bertta Häkkinen"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://kasvuopen.fi/wp-content/uploads/2022/04/nina-rautiainen-business-jyvaskyla-2022-3-1600x1067.jpg"
                alt="Nina Rautiainen"
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://kasvuopen.fi/wp-content/uploads/2020/03/DSC08240-1600x1067.jpg"
                alt=""
                className="h-56"
              />
            )}
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
            {!breakpoints.md && (
              <img
                src="https://crop.kaleva.fi/WCRs-d3IbLLlN5k-Pc7jAoBkFZY=/2600x1464/smart/https%3A//lorien-media-prod.s3.amazonaws.com/images/archive/2022/07/06/2022.07.06.15.10.29_20210624-165856.jpg"
                alt="Tommi Lahtonen"
                className="h-56"
              />
            )}
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
