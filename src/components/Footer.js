import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  FooterSocialIcons,
  FooterSocialWrapper,
  FooterWrapper,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        publicURL
      }

      twitter: file(relativePath: { eq: "twitter.png" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Contact via Facebook" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="Contact via Twitter" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="Contact via Linked In" />
          </a>
        </FooterSocialIcons>
        <p>&copy; 2021 - Company. All Rights Reserver.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
