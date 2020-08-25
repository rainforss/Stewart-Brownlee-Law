import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogTemplate from "./blog.module.scss"
import Head from "../components/common/head"
import background from "../assets/jpgs/contact.jpg"

import Layout from "../components/layout"
import RouterLink from "../components/common/routerLink"

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
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: 4
      filter: { slug: { ne: $slug } }
    ) {
      edges {
        node {
          id
          slug
          title
          publishedDate(formatString: "YYYY-MM-DD")
          body {
            json
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showRecent, setShowRecent] = useState(false)
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
        <div
          className={blogTemplate.background}
          style={
            data.contentfulBlogPost.headImage
              ? {
                  backgroundImage: `url(${data.contentfulBlogPost.headImage.file.url})`,
                }
              : {
                  backgroundImage: `url(${background})`,
                }
          }
        >
          <div className={blogTemplate.overlay}></div>
        </div>
        <div
          className={
            blogTemplate.content +
            " " +
            (menuOpen ? blogTemplate.out : blogTemplate.in)
          }
        >
          <div className={blogTemplate.blogInfo}>
            <h2 className={blogTemplate.title}>
              {data.contentfulBlogPost.title}
            </h2>

            <p className={blogTemplate.date}>
              {data.contentfulBlogPost.publishedDate}
            </p>
          </div>
          <div className={blogTemplate.blogBody}>
            <div
              className={
                blogTemplate.body +
                " " +
                (showRecent ? blogTemplate.inactive : blogTemplate.active)
              }
            >
              <div className={blogTemplate.text}>
                {documentToReactComponents(
                  data.contentfulBlogPost.body.json,
                  options
                )}
              </div>
            </div>
            <div
              className={
                blogTemplate.recent +
                " " +
                (showRecent ? blogTemplate.active : blogTemplate.inactive)
              }
            >
              {data.allContentfulBlogPost.edges.map(edge => {
                return (
                  <div key={edge.node.id} className={blogTemplate.postFace}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <div className={blogTemplate.linkWrap}>
                        <div className={blogTemplate.front}>
                          <span>{edge.node.title}</span>
                        </div>
                        <div className={blogTemplate.back}>
                          <span>{edge.node.title}</span>
                        </div>
                      </div>
                    </Link>
                    <div className={blogTemplate.date}>
                      {edge.node.publishedDate}
                    </div>
                    <p className={blogTemplate.face}>
                      {edge.node.body.json.content[0].content[0].value}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={blogTemplate.control}>
            <div
              className={blogTemplate.showRecent}
              onClick={() => setShowRecent(!showRecent)}
            >
              <div
                className={
                  showRecent ? blogTemplate.inactive : blogTemplate.active
                }
              >
                <span>Recent posts</span>
              </div>
              <div
                className={
                  showRecent ? blogTemplate.active : blogTemplate.inactive
                }
              >
                <span>Current post</span>
              </div>
              <div className={blogTemplate.underlineOutter}>
                <div className={blogTemplate.underlineInner}>
                  <div className={blogTemplate.front}></div>
                  <div className={blogTemplate.back}></div>
                </div>
              </div>
            </div>
            <div className={blogTemplate.toContact}>
              <RouterLink linkText="Ask questions" linkUrl="/contact" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
