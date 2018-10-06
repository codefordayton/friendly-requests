import React from 'react'
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
      <Menu.Item href="/">Home</Menu.Item>
      <Menu.Item href="/faq">FAQ</Menu.Item>
    </Container>
  </Menu>
)

export default NavMenu
