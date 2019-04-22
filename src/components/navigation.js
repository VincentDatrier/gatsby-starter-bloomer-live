import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavbarBrand, NavbarEnd } from "bloomer"

const Navigation = ({ siteTitle }) => (
  <Navbar className="is-primary">
    <NavbarBrand>
        <Link to="/" className="navbar-item">
            {siteTitle}
        </Link>
    </NavbarBrand>
    <NavbarEnd>
      <Link to="/" className="navbar-item" activeClassName="is-active">
         Home
      </Link>
      <Link to="/page-2" className="navbar-item" activeClassName="is-active">
        Page 2
      </Link>
    </NavbarEnd>
  </Navbar>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
