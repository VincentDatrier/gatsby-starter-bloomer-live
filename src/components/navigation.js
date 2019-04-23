import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Navbar, NavbarBrand, NavbarEnd, NavbarMenu, NavbarBurger } from "bloomer"

function Navigation({ siteTitle }) {
  // using React hooks to create the togglable mobile menu
  const [menuActive, setMenuActive] = useState(false)
  return (
    <Navbar className="is-primary">
      <NavbarBrand>
        <Link to="/" className="navbar-item">
            {siteTitle}
        </Link>
        <NavbarBurger isActive={menuActive} onClick={menuActive? () => setMenuActive(false) : () => setMenuActive(true)} />
      </NavbarBrand>
      <NavbarMenu isActive={menuActive} onClick={menuActive? () => setMenuActive(false) : () => setMenuActive(true)}>
        <NavbarEnd>
          <Link to="/" className="navbar-item" activeClassName="is-active">
              Home
          </Link>
          <Link to="/page-2" className="navbar-item" activeClassName="is-active">
            Page 2
          </Link>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
