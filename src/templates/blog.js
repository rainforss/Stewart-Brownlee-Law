import React, { useState } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogTemplate from "./blog.module.scss"
import Head from "../components/common/head"

import Layout from "../components/layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "YYYY-MM-DD")
      headImage {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
      <Head title={data.contentfulBlogPost.title} />
      <div className={blogTemplate.pageWrap}>
        <h2>{data.contentfulBlogPost.title}</h2>

        <p>{data.contentfulBlogPost.publishedDate}</p>
        {data.contentfulBlogPost.headImage ? (
          <img
            src={data.contentfulBlogPost.headImage.file.url}
            alt="Headimage"
          />
        ) : (
          <></>
        )}
        {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  )
}

export default Blog
