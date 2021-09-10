import { graphql } from "gatsby"
import * as React from "react"
import { Container, Content, FeatureImage } from "../components"
import { H1, P } from "../elements"

const NotFoundPage = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          404: Not Found
        </H1>
        <P textAlign="center">
          You just hit a route that doesn&#39;t exist... the sadness.
        </P>
      </Content>
    </Container>
  )
}

export default NotFoundPage

export const pagQuery = graphql`
  query {
    imageSharp(fixed: { originalName: { eq: "nature.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
