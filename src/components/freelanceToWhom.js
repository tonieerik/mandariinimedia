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
          Yritykselle freelancesisällöntuottaja
        </h2>
        <ul className="multiline">
          <li>
            Kaipaatko sisällöntuotantoa esimerkiksi sosiaalisen median kanaviin,
            verkkosivuille tai uutiskirjeeseen? Eikö yrittäjän aika riitä
            kaikkeen siihen markkinointiviestintään, jota haluaisit tehdä?
            Keskity rauhassa ydinosaamiseesi ja ulkoista viestintä minulle,
            ammattilaisen osaaviin käsiin.
          </li>
          <li>
            Freelancesisällöntuottajana olen kustannustehokas vaihtoehto, sillä
            maksat vain tehdystä työstä – joko tuntihinnoitteluna tai
            projektikohtaisesti. Samalla vältät ylimääräisen säädön, koska et
            joudu maksamaan rekrytointikustannuksia ja muita perinteisiä
            työntekijäkuluja.
          </li>
          <li>
            Freelancerista tulee yrityksellesi parhaimmillaan pitkäaikainen
            luottokumppani, joka tuntee liiketoimintasi ytimen ja osaa viestiä
            siitä yhtä tuloksekkaasti kuin sinä itse tai omat työntekijäsi.
            Kokeneena sisällöntuottajana osaan loihtia tekstejä, jotka jättävät
            jäljen.
          </li>
        </ul>
      </div>
      <div className={`${breakpoints.md ? "my-4" : "mt-0 mb-8 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">
          Viestintätoimistolle freelancesisällöntuottaja
        </h2>
        <ul className="multiline">
          <li>
            Meinaako jatkuva kiire painaa päälle? Eivätkö talon oman väen kädet
            tahdo riittää kaikkeen? Ammattimaisena freelancesisällöntuottajana
            hyppään sujuvasti minkä tahansa viestintätoimiston remmiin – vaikka
            suoraan lennosta. Teen säännöllistä yhteistyötä erityyppisten
            organisaatioiden kanssa.
          </li>
          <li>
            Minulla on vankka kokemus sisällöntuottajan lisäksi myös
            toimittajana, copywriterina ja kielenhuoltajana. Niinpä tunnen eri
            tekstilajit, kielenkäytön tehokeinot ja viestintäkanavat kuin omat
            taskuni. Olen viestinnän asiantuntija, jolla on kirjoittajan sydän
            ja ajattelijan mieli.
          </li>
          <li>
            Kouluttaudun ja kehitän itseäni jatkuvasti.
            Freelancesisällöntuottajana haluan pysyä aallonharjalla siitä, mitä
            viestinnän kentällä tapahtuu ja mikä on ‘hot ja pop’ juuri nyt.
            Ajantasaisesta osaamisestani on hyötyä kaikenlaisissa
            sisällöntuotantoprojekteissa – you name it.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FreelanceWhy
