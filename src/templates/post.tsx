import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

interface Props {
  data: any
}

export const query = graphql`
  query($route: String!) {
    markdownRemark(fields: { route: { eq: $route } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

function Post({ data }: Props) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Post
