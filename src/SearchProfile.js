import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchProfile.css';
// import axios from 'axios';

class SearchProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  render() {
    return (<div className="main-container">
      <section className="menu-drop-down">
        <div className="ghost-div"></div>
        <article className="logo-wrapper">
          <img src="BetGame_Logo_White.png" alt="logo icon"/>
          <h3>Champ</h3>
        </article>
        <img src="Menu_Dropdown_Icon.png" alt="navigation icon"/>
      </section>
      <section className="search-wrapper">
        <article className="search-container">
          <article className="search-bar uk-animation-slide-right">
            <img src="Search_Fa_Icon_Brown.png" alt="navigation icon"/>
            <h4>Search Opponents</h4>
            <div className="ghost-div-search"></div>
          </article>
          <Link to="">
            <article className="user-searched-details uk-animation-slide-bottom">
              <div className="online-circle"></div>
              <h6>Shaun Gibson</h6>
              <div className="ghost-circle"></div>
            </article>
          </Link>
        </article>
      </section>
      <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn">
              <img className="search-icon" src="Search_Fa_Icon.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
          </button>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="provoke-icon" src="Provoke_Icon_Grey.png" alt="provoke icon"/>
          </button>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>)
  }
}

export default SearchProfile;
