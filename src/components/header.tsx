import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props {
  siteTitle?: string
}

const Container = styled.article`
  display: flex;
  align-items: baseline;
  margin: 0 auto;
  max-width: 960px;
  //padding: 1.45rem 1.0875rem;
`

const SiteTitle = styled.h1`
  flex: 1;
  margin: 0;
`

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle = `` }: Props) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <SiteTitle>
        <WhiteLink to="/">{siteTitle}</WhiteLink>
      </SiteTitle>
      <h3>
        <WhiteLink to="/profile">profile</WhiteLink>
      </h3>
    </Container>
  </header>
)

export default Header
