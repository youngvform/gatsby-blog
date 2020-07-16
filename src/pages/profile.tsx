// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import skt from "../images/skt.png"
import payfan from "../images/payfan.jpeg"
import sMobile from "../images/sMobile.jpeg"
import uplus from "../images/uplus.png"
import kepco from "../images/kepco.png"

interface Post {
  img: string
  name: string
  date: string
  detail: string
  stack: string
}

interface Props {
  post: Post
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
`

const Content = styled.article``
const Project = styled.div`
  display: flex;
  & + & {
    margin-top: 15px;
  }
`

const ProjectImage = styled.img`
  width: 340px;
  height: 460px;
  margin-right: 10px;
`

const ProjectHead = styled.section``

const ProjectName = styled.b``

const ProjectDate = styled.div`
  color: gray;
  margin-top: 5px;
  margin-bottom: 20px;
`

const Description = styled.span`
  margin: 0 auto;
`

const Detail = styled.span``
const Stack = styled.div`
  margin: 20px 0;
`

const posts = [
  {
    img: skt,
    name: "SKT 시나리오 프로젝트",
    date: "2020.04 ~ 2020.07",
    detail: `SKT 시나리오 프로젝트에서는 React 컴포넌트 개발을 맡아서 진행했습니다.<br>
        1차로 기존에 구축되어 있는 SKT 톡 상담의 기기 정보 표시, 기프트 정보
          표시 등의 커스터마이징을 React로 마이그레이션 했습니다.<br> 
          그 후에 구매정보, 요금제 정보, 자동완성, 우편번호 등 상담 중에 표시될 컴포넌트를 개발했습니다.`,
    stack: "React, Typescript, mobx 등",
  },
  {
    img: payfan,
    name: "신한카드 챗봇 2.0 업그레이드 프로젝트",
    date: "2019.09 ~ 2020.01",
    detail: `신한카드 챗봇 프로젝트에서는 신한카드 페이판 앱에 챗봇 2.0 버전 프론트와 백엔드를 개발했습니다.<br>
            UI 변경은 물론이고, 
            자동완성 설정, suggestion 버튼 추가, 만족도 평가 등의 기능을 추가하여 프론트를 개발했고 신한카드 페이판앱에 배포 되었습니다.
            개발하면서 필요한 신한카드 챗봇서버와의 서버 연동도 했습니다`,
    stack: "JQuery, JQuery Template, Spring 등",
  },
  {
    img: sMobile,
    name: "신한카드 예약톡 업그레이드 프로젝트",
    date: "2019.06 ~ 2019.09",
    detail: `신한카드 예약톡 프로젝트에서는 신한카드 모바일웹과 페이판앱의 챗봇 상담 프론트와 백엔드 개발을 했습니다.<br>
            기존에 구축된 신한카드 톡 상담과 챗봇 상담을 업그레이드 하면서 기존의 커스터마이징을 마이그레이션 했습니다. <br>
            UI 변경과 예약톡 기능 추가, 이탈 감지 기능 추가 등의 개발을 진행했고 신한카드 모바일웹과 신한카드 페이판 앱에 배포 되었습니다. `,
    stack: "JQuery, JQuery Template, Spring 등",
  },
  {
    img: uplus,
    name: "LG U+ 톡상담 프로젝트",
    date: "2018.08 ~ 2018.12",
    detail: `유플러스 프로젝트에서는 유플러스 홈페이지의 채팅 상담 프론트와 백엔드를 개발했습니다.<br>
            UI 퍼블리싱 적용, 고객 전송 후 응답 시간 표시, 상담사 프로필 설정 추가, 고객정보 유효성 체크 등 유플러스의 요구사항을 개발했습니다.<br>
           LG U+ 홈페이지에 고객센터로 배포 되었습니다. `,
    stack: "Spring, JQuery, JQuery Template 등",
  },
  {
    img: kepco,
    name: "한국전력공사 스마트 고객센터 프로젝트",
    date: "2017.07 ~ 2018.02",
    detail: `한국전력공사 스마트 고객센터 프로젝트에서는 한국전력공사 채팅 상담의 프론트와 백엔드를 개발했습니다.<br>
            UI 퍼블리싱 적용, 로그인 연동, 전자정부 프레임워크 연동, 고객정보 기능 추가 등 한국전력공사의 요구사항을 개발했습니다.<br>
            한국전력공사 홈페이지에 스마트고객센터로 배포 되었습니다.`,
    stack: "Spring, JQuery, JQuery Template 등",
  },
]

const ProfilePost = ({ post }: Props) => {
  const { img, name, date, detail, stack } = post
  return (
    <Project>
      <ProjectImage src={img} alt="skt" />
      <Description>
        <ProjectHead>
          <ProjectName>{name}</ProjectName>
          <ProjectDate>{date}</ProjectDate>
        </ProjectHead>
        <Detail dangerouslySetInnerHTML={{ __html: detail }} />
        <Stack>기술 스택 : {stack}</Stack>
      </Description>
    </Project>
  )
}

const ProfilePage = (props: PageProps) => (
  <Layout>
    <SEO title="My Profile" />
    <h1>My Profile</h1>
    <Container>
      <Header>
        <h3>Frontend Engineer @Spectra</h3>
        <p>2016.12 ~ </p>
      </Header>
      <hr />
      <Content>
        {posts.map(post => (
          <ProfilePost key={post.name} post={post} />
        ))}
      </Content>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default ProfilePage
