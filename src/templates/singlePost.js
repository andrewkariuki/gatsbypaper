import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Container, FeatureImage, Post } from "../components"
import { H1 } from "../elements"

const singlePost = ({ data }) => {
  const featuredImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featuredImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

export const PageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        slug
        title
        exerpt
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
