import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { GatsbyImage } from "gatsby-plugin-image"
import { useForm } from "react-hook-form"
import PulseLoader from "react-spinners/PulseLoader"

const Content = () => {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const breakpoints = useBreakpoint()
  const { register, handleSubmit, reset } = useForm()

  const data = useStaticQuery(graphql`
    query {
      nelliPuhallusImage: file(
        relativePath: { eq: "nelli-sisallontuottaja-puhallus.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90)
        }
      }
    }
  `)

  const clearForm = () => {
    reset()
    setSent(false)
  }

  const onSubmit = data => {
    setLoading(true)
    setSent(false)

    fetch(`/api/sendform`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    })
      .then(res => res.json())
      .then(body => {
        if (body === "OK") {
          setLoading(false)
          setSent(true)
          setTimeout(clearForm, 3000)
        }
      })
  }

  return (
    <div
      className={`bg-white w-full ${
        breakpoints.md ? "px-8 py-8" : "px-24 py-16"
      }`}
    >
      <div className="flex">
        <div className={breakpoints.md ? "w-full" : "w-2/3"}>
          <div className="py-8 pt-0">
            Toivottavasti pääsen puhaltamaan henkiin sinunkin tarinasi –
            mahdollisimman aitona ja uniikkina. Sormeni odottavat jo
            malttamattomina näppäimistöllä. Rupatellaan ihmeessä lisää, miten
            voin olla sinulle avuksi. Voit myös pyytää suoraan tarjousta.
          </div>
          <div className="py-8 pt-0">
            Laita vaikka saman tien sähköpostia tai pirauta puhelimitse. Tutustu
            myös somekanaviini{" "}
            <a
              href="https://www.instagram.com/mandariinimedia"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-orange hover:underline"
            >
              Instagramissa
            </a>{" "}
            ja{" "}
            <a
              href="https://www.linkedin.com/in/leppanen-nelli"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-orange hover:underline"
            >
              LinkedInissä
            </a>
            . Jaan somessa kaikenmoisia ajatuksia kirjoittamisesta ja
            viestinnästä, kielenkäytön merkityksellisyydestä sekä yrittäjyyden
            iloista.
          </div>
          <div className="py-8 pt-0">Kuullaan pian!</div>
          <hr className="mt-4 mb-10 ml-2 mr-8" />
          <form className="block">
            <div className={`${breakpoints.sm ? "" : "flex"} w-full`}>
              <div className={breakpoints.sm ? "" : "flex-grow mr-6"}>
                <label htmlFor="name">Nimi</label>
                <input
                  id="name"
                  type="text"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("name")}
                />

                <label htmlFor="email">Sähköpostiosoite *</label>
                <input
                  id="email"
                  type="text"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />

                <label htmlFor="phone">Puhelinnumero</label>
                <input
                  id="phone"
                  type="tel"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("phone")}
                />
              </div>
              <div className={breakpoints.sm ? "" : "flex-grow mr-6"}>
                <label htmlFor="message">Viesti *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  cols="30"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("message", {
                    required: true,
                    minLength: 1,
                  })}
                />

                <button
                  className={`${
                    sent ? "bg-teal" : "bg-orange"
                  } text-white px-4 py-2 rounded opacity-80 hover:opacity-100 hover:cursor-pointer`}
                  onClick={handleSubmit(onSubmit)}
                  disabled={loading || sent}
                >
                  {sent
                    ? "Viesti lähetetty"
                    : loading
                    ? "Lähetetään "
                    : "Lähetä viesti"}{" "}
                  <PulseLoader loading={loading} color="white" size="5px" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={`w-1/3 ml-8 ${breakpoints.md ? "hidden" : ""}`}>
          <GatsbyImage
            image={data.nelliPuhallusImage.childImageSharp.gatsbyImageData}
            alt="Sisällöntuottaja Nelli"
          />
        </div>
      </div>
    </div>
  )
}

const Mobile = () => (
  <section className="bg-orange flex mx-0" id="yhteydenotto">
    <div className="w-1/12">&nbsp;</div>
    <Content />
  </section>
)

const Desktop = () => (
  <section className="bg-orange flex mx-0" id="yhteydenotto">
    <div className="self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
      OTAHAN YHTEYTTÄ
    </div>
    <Content />
  </section>
)

const Contact = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Contact
