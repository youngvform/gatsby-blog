// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page three" />
    <h1>33333</h1>
    <p>Welcome to page3({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
