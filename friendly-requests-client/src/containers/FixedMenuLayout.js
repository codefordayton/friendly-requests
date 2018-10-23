import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

      </div>
    </Router>
  </div>
)

export default FixedMenuLayout
