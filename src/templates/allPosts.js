import { graphql } from "gatsby"
import React from "react"
import {
  Pagination,
  Container,
  FeatureImage,
  Content,
  ContentCard,
  Seo,
} from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numberOfPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage = currentPage - 1 === 1 ? "/" : `${currentPage - 1}`
  const nextPage = `${currentPage + 1}`

  console.log(currentPage)
  console.log(numberOfPages)
  console.log(isFirst)
  console.log(isLast)

  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          The great Gatsby Paper is here
        </H1>
        <P color="dark2" textAlign="center">
          Do no evil! Do no harm!
        </P>

        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.exerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY")
            exerpt
          }
        }
      }
    }
  }
`
