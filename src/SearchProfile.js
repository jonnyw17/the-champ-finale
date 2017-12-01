import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchProfile.css';

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
        <article className="logo-wrapper">
          <img src="BetGame_Logo_White.png" alt="logo icon"/>
          <h3>Champ</h3>
        </article>
      </section>
      <section className="status-wrapper">
        <article className="status-container">
          <article className="status-bar">
            <div className="online-tab">
              <h4>online</h4>
            </div>
            <div className="status-separator"></div>
            <div className="offline-tab">
              <h4>offline</h4>
            </div>
          </article>
          <Link to="/profilepage">
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
            <button className="nav-btn silver-bg-colour">
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/battledisplay">
            <button className="nav-btn">
              <img className="provoke-icon" src="Provoke_Icon_Grey.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>)
  }
}

export default SearchProfile;
