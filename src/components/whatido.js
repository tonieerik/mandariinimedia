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
          saappaissa kirjoitan yhtä lailla sykähdyttäviä henkilötarinoita kuin
          asiallisia artikkeleita. Kirjoittajana toteutan myös informatiivisia
          tiedotteita, teräviä uutisia ja houkuttelevia advertoriaaleja.
        </p>
        <p>
          Intohimon kohteitani ovat erityisesti luonto ja retkeily, kestävä
          kehitys ja ekologinen matkailu sekä terveys ja hyvinvointi. Näistä
          aiheista kirjoitan enemmän kuin mielelläni. Kirjoittamisen
          ammattilaisena otan kuitenkin haltuun minkä tahansa aiheen.
        </p>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-0" : "my-12 w-1/3"}`}>
        <h2 className="text-teal text-xl font-bold">Sisällöntuotanto</h2>
        <p>
          Sisällöntuotanto on vaikuttavaa viestintää, ja se voi olla vaikka mitä
          aina somepostauksista blogiteksteihin ja verkkosivuista
          mainosmateriaaleihin. Koukuttavan sisällön tavoitteena on herättää
          kohderyhmän mielenkiinto sekä puhutella ja sitouttaa asiakkaita.
        </p>
        <p>
          Urani aikana olen kirjoittanut blogiartikkeleita muun muassa
          yritysmaailmasta ja kirjallisuudesta, suunnitellut ja toteuttanut
          sadoittain postauksia eri organisaatioiden sosiaalisen median kanaviin
          ja työstänyt uutiskirjeitä laidasta laitaan. Tunnen eri
          viestintäkanavat, tekstilajit sekä niiden käytänteet, joten kynästäni
          syntyy vaikuttavaa viestintää erilaisiin tarpeisiin.
        </p>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-4" : "my-12 w-1/3"}`}>
        <h2 className="text-teal text-xl font-bold">Kielenhuolto</h2>
        <p>
          Oikeakielinen kirjoitusasu on merkki kirjoittajan asiantuntemuksesta.
          Kun kieli soljuu sujuvasti eteenpäin, sitä on miellyttävää lukea.
          Samalla viestikin menee tehokkaasti perille. Siksi pidän tärkeänä,
          että kieli ei vilise mitä sattuu vaan saa lukijan nyökyttelemään
          tyytyväisenä.
        </p>
        <p>
          Kielenhuoltajana olen tarkastanut muun muassa tietokirjojen
          käsikirjoituksia, väitöskirjoja ja lyhyempiä tekstejä laidasta
          laitaan. Hyppysissäni jokaisesta tekstistä tulee ymmärrettävä ja
          helppolukuinen, eikä se tukehdu jargoniin tai kielioppivirheisiin.
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
