import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const FreelanceWhat = () => {
  const breakpoints = useBreakpoint()
  const mx = breakpoints.md ? "mx-0 mb-12" : "mx-16 pb-24"

  return (
    <div className={`${mx} bg-white my-12 px-8 flex flex-col`}>
      <h2 className="text-teal text-xl font-bold">
        Freelancekirjoittaja, jonka viestintä valloittaa
      </h2>
      <p>
        Tekstien maailmassa seikkailen tutulla ja rakkaalla maaperällä, sillä
        kirjoittaminen on leipälajini ja tarinankerronta intohimoni.
        Freelancekirjoittajana solahdankin helposti niin sisällöntuottajan,
        toimittajan kuin copywriterin haalareihin. Millaista freelanceria sitten
        tarvitsetkin, tartun aina hommiin ammattilaisen ottein.
      </p>
      <span className="text-xl text-teal">
        Freelancekirjoittajana teen muun muassa kaikkea tätä:
      </span>
      <Content />
      <p className="mt-6">
        Oletpa sitten yrittäjä tai viestintätoimiston edustaja ja kaipaat
        osaavia apukäsiä viestintään, olen sinua varten. Tutustu tarkemmin
        Mandariinimedian{" "}
        <a href="/" className="text-orange font-black underline">
          viestintäpalveluihin
        </a>
        &nbsp; ja&nbsp;
        <a href="/#portfolio" className="text-orange font-black underline">
          portfolioon
        </a>
        . Ota reippaasti yhteyttä, niin rupatellaan, miten voin olla avuksi
        freelancesisällöntuottajana.
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
      <div className={`${breakpoints.md ? "mt-8 mb-2" : "mr-8 mt-8 w-1/3"}`}>
        <h3 className="text-teal text-xl font-bold">Sisällöntuotanto</h3>
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
      <div className={`${breakpoints.md ? "my-4" : "mt-8 w-1/3"}`}>
        <h3 className="text-teal text-xl font-bold">Toimitustyö</h3>
        <ul>
          <li>henkilöjutut</li>
          <li>artikkelit</li>
          <li>reportaasit</li>
          <li>uutiset</li>
          <li>kolumnit</li>
          <li>referaatit</li>
          <li>raportit</li>
        </ul>
      </div>
      <div className={`${breakpoints.md ? "my-4" : "mt-8 w-1/3"}`}>
        <h3 className="text-teal text-xl font-bold">Copywriting</h3>
        <ul>
          <li>mainokset</li>
          <li>myyntitekstit</li>
          <li>advertoriaalit</li>
          <li>laskeutumissivut</li>
          <li>markkinointimateriaalit</li>
          <li>tuote- ja palvelukuvaukset</li>
        </ul>
      </div>
    </div>
  )
}

export default FreelanceWhat
