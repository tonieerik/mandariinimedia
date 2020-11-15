import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Mobile = () => (
  <div className="footer border-t border-white bg-teal text-gray-100 p-2 md:p-4 flex justify-evenly">
    <a href="tel:0407439782" className="text-3xl">
      <FontAwesomeIcon icon={faPhone} className="icon align-middle" />
    </a>
    <a href="mailto:nelli@mandariinimedia.fi" className="text-3xl">
      <FontAwesomeIcon icon={faEnvelope} className="align-middle" />
    </a>
    <a
      href="https://www.linkedin.com/in/leppanen-nelli"
      target="_blank"
      rel="noreferrer"
      className="text-3xl"
    >
      <FontAwesomeIcon icon={faLinkedin} className="align-middle" />
    </a>
    <a
      href="https://www.instagram.com/mandariinimedia"
      target="_blank"
      rel="noreferrer"
      className="text-3xl"
    >
      <FontAwesomeIcon icon={faInstagram} className="align-middle" />
    </a>
  </div>
)

const Desktop = () => (
  <div className="footer border-t border-white bg-teal text-gray-100 flex p-4">
    <ul className="m-0">
      <li className="m-0">
        <a href="tel:0407439782" className="mt-1 text-3xl ml-4">
          <FontAwesomeIcon icon={faPhone} className="icon align-middle" />
          <span className="text-lg mt-2 ml-2 mr-4">040 7439 782</span>
        </a>
      </li>
      <li className="m-0">
        <a
          href="mailto:nelli@mandariinimedia.fi"
          className="mt-1 text-3xl ml-2"
        >
          <FontAwesomeIcon icon={faEnvelope} className="align-middle ml-2" />
          <span className="text-lg mt-2 ml-2 mr-4">
            nelli@mandariinimedia.fi
          </span>
        </a>
      </li>
      <li className="m-0">
        <a
          href="https://www.linkedin.com/in/leppanen-nelli"
          target="_blank"
          rel="noreferrer"
          className="mt-1 text-3xl ml-2"
        >
          <FontAwesomeIcon icon={faLinkedin} className="align-middle ml-2" />
          <span className="footerItemDetail-3 text-lg mt-2 ml-2 mr-4">
            leppanen-nelli
          </span>
        </a>
      </li>
      <li className="m-0">
        <a
          href="https://www.instagram.com/mandariinimedia"
          target="_blank"
          rel="noreferrer"
          className="mt-1 text-3xl ml-2"
        >
          <FontAwesomeIcon icon={faInstagram} className="align-middle ml-2" />
          <span className="text-lg mb-2 ml-2 mr-4">mandariinimedia</span>
        </a>
      </li>
    </ul>
  </div>
)

const Footer = () => {
  const breakpoints = useBreakpoint()

  return <>{breakpoints.md ? <Mobile /> : <Desktop />}</>
}

export default Footer
