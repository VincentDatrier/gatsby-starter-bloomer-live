import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Title, Section, Columns, Column } from "bloomer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `bulma`, `bloomer`]} />
    <Section>
    <Container hasTextAlign="centered">
      <Columns isVCentered isCentered>
        <Column isSize="1/2" style={{ maxWidth: "300px" }}>
          <Image />
        </Column>
        <Column isSize="1/2">
            <Title>Hi people</Title>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2">Go to page 2</Link>
          </Column>
      </Columns>
      </Container>
    </Section>
   </Layout>
)

export default IndexPage
