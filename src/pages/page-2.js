import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Title, Section } from "bloomer"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Section>
      <Container hasTextAlign="centered">
        <Title>Hi from the second page</Title>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Section>
  </Layout>
)

export default SecondPage
