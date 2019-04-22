import PropTypes from "prop-types"
import React from "react"
import { Footer, Container, Content, Columns, Column } from "bloomer"

const WebFooter = ({ siteTitle }) => (
    <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isSize="full">
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://bulma.io">Bulma</a> and <a href="https://bloomer.js.org">Bloomer</a>
            </p>
          </Column>
        </Columns>
      </Content>
    </Container>
    </Footer>
)

WebFooter.propTypes = {
  siteTitle: PropTypes.string,
}

WebFooter.defaultProps = {
  siteTitle: ``,
}

export default WebFooter
