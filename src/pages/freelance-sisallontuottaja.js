import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import FreelanceIntro from "../components/freelanceIntro"
import FreelanceToWhom from "../components/freelanceToWhom"
import FreelanceWhat from "../components/freelanceWhat"
import Layout from "../components/layout"
import Seo from "../components/seo"

const recommendations = [
  {
    name: "Anna Mäkelä",
    title: "Content Manager, Duunitori",
    text: "Mandariinimedian Nelli on tuottanut Duunitorin työelämämediaan laadukkaita ja hyvin kirjoitettuja artikkeleita. Hän ehdottaa aktiivisesti kiinnostavia ideoita ja toteuttaa sovitut toimeksiannot aikataulussa. Yhteistyö Nellin kanssa on sujuvaa ja työn jälki priimaa. Suosittelen Nelliä lämpimästi erilaisiin tehtäviin kirjoittamisen ja sisällöntuotannon parissa.",
  },
  {
    name: "Anna-Kaisa Talvitie",
    title: "viestintäpäällikkö, Kasvu Open",
    text: "Mandariinimedian Nelli on luotettava ammattikirjoittaja. Toimeksiannosta eteenpäin Nelli ottaa vastuun työstä: yhteydenpidosta haastateltaviin, taustatyöstä, aikataulusta ja tärkeimmästä – tekstin sielusta. Jokainen työ on vastannut toiveitamme. Iso peukku!",
  },
  {
    name: "Mirva Kiviaho",
    title: "toimituspäällikkö, Tuuma-kustannus",
    text: "Mandariinimedia on luotettava yhteistyökumppani. Nelli hoitaa käsikirjoitusten kielenhuollot tarkasti ja sovitun aikataulun mukaisesti.",
  },
  {
    name: "Toni Leppänen",
    title: "elämyspalveluyrittäjä, Huvimestari",
    text: "Nelli tuntee sisällöntuotannon salat ja paneutuu kirjoittamiseen tosissaan. Hän suunnittelee inspiroivia somesisältöjä, toteuttaa ne ammattilaisen ottein ja seuraa tuloksia. Nellin apu on pieni kulu siihen nähden, millaista hyötyä Huvimestari saa energisestä ja ajankohtaisesta markkinointiviestinnästä.",
  },
  {
    name: "Elina Hovinen",
    title: "asiakkuuspäällikkö, Hube Helsinki",
    text: "Mandariinimedian Nelliltä tulee todella hyviä juttuja, joita ei juurikaan tarvitse editoida. Hän osaa kysyä haastateltavilta aina juuri oikeat kysymykset ja nostaa jutuissa esiin kiinnostavat yksityiskohdat. Nelli on hyvä toimittaja, jonka työnjälkeen ja aikataulutukseen voi aina luottaa.",
  },
  {
    name: "Paula Koivupalo",
    title: "markkinointipäällikkö, Yritystehdas",
    text: "Nellin teksteissä näkyy ammattimainen ote. Uudet aiheet hän ottaa joka kerta sujuvasti haltuun, ja lopputuloksena on selkeitä ja kiinnostavia artikkeleita. Yhteistyö on mutkatonta ja itseohjautuvaa. On ollut ilo tehdä Nellin kanssa yhteistyötä!",
  },
  {
    name: "Sanna Virtanen",
    title: "markkinointistrategi, CEO, Flumenia",
    text: "Olemme tehneet Nellin kanssa yhteistyötä sisältömarkkinoinnin tarpeidemme kanssa. Sisällöt ovat vaihdelleet asiakas- ja osaajatarinoista aina haastaviin toimialakohtaisiin teksteihin. Olemme olleet erittäin tyytyväisiä Nellin ammattitaitoon, sisältöihin ja siihen, kuinka työt hoituvat ammattilaisen ottein aikataulussa. Voimme suositella!",
  },
  {
    name: "Meri Nykänen",
    title: "Päätoimittaja, Tunne & Mieli",
    text: "Mandariinimedian Nelli kirjoittaa lehteemme säännöllisesti terveyteen ja mielen hyvinvointiin liittyviä tekstejä. Hän myös ideoi ja tarjoaa oivaltavia juttuideoita. Nelli on luotettava ammattilainen, joka pitää kiinni sovituista aikatauluista. Suosittelen!",
  },
]

const IndexPage = () => (
  <Layout
    headerText="Freelancesisällöntuottaja ja viestinnän asiantuntija,
    <br /> 
  joka rakastaa kirjoittaa ja nauttii hyvistä tarinoista
  "
    noMenu
  >
    <Seo
      title="Freelancesisällöntuottaja"
      description="Haluatko viestinnällä lisää näkyvyyttä, asiakkaita tai myyntiä? Ota avuksesi freelancesisällöntuottaja. Taion vaikuttavia tekstejä, joilla on merkitystä."
    />

    <FreelanceIntro />

    <FreelanceToWhom />

    <section className="bg-teal flex flex-col justify-center items-center text-gray-100 font-bold text-md py-20">
      <div className="h-12 font-bold text-xl">Muiden suusta kuultua</div>
      <Carousel
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
      >
        {recommendations.map((x, i) => (
          <div key={`refe-${i}`} className="leading-tight font-normal pb-12">
            <i>"{x.text}"</i>
            <br />
            <br />
            <p className="font-semibold">
              {x.name}
              <br />
              {x.title}
            </p>
          </div>
        ))}
      </Carousel>
    </section>

    <FreelanceWhat />
  </Layout>
)

export default IndexPage
