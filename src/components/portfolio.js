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
                Uratarina: Oivallus metsäretkellä vei Henriikan, 29, unelmien
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
                Yritystarina: Maailman ekologisin pillikone valloittaa
                juomalasit ympäri maailmaa
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
                Seikkailutarina: Hannan ja Timin seikkailusta tuli elämäntapa
                &ndash; pakettiauto on ollut jo vuosia koti ja työpaikka
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
                src="https://kasvuopen.fi/wp-content/uploads/2020/11/natural_indigo.jpg"
                alt="Natural Indigo Finland"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/kun-pieni-maaseutuyritys-kohtasi-kasvu-openissa-globaalin-muotijatin-alkoi-tapahtua-ihmeita/"
                target="_blank"
                rel="noreferrer"
              >
                Referenssitarina: Kun pieni maaseutuyritys kohtasi Kasvu
                Openissa globaalin muotijätin, alkoi tapahtua ihmeitä
              </a>
            </p>
            <p className="text-sm">
              Pohjois-Pohjanmaan pelloilta ponnistava Natural Indigo Finland
              osallistui vuonna 2018 Kasvu Open -sparraukseen. Pian
              utopistisesta haaveesta tuli totta, kun pieni startup pääsi
              sekoittelemaan sinistä indigo-väriä ehkäpä ikonisimman suomalaisen
              muotibrändin, Marimekon, kanssa.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://www.op-media.fi/contentassets/06adfea61b3f4a099977a7d9f6c1adcb/dammenberg-4740.jpg"
                alt="Dammenbergin Suklaatehdas"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.op-media.fi/yrittajyys/herkullinen-kaura-kaakaoinnovaatio-sulaa-nyt-parempiin-suihin-maailmanmarkkinoilla/"
                target="_blank"
                rel="noreferrer"
              >
                Kansainvälistymistarina: Herkullinen kaura-kaakaoinnovaatio
                sulaa nyt parempiin suihin maailmanmarkkinoilla
              </a>
            </p>
            <p className="text-sm">
              Lempääläinen Dammenbergin Suklaatehdas onnistui luomaan puhtaan
              kauran ja makoisan kaakaon liitosta ainutlaatuisen
              kaura-kaakaolevitteen. Ruokainnovaatio valloittaa parhaillaan
              herkkusuita Keski-Euroopassa.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            {!breakpoints.md && (
              <img
                src="https://tyoelama-duunitori.imgix.net/wp-content/uploads/2021/03/DSC00735.jpg?auto=format&crop=faces&fit=crop&h=1260&w=2400"
                alt="Taimo Halme"
                className="h-56"
              />
            )}
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/etaopetus-korona-nuoret"
                target="_blank"
                rel="noreferrer"
              >
                Opetarina: Opettaja Taimo Halme on huolissaan nuorista:
                “Tikittävä mielenterveyspommi on purettava” – näin korona
                laittoi koulujen arjen uusiksi
              </a>
            </p>
            <p className="text-sm">
              Koulujen arki on ollut myllerryksessä viime keväästä lähtien, kun
              koronavirus tuli ja pisti opetuksen uuteen uskoon. Yläkoulun
              äidinkielenopettaja Taimo Halme kertoo, miten etäopetus ja muut
              uudet käytännöt ovat vaikuttaneet niin opettajien kuin oppilaiden
              arkeen ja jaksamiseen.
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
