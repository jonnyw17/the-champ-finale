import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      usersTwitter: []
    }
    this.TweetChamp = this.TweetChamp.bind(this)
  }

  TweetChamp(event) {
    axios.get()
  }

  render() {
    return (<div className="main-container">

      <section className="menu-drop-down">
      <div className="ghost-div"></div>
      <article className="logo-wrapper">
        <img src="BetGame_Logo_White.png" alt="the champ icon"/>
        <h3>Champ</h3>
      </article>
      <img src="Menu_Dropdown_Icon.png" alt="navigation icon"/>
      </section>

      <section className="activity-name-wrapper">
        <div className="white-gradient"></div>
        <h3>Profile</h3>
      </section>

      <section className="activity-container">
        <article className="champ-display">
          <div className="game-img-display">
            <img src="Worms_Circle_Background.png" alt="worms"/>
            <div className="user-location">
            <img src="Targeting_Icon.png" alt="navigation icon"/>
              <div className="location-separator"></div>
              <article className="location-address">
                <div className="location-zone">16 Tib Street</div>
                <div className="location-city">Manchester</div>
              </article>
            </div>
            <div className="champ-details">
              <div className="champ-status">
              <div className="img-container">
                <img src="Shaun_Face_Circular.png"></img>
              </div>
                <article className="champ-info">
                  <div className="champ-name"><h4>Shaun Gibson</h4></div>
                  <div className="champ-rank"><h6>SILVER</h6></div>
                </article>
                <article className="champ-trophies"></article>
              </div>
              <div className="horizontal-decor-line"></div>
              <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
              <div className="challenge-btn-container">
              <button>
                <img src="Provoke_Icon_Brown.png"/>
                <h4>Challenge</h4>
              </button>
              </div>
            </div>
          </div>
        </article>
        <article className="social-media-btn-container">
          <div className="twitter-btn">
          <div className="blue-twitter-background">
          </div>
          <img src="Twitter_Icon_White.png"/>
          <div className="add-btn-container">
            <img className="" src="Add_Glyph.png"/>
          </div>
          </div>
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
    </div>);
  }
}

export default ProfilePage;
// <button onSubmit={this.provokeChamp} type="button">Provoke</button>
