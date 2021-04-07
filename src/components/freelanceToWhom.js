import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const FreelanceWhy = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0" : "mx-16"
  return (
    <div className={`${mx} bg-white px-8 flex flex-col`}>
      <Content />
    </div>
  )
}

const Content = () => {
  const breakpoints = useBreakpoint()

  return (
    <div
      className={`bg-white flex ${breakpoints.md ? "flex-col" : "flex-row"}`}
    >
      <div
        className={`${breakpoints.md ? "mt-8 mb-2" : "mr-8 mt-0 mb-8 w-1/2"}`}
      >
        <h2 className="text-teal text-xl font-bold">
          Yritykselle freelance-sisällöntuottaja
        </h2>
        <ul className="multiline">
          <li>
            Kaipaatko sisällöntuotantoa esimerkiksi someen tai verkkosivuille?
            Eikö yrittäjän aika riitä kaikkeen? Keskity ydinosaamiseesi ja
            ulkoista viestintä minulle, ammattilaisen osaaviin käsiin.
          </li>
          <li>
            Freelance-sisällöntuottajana olen edullinen vaihtoehto, sillä maksat
            vain tehdystä työstä. Samalla vältät rekrytointikustannukset ja muut
            perinteiset työntekijäkulut.
          </li>
          <li>
            Freelancerista tulee yrityksellesi parhaimmillaan pitkäaikainen
            luottokumppani, joka tuntee liiketoimintasi ytimen ja osaa viestiä
            siitä yhtä tuloksekkaasti kuin omat työntekijäsi.
          </li>
        </ul>
      </div>
      <div className={`${breakpoints.md ? "my-4" : "mt-0 mb-8 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">
          Viestintätoimistolle freelance-sisällöntuottaja
        </h2>
        <ul className="multiline">
          <li>
            Meinaako kiire painaa päälle? Eikö talon oman väen kädet tahdo
            riittää? Ammattimaisena freelance-sisällöntuottajana hyppään
            sujuvasti minkä tahansa viestintätoimiston remmiin – vaikka suoraan
            lennosta.
          </li>
          <li>
            Minulla on vankka kokemus sisällöntuottajan lisäksi myös
            toimittajana, copywriterina ja kielenhuoltajana. Niinpä tunnen eri
            tekstilajit, kielenkäytön tehokeinot ja viestintäkanavat kuin omat
            taskuni.
          </li>
          <li>
            Kouluttaudun ja kehitän itseäni jatkuvasti. Haluan pysyä
            aallonharjalla siitä, mitä viestinnän kentällä tapahtuu ja mikä on
            ‘hot ja pop’ juuri nyt. Ajantasaisesta osaamisestani on hyötyä
            kaikenlaisissa sisällöntuotantoprojekteissa.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FreelanceWhy
