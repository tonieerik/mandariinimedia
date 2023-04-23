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
            Kaipaatko vaikuttavaa sisällöntuotantoa esimerkiksi sosiaalisen
            median kanaviin, verkkosivuille tai uutiskirjeeseen? Eikö yrittäjän
            aika riitä kaikkeen markkinointiviestintään, jota haluaisit tehdä?
            Keskity rauhassa ydinosaamiseesi ja ulkoista sisältömarkkinointi
            minulle, ammattilaisen osaaviin käsiin.
          </li>
          <li>
            Freelancesisällöntuottajana olen kustannustehokas vaihtoehto, sillä
            maksat vain tehdystä työstä – joko tuntihinnoitteluna tai
            projektikohtaisesti. Samalla vältät ylimääräisen säädön ja turhat
            kulut, koska et joudu maksamaan ylimääräisiä rekrytointikustannuksia
            ja muita perinteisiä työntekijäkuluja.
          </li>
          <li>
            Parhaimmillaan freelancerista tulee yrityksellesi pitkäaikainen
            luottokumppani, joka tuntee liiketoimintasi ytimen ja osaa viestiä
            siitä yhtä tuloksekkaasti kuin sinä itse tai omat työntekijäsi.
            Kokeneena sisällöntuottajana osaan loihtia tekstejä, jotka jättävät
            muistijäljen ja saavat vastaanottajan toimimaan.
          </li>
        </ul>
      </div>
      <div className={`${breakpoints.md ? "my-4" : "mt-0 mb-8 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">
          Viestintätoimistolle freelancesisällöntuottaja
        </h2>
        <ul className="multiline">
          <li>
            Meinaako jatkuva kiire painaa päälle? Eivätkö yrityksesi
            in-house-tiimin kädet riitä kaikkiin viestintäprojekteihin?
            Kokeneena freelancesisällöntuottajana hyppään sujuvasti minkä
            tahansa viestintätoimiston remmiin – vaikka suoraan lennosta. Teen
            säännöllistä yhteistyötä eri alojen organisaatioiden kanssa.
          </li>
          <li>
            Viestintäyrittäjänä minulla on vankka kokemus sisällöntuottajan
            lisäksi myös toimittajana, copywriterina ja kielenhuoltajana. Niinpä
            tunnen eri tekstilajit, kielenkäytön tehokeinot ja viestintäkanavat
            kuin omat taskuni. Olen viestinnän asiantuntija, jonka syttyy
            kirjoittamisesta ja tarinankerronnasta.
          </li>
          <li>
            Kouluttaudun ja kehitän itseäni jatkuvasti kirjoittajana ja
            viestinnän asiantuntijana. Freelancesisällöntuottajana haluan pysyä
            aallonharjalla siitä, mitä viestinnän kentällä tapahtuu ja mitkä
            asiat trendaavat juuri nyt. Ajantasaisesta osaamisestani on hyötyä
            kaikenlaisissa sisällöntuotantoprojekteissa.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FreelanceWhy
