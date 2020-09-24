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
      <meta
        name="description"
        content="Alberta law office based in north Edmonton focusing on litigations"
      />
      <meta name="title" property="og:title" content="Stewart Brownlee Law" />
      <meta property="og:type" content="Website" />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/rainforss/image/upload/v1600929593/stewartbrownleelaw_xdspsh.png"
      />
      <meta
        name="description"
        property="og:description"
        content="Alberta law office based in North Edmonton focusing on litigations"
      />
      <meta name="author" content="Jake Chen" />
      <meta
        property="og:url"
        content="https://dreamy-hawking-5cf65d.netlify.app/"
      />
    </Helmet>
  )
}
export default Head
