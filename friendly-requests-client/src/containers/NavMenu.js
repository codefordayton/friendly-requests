import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react'

const NavMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image
          size='mini'
          src='/logo.png'
          style={{ marginRight: '1.5em' }}
        />
        Friendly Requests
      </Menu.Item>
      <Menu.Item as='a'><Link to="/">Home</Link></Menu.Item>
      <Menu.Item as='a'><Link to="/faq">FAQ</Link></Menu.Item>
    </Container>
  </Menu>
)

export default NavMenu
