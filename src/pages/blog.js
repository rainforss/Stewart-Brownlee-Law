import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "../styles/blog.module.scss"
import Head from "../components/common/head"
import Grid from "../components/common/grid"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Pagination from "../components/common/pagination"

const BlogPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const prevPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }
  const nextPage = () => {
    if (
      currentPage ===
      Math.ceil(data.allContentfulBlogPost.pageInfo.itemCount / 2)
    )
      return
    setCurrentPage(currentPage + 1)
  }
  const choosePage = e => {
    const page = e.currentTarget.getAttribute("name")
    setCurrentPage(parseInt(page))
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
            body {
              json
            }
          }
        }
        pageInfo {
          itemCount
        }
      }
    }
  `)

  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Knowledge Center" />
        <Grid />
        <div className={blogStyles.blog}>
          <div className={blogStyles.background}>
            <div className={blogStyles.overlay}></div>
          </div>
          <div className={blogStyles.content}>
            <div className={blogStyles.heading}>
              <h2 className={blogStyles.text}>
                Confidentials <span className={blogStyles.black}>cannot</span>{" "}
                be shared, but knowledge{" "}
                <span className={blogStyles.green}>can</span>
              </h2>
            </div>
            <div className={blogStyles.blogWrap}>
              <ul
                className={blogStyles.blogList}
                style={{
                  transform: `translate(0,-${(currentPage - 1) * 100}%)`,
                }}
              >
                {data.allContentfulBlogPost.edges.map(edge => {
                  return (
                    <li key={edge.node.id} className={blogStyles.listItem}>
                      <div>
                        <AniLink
                          paintDrip
                          hex="#418041"
                          to={`/blog/${edge.node.slug}`}
                        >
                          <div className={blogStyles.linkWrap}>
                            <span className={blogStyles.front}>
                              {edge.node.title}
                            </span>
                            <span className={blogStyles.back}>
                              {edge.node.title}
                            </span>
                          </div>
                        </AniLink>
                        <span className={blogStyles.date}>
                          {edge.node.publishedDate}
                        </span>
                        <p>{edge.node.body.json.content[0].content[0].value}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div
                className={blogStyles.seperator}
                style={{
                  transform: `translate(${
                    (100 * currentPage) /
                    Math.ceil(data.allContentfulBlogPost.pageInfo.itemCount / 2)
                  }%,-50%)`,
                }}
              ></div>
            </div>
            <div className={blogStyles.control}>
              <div className={blogStyles.prev} onClick={prevPage}>
                <div>Prev</div>
                <div className={blogStyles.underlineOutter}>
                  <div className={blogStyles.underlineInner}>
                    <div className={blogStyles.front}></div>
                    <div className={blogStyles.back}></div>
                  </div>
                </div>
              </div>
              <div className={blogStyles.pagination}>
                <Pagination
                  totalItems={data.allContentfulBlogPost.pageInfo.itemCount}
                  itemsPerPage={2}
                  currentPage={currentPage}
                  choosePage={choosePage}
                />
              </div>
              <div className={blogStyles.next} onClick={nextPage}>
                <div>Next</div>
                <div className={blogStyles.underlineOutter}>
                  <div className={blogStyles.underlineInner}>
                    <div className={blogStyles.front}></div>
                    <div className={blogStyles.back}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogPage
