import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Menu />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
