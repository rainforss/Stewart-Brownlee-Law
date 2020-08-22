import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "../styles/blog.module.scss"
import Head from "../components/common/head"

import Layout from "../components/layout"

const BlogPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Knowledge Center" />
        <h2>Confidentials cannot be shared, but knowledge can</h2>
        <ul className={blogStyles.test}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                <p>{edge.node.publishedDate}</p>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}

export default BlogPage
