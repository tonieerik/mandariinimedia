import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0" : "mx-8"

  return (
    <div
      className={`bg-white px-8 flex ${
        breakpoints.md ? "flex-col" : "flex-row"
      }`}
    >
      <div className={`${mx} ${breakpoints.md ? "mt-8 mb-6" : "my-12 w-1/3"}`}>
        <h2 className="text-teal text-xl font-bold">Toimitustyö</h2>
        <p>
          Rakastan kertoa tarinoita – niin pieniä kuin suuriakin. Toimittajan
          saappaissa haastattelen, pengon ja etsin kiinnostavia näkökulmia.
          Tarkastelen maailmaa uteliaasti ja tutustun uusiin ihmisiin avoimin
          mielin. Minkä tahansa aiheen voi saada eloon, kun sen pukee
          kiehtovaksi tarinaksi. Kirjoittajana on parasta, jos lukijan suu
          kääntyy hymyyn tai silmäkulma kostuu. Silloin teksti herättää
          tunteita.
        </p>
        <p>
          Henkilökohtaisia intohimojani ovat luonto ja retkeily, kestävä kehitys
          ja ekologinen matkailu sekä terveys ja hyvinvointi. Näistä aiheista
          kirjoitan enemmän kuin mielelläni. Kirjoittamisen ammattilaisena otan
          kuitenkin haltuun aiheen kuin aiheen. Kirjoitan yhtä lailla
          sykähdyttäviä henkilötarinoita kuin asiallisia artikkeleita.
        </p>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-0" : "my-12 w-1/3"}`}>
        <h2 className="text-teal text-xl font-bold">Sisällöntuotanto</h2>
        <p>
          Sisällöntuotanto voi olla vaikka mitä aina somepostauksista
          blogiteksteihin ja verkkosivuista markkinointimateriaaleihin. Haluan
          tuottaa asiakkaalle lisäarvoa kirjoittamalla, ja siksi toteutan
          mielelläni esimerkiksi houkuttelevia yritystarinoita ja
          asiakasreferenssejä. Tunnen eri viestintäkanavat ja tekstilajit kuin
          omat taskuni, joten kynästäni syntyy vaikuttavaa viestintää erilaisiin
          tarpeisiin.
        </p>
        <p>
          Urani aikana olen kirjoittanut blogiartikkeleita muun muassa
          yritysmaailmasta ja kirjallisuudesta, suunnitellut ja toteuttanut
          sadoittain postauksia eri organisaatioiden sosiaalisen median kanaviin
          ja työstänyt uutiskirjeitä laidasta laitaan. Kielen ammattilaisena
          toteutan innostavaa sisältöä aiheesta riippumatta.
        </p>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-4" : "my-12 w-1/3"}`}>
        <h2 className="text-teal text-xl font-bold">Kielenhuolto</h2>
        <p>
          Oikeakielinen kirjoitusasu on merkki kirjoittajan asiantuntemuksesta.
          Samalla tekstin sanomakin menee tehokkaasti perille. Kun kieli soljuu
          sujuvasti eteenpäin, sitä on miellyttävää lukea. Kielenkäytön ohjeet
          ja suositukset ovatkin sitä varten, että teksti ei vilise mitä sattuu
          lipsahduksia vaan saa lukijan nyökyttelemään tyytyväisenä. Niin
          sanotun punakynän ei ole tarkoitus moittia kirjoittajaa vaan opastaa
          lempeästi.
        </p>
        <p>
          Kielenhuoltajana olen tarkastanut lukuisia tietokirjojen
          käsikirjoituksia, väitöskirjoja ja lyhyempiä tekstejä laidasta
          laitaan. Koska kielenhuoltaja on lukijan edunvalvoja, hyppysissäni
          jokaisesta tekstistä tulee ymmärrettävä ja helppolukuinen, eikä se
          tukehdu jargoniin tai kielioppivirheisiin.
        </p>
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="mita-teen">
    <div className="self-center text-xl text-white w-1/6 whitespace-no-wrap transform -rotate-90 tracking-widest">
      MITÄ&nbsp;TEEN
    </div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="mita-teen">
    <div className="self-center text-xl text-white w-1/12 whitespace-no-wrap transform -rotate-90 tracking-widest">
      MITÄ&nbsp;TEEN
    </div>
    <Content />
  </section>
)

const WhatIDo = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default WhatIDo
