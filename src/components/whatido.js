import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <div className="w-full bg-white px-8 flex flex-col">
    <Content1 />
    <Content2 />
    <div className="p-8 pt-0 pb-16">
      Viime aikoina olen syventynyt kirjoittaessani erityisesti työelämään,
      yritysmaailmaan, vastuullisuuteen, kulttuurialaan, mielen hyvinvointiin
      sekä luontoon ja retkeilyyn. Ei ole kuitenkaan olemassa aihetta, jota
      ammattikirjoittaja ei ottaisi haltuun.{" "}
      <a href="#yhteydenotto" className="font-bold text-teal hover:underline">
        Kysy viestintäpalveluistani lisää tai pyydä suoraan tarjous
      </a>
      .
    </div>
  </div>
)

const Content1 = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0" : "mx-8"

  return (
    <div
      className={`bg-white flex ${breakpoints.md ? "flex-col" : "flex-row"}`}
    >
      <div className={`${mx} ${breakpoints.md ? "mt-8 mb-2" : "mt-12 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Toimitustyö</h2>
        <p>
          Kaipaatko sykähdyttävän henkilöjutun tai asiallisen artikkelin
          kirjoittajaa? Toimittajan saappaissa etsin kiinnostavia näkökulmia ja
          tarkastelen maailmaa uteliaasti. Ennen kaikkea rakastan
          tarinankerrontaa. Siksi uskon, että minkä tahansa aiheen voi saada
          eloon, kun sen pukee koukuttavaksi tarinaksi. Parhaimmillaan lukijan
          suu kääntyy hymyyn tai silmäkulma kostuu. Silloin teksti saa
          liikkeelle jotain sanoja suurempaa: se herättää tunteita.
        </p>
        <div>
          Toimittajana kirjoitan
          <ul className="mt-3">
            <li>henkilöjutut</li>
            <li>artikkelit</li>
            <li>reportaasit</li>
            <li>uutiset</li>
            <li>kolumnit</li>
            <li>referaatit</li>
            <li>raportit.</li>
          </ul>
        </div>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-4" : "mt-12 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Sisällöntuotanto</h2>
        <p>
          Haluatko tuottaa asiakkaallesi lisäarvoa informatiivisilla,
          houkuttelevilla ja viihdyttävillä tekstisisällöillä? Mikä tahansa
          teksti palvelee parhaiten yrityksesi tarpeita, kun se on laadukas,
          brändisi mukainen ja hakukoneoptimoitu. Sisällöntuottajana toteutan
          sellaisia tekstejä, jotka tuovat ulottuvillesi uusia asiakkaita ja
          saavat heidät sitoutumaan yritykseesi. Kynästäni syntyy vaikuttavaa
          viestintää eri viestintäkanaviin ja tarpeisiin.
        </p>
        <div>
          Sisällöntuottajana toteutan
          <ul className="mt-3">
            <li>blogiartikkelit</li>
            <li>somejulkaisut</li>
            <li>yritystarinat</li>
            <li>asiakasreferenssit</li>
            <li>tiedotteet</li>
            <li>uutiskirjeet</li>
            <li>verkkosivutekstit.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Content2 = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0" : "mx-8"

  return (
    <div
      className={`bg-white flex ${breakpoints.md ? "flex-col" : "flex-row"}`}
    >
      <div className={`${mx} ${breakpoints.md ? "mb-4" : "my-12 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Copywriting</h2>
        <p>
          Oletko vailla ratkaisukeskeisiä tekstejä, joiden myötä asiakkaasi
          ryhtyy tekemään jotain, kuten ostaa tuotteesi tai palvelusi? Haluatko
          takoa pelkästään tekstisisällöillä lisää tulosta? Copywriterina teen
          syvällistä taustatyötä, jotta opin tuntemaan asiakkaasi aivoitukset ja
          mieltymykset. Yhdistän tekstiin kuin tekstiin myynnin ja ihmisen
          psykologian kulmakiviä. Tavoitteenani on kasvattaa yrityksesi myyntiä
          tuloksellisten tekstien avulla.
        </p>
        <div>
          Copywriterina tuotan
          <ul className="mt-3">
            <li>mainokset</li>
            <li>myyntitekstit</li>
            <li>advertoriaalit</li>
            <li>laskeutumissivut</li>
            <li>markkinointimateriaalit</li>
            <li>tuote- ja palvelukuvaukset.</li>
          </ul>
        </div>
      </div>
      <div className={`${mx} ${breakpoints.md ? "my-4" : "my-12 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Kielenhuolto</h2>
        <p>
          Tahdotko tekstistäsi ymmärrettävän ja helppolukuisen – sellaisen, joka
          saa vastaanottajan nyökyttelemään tyytyväisenä? Kielenhuoltajana
          vastaan siitä, ettei tekstisi tukehdu jargoniin tai
          kielioppivirheisiin vaan soljuu sujuvasti eteenpäin. Oikeakielinen
          kirjoitusasu on merkki kirjoittajan asiantuntemuksesta, ja samalla
          tekstin sanoma menee tehokkaasti perille. Kielenhuolto on sekä
          kirjoittajan että lukijan huolenpitoa, jota ei kannata sivuuttaa.
        </p>
        <div>
          Kielenhuoltajana hoidan
          <ul className="mt-3">
            <li>tietokirjat</li>
            <li>väitöskirjat</li>
            <li>opinnäytetyöt</li>
            <li>julkaisut</li>
            <li>oppaat.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="mita-teen">
    <div className="w-1/12">&nbsp;</div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="mita-teen">
    <div className="self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
      MITEN&nbsp;VOIN&nbsp;AUTTAA?
    </div>
    <Content />
  </section>
)

const WhatIDo = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default WhatIDo
