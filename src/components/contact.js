import React, { useState } from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useForm } from "react-hook-form"
import PulseLoader from "react-spinners/PulseLoader"

const Content = () => {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const breakpoints = useBreakpoint()
  const { register, handleSubmit, reset } = useForm()

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
        console.log(`Response from API:`, body)
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
      <div className="py-8 pt-0">
        Toivottavasti pääsen puhaltamaan henkiin sinunkin tarinasi –
        mahdollisimman aitona ja uniikkina. Sormeni odottavat jo malttamattomina
        näppäimistöllä. Rupatellaan ihmeessä lisää, miten voin olla sinulle
        avuksi. Voit myös pyytää suoraan tarjousta.
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
        . Jaan somessa kaikenmoisia ajatuksia kirjoittamisesta ja viestinnästä,
        kielenkäytön merkityksellisyydestä sekä yrittäjyyden iloista.
      </div>
      <div className="py-8 pt-0">Kuullaan pian!</div>
      <hr className="mt-8 mb-12 mx-4" />
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
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
              rows="10"
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
