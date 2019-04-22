//import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Section, Title, Button } from "bloomer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container hasTextAlign="centered">
        <Title>NOT FOUND</Title>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Button isColor='info' href="/">
          Go back to the homepage
        </Button>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
