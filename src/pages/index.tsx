import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: any
}
interface Edge {
  node: any
}

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          excerpt
          fields {
            route
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: black;
`

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <main>
      {data.allMarkdownRemark.edges.map(({ node }: Edge) => (
        <section key={node.id}>
          <PostLink to={node.fields.route}>
            <Title>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Title>
          </PostLink>
          <p>{node.excerpt}</p>
        </section>
      ))}
    </main>
  </Layout>
)

export default IndexPage
