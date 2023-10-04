import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      duunitoriDakotaRobinImage: file(
        relativePath: { eq: "Duunitori-Dakota-Robin.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      kopiostoSariAaltonenImage: file(
        relativePath: { eq: "Kopiosto-Sari-Aaltonen.webp" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      tunnejamieliUnettomuusImage: file(
        relativePath: { eq: "Tunnejamieli-unettomuus.webp" }
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
      yritystehdasOonaTarvainenJaAnnaFagelImage: file(
        relativePath: { eq: "Yritystehdas-Oona-Tarvainen-ja-Anna-Fagel.webp" }
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
        className={`bg-white ${breakpoints.md ? "px-8 py-8" : "p-16"}
    `}
      >
        <h2 className="text-xl text-teal">Tutustu kirjoituksiini</h2>
        <div className="pb-8">
          Portfoliooni olen listannut muutamia esimerkkejä erityyppisistä
          teksteistä, jotka on julkaistu verkossa ja jotka ovat avoimesti
          kaikkien luettavissa.
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.kopiostoSariAaltonenImage.childImageSharp.gatsbyImageData
              }
              alt="Sari Aaltonen"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.kopiosto.fi/kopiosto/elokuvaajalle-maailma-sakenoi-kameran-linssin-lapi/"
                target="_blank"
                rel="noreferrer"
              >
                Kopiosto: Elokuvaajalle maailma säkenöi kameran linkkin läpi
              </a>
            </p>
            <p className="text-sm">
              Tarinat ovat kiehtoneet elokuvaaja Sari Aaltosta pienestä pitäen.
              Nyt hän haluaa elokuvan keinoin herättää tunteita, haastaa
              ajattelemaan – ja saada jopa ällistymään. Aaltoselle elokuvaaminen
              ei ole mikä tahansa ammatti vaan tapa olla olemassa.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <GatsbyImage
              image={
                data.tunnejamieliUnettomuusImage.childImageSharp.gatsbyImageData
              }
              alt="Unettomuus"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.tunnejamieli.fi/2023/08/29/univaje-vaikuttaa-monella-tavalla-mielenterveyteen-siksi-apua-kannattaa-hakea-ajoissa/"
                target="_blank"
                rel="noreferrer"
              >
                Tunne &amp; Mieli: Univaje vaikuttaa monella tavalla
                mielenterveyteen – siksi unettomuuteen kannattaa hakea apua
                ajoissa
              </a>
            </p>
            <p className="text-sm">
              Uni on puskuri, joka auttaa ihmistä jaksamaan läpi hankalista
              tilanteista sekä palautumaan niistä. Psykologian tutkijatohtori
              Liisa Kuulan mukaan hyvät yöunet vaikuttavat suoraan
              mielenterveyteen.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
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
                data.duunitoriDakotaRobinImage.childImageSharp.gatsbyImageData
              }
              alt="Dakota Robin"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/dakota-robin-monimuotoisuus"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Dakota Robin on kohdannut urallaan syrjintää ja
                naureskelua – nyt hän tekee töitä sen eteen, ettei kukaan kokisi
                samaa
              </a>
            </p>
            <p className="text-sm">
              Jokainen työyhteisö, jossa on ihmisiä, on automaattisesti
              monimuotoinen. Ihmisoikeuskouluttaja ja DEI-asiantuntija Dakota
              Robin tietää tämän paremmin kuin hyvin. Hän on itse oppinut
              luovimaan työelämässä suomalais-turkkilaisena transmiehenä, jolla
              on vaikea lukihäiriö.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
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
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
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
                data.yritystehdasOonaTarvainenJaAnnaFagelImage.childImageSharp
                  .gatsbyImageData
              }
              alt="Oona Tarvainen ja Anna Fågel"
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://yritystehdas.fi/blogi/opiskelukavereista-bisneskumppaneiksi-valmennuksesta-oppia-yrittajyyteen "
                target="_blank"
                rel="noreferrer"
              >
                Yritystehdas: Opiskelukavereista bisneskumppaneiksi –
                valmennuksesta oppia yrittäjyyteen
              </a>
            </p>
            <p className="text-sm">
              Korkeakouluopinnot ja työnteon voi yhdistää saumattomasti, kun
              perustaa oman yrityksen jo opiskeluaikana. Valmistuttuaan Anna
              Fågel ja Oona Tarvainen hyppäsivät suoraan täysipäiväisiksi
              yrittäjiksi. Yrittäjävalmennus tuki kaksikkoa yrittäjyyden
              alkutaipaleella.
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
