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
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
