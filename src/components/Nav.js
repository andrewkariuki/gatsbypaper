import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { NavWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} width={50} alt="Gatsby Paper Logo" />
      </Link>
    </NavWrapper>
  )
}
