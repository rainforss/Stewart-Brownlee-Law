import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta property="og:title" content="Stewart Brownlee Law" />
      <meta
        property="og:image"
        content="https://dreamy-hawking-5cf65d.netlify.app/home.png"
      />
      <meta
        property="og:description"
        content="Alberta law office based in North Edmonton focusing on litigations"
      />
      <meta
        property="og:url"
        content="https://dreamy-hawking-5cf65d.netlify.app/"
      />
    </Helmet>
  )
}
export default Head
