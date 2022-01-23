import React from 'react';
import EnvironmentInfoHandler from '../EnvironmentCanvas/EnvironmentInfoHandler';
import '../LandingPage/HeaderStyles.css';
import BreadCrumbsNavigator from '../BreadCrumbs/BreadCrumbsNavigator';
const Header = () => {
  return (
    <div class="fixed-header">
      <div className="container">
        <div id="navbar">
          <div className="navbar-brand">
            <img id="header_logo_left"></img> Pebble{' '}
            <img id="header_logo_right"></img>
          </div>
          <BreadCrumbsNavigator />
        </div>
      </div>
    </div>
  );
};

export default Header;
