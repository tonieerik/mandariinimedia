import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import parse from "html-react-parser"

const Header = ({ headerText = null }) => {
  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      nelliImage: file(relativePath: { eq: "freelance-sisallontuottaja.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      nelliImageMobile: file(
        relativePath: { eq: "freelance-sisallontuottaja-mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 300)
        }
      }
      nelliImageIpad: file(
        relativePath: { eq: "freelance-sisallontuottaja-ipad.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 500)
        }
      }
    }
  `)

  const bgMobile = convertToBgImage(getImage(data.nelliImageMobile))
  const bgIpad = convertToBgImage(getImage(data.nelliImageIpad))

  if (breakpoints.sm) {
    return (
      <BackgroundImage
        className="flex flex-col justify-end h-64 text-gray-100 mobileHeaderImage"
        {...bgMobile}
      >
        <div className="flex flex-row justify-end w-fit p-2 mx-2">
          <div className="w-full flex-col items-end bg-teal rounded">
            <div className="px-2 pt-2 pb-1 leading-none">
              <strong>NELLI LEPPÄNEN</strong>
            </div>
            <div className="px-2 pb-2 text-sm leading-snug">
              {(headerText && parse(headerText)) || (
                <div>
                  Viestinnän ammattilainen & freelancesisällöntuottaja,
                  <br />
                  jolla on kirjoittajan sydän ja ajattelijan mieli
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundImage>
    )
  } else if (breakpoints.md) {
    return (
      <BackgroundImage
        className="flex flex-col justify-end text-gray-100 ipadHeaderImage"
        {...bgIpad}
      >
        <div className="flex flex-row justify-end w-full p-2">
          <div className="w-1/2 flex-col items-end bg-teal rounded">
            <div className="px-2 pt-2 pb-1 leading-none">
              <strong>NELLI LEPPÄNEN</strong>
            </div>
            <div className="px-2 pb-2 text-sm leading-snug">
              {(headerText && parse(headerText)) || (
                <div>
                  Viestinnän ammattilainen & freelancesisällöntuottaja,
                  <br />
                  jolla on kirjoittajan sydän ja ajattelijan mieli
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundImage>
    )
  } else {
    return (
      <div className="bg-teal text-gray-100 flex">
        <div className="w-1/2">
          <GatsbyImage
            image={data.nelliImage.childImageSharp.gatsbyImageData}
            alt="Freelancesisällöntuottaja"
          />
        </div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className="text-5xl font-bold">NELLI LEPPÄNEN</div>
          <br />
          <div className="text-xl">
            {(headerText && parse(headerText)) || (
              <div>
                Viestinnän ammattilainen & freelancesisällöntuottaja,
                <br />
                jolla on kirjoittajan sydän ja ajattelijan mieli
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
