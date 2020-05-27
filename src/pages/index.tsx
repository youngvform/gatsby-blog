import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
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
            description
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
    <div>
      {data.allMarkdownRemark.edges.map(({ node }: Edge) => (
        <div key={node.id}>
          <PostLink to={node.fields.route}>
            <Title>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Title>
          </PostLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
