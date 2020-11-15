import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Header = () => {
  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      nelliImage: file(relativePath: { eq: "nelli.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nelliImageMobile: file(relativePath: { eq: "nelli-mobile.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nelliImageIpad: file(relativePath: { eq: "nelli-ipad.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (breakpoints.sm) {
    return (
      <BackgroundImage
        className="flex flex-col justify-end h-64 text-gray-100 mobileHeaderImage"
        fluid={data.nelliImageMobile.childImageSharp.fluid}
      >
        <div className="flex flex-row justify-end w-full p-2">
          <div className="w-1/2 flex-col items-end bg-teal rounded">
            <div className="px-2 pt-2 pb-1 leading-none">
              <strong>NELLI LEPPÄNEN</strong>
            </div>
            <div className="px-2 pb-2 text-sm leading-snug">
              vapaa kirjoittaja ja viestinnän ammattilainen
            </div>
          </div>
        </div>
      </BackgroundImage>
    )
  } else if (breakpoints.md) {
    return (
      <BackgroundImage
        className="flex flex-col justify-end text-gray-100 ipadHeaderImage"
        fluid={data.nelliImageIpad.childImageSharp.fluid}
      >
        <div className="flex flex-row justify-end w-full p-2">
          <div className="w-1/2 flex-col items-end bg-teal rounded">
            <div className="px-2 pt-2 pb-1 leading-none">
              <strong>NELLI LEPPÄNEN</strong>
            </div>
            <div className="px-2 pb-2 text-sm leading-snug">
              vapaa kirjoittaja ja viestinnän ammattilainen
            </div>
          </div>
        </div>
      </BackgroundImage>
    )
  } else {
    return (
      <div className="bg-teal text-gray-100 flex">
        <div className="w-1/2">
          <Img fluid={data.nelliImage.childImageSharp.fluid} />
        </div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className="text-2xl font-bold">NELLI LEPPÄNEN</div>
          <br />
          <div>vapaa kirjoittaja ja viestinnän ammattilainen</div>
        </div>
      </div>
    )
  }
}

export default Header
