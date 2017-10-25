import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import HomePage from './HomePage';
import FaqPage from './FaqPage';

const FixedMenuLayout = () => (
  <div>
    <Router>
      <div>
        <NavMenu />

        <Route exact path="/" component={HomePage}/>
        <Route path="/faq" component={FaqPage}/>

        <Footer />
      </div>
    </Router>
  </div>
)

export default FixedMenuLayout
