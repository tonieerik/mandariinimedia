import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Content = () => (
  <div className={`bg-white px-8 flex flex-col`}>
    <Content1 />
    <Content2 />
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
          <ul>
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
          <ul>
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
          <ul>
            <li>mainokset</li>
            <li>myyntitekstit</li>
            <li>advertoriaalit</li>
            <li>laskeutumissivut</li>
            <li>markkinointimateriaalit.</li>
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
          <ul>
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
