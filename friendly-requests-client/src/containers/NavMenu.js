import React from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'

const NavMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Icon name='archive' size='large' />
        Friendly Requests
      </Menu.Item>
      <Menu.Item href="/">Home</Menu.Item>
      <Menu.Item href="/faq">FAQ</Menu.Item>
    </Container>
  </Menu>
)

export default NavMenu
