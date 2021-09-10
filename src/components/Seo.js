import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export const Seo = ({ description, keywords, title, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const defaultTitle = data.site.siteMetadata.title
        const metaKeywords = keywords || ["gatsby blog", "gatsby init"]
        const lang = `en`

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title ? title : defaultTitle}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author || ``,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`
