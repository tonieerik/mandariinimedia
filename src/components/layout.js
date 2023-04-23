import CookieConsent from "react-cookie-consent"
import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children, headerText = null, noMenu = false }) => (
  <>
    <Header headerText={headerText} />
    {!noMenu && <Menu />}
    <main>{children}</main>
    <Footer />
    <CookieConsent
      location="bottom"
      buttonText="Jep!"
      cookieName="mandariinimediaCookie"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        background: "#ff9d5c",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        letterSpacing: "0.1rem",
        paddingRight: "20px",
        paddingLeft: "20px",
        borderRadius: "0.25rem",
      }}
      expires={365}
      acceptOnScroll={true}
      acceptOnScrollPercentage={20}
    >
      Sivusto käyttää evästeitä. Käyttämällä sivustoa hyväksyt tämän. Kelaa
      alaspäin ja tämä banneri katoaa. Halutessasi voit tutustua{" "}
      <a
        className="underline"
        target="_blank"
        href="/tietosuojaseloste"
        rel="noreferrer"
      >
        tietosuojaselosteeseen
      </a>
      .
    </CookieConsent>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
