import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const FreelanceWhat = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0 mb-12" : "mx-16 pb-24"

  return (
    <div className={`${mx} bg-white my-8 px-8 flex flex-col`}>
      Esimerkiksi tätä kaikkea teen freelance-kirjoittajana:
      <Content />
      <p>
        Oletpa sitten yrittäjä tai viestintätoimiston edustaja, voit tilata
        minulta viestintäprojekteja erilaisiin tarpeisiin. Tutustu
        Mandariinimedian koko palvelutarjontaan ja ota reippaasti yhteyttä.
        Rupatellaan tarkemmin, miten voin olla avuksi
        freelance-sisällöntuottajana.
      </p>
    </div>
  )
}

const Content = () => {
  const breakpoints = useBreakpoint()
  return (
    <div
      className={`bg-white flex ${breakpoints.md ? "flex-col" : "flex-row"}`}
    >
      <div className={`${breakpoints.md ? "mt-8 mb-2" : "mr-8 mt-8 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Sisällöntuotanto</h2>
        <ul>
          <li>blogiartikkelit</li>
          <li>somejulkaisut</li>
          <li>yritystarinat</li>
          <li>asiakasreferenssit</li>
          <li>tiedotteet</li>
          <li>uutiskirjeet</li>
          <li>verkkosivutekstit</li>
        </ul>
      </div>
      <div className={`${breakpoints.md ? "my-4" : "mt-8 w-1/2"}`}>
        <h2 className="text-teal text-xl font-bold">Copywriting</h2>
        <ul>
          <li>mainokset</li>
          <li>myyntitekstit</li>
          <li>advertoriaalit</li>
          <li>laskeutumissivut</li>
          <li>markkinointimateriaalit</li>
        </ul>
      </div>
    </div>
  )
}

export default FreelanceWhat
