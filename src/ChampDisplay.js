import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './ChampDisplay.css';

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      tweetBox: 'none'
    }
  }

  componentDidMount() {
    axios.get('https://thechamp-be.herokuapp.com/users/').then((res) => {
      this.setState({user: res.data})
    })
  }

  render() {
    return (<div className="main-container">

      <section className="menu-drop-down">
        <article className="logo-wrapper">
          <img src="BetGame_Logo_White.png" alt="the champ icon"/>
          <h3>Champ</h3>
        </article>
      </section>

      <section className="activity-name-wrapper">
        <img className="crown-champion-cover-img" src="Crowned_Champion_Golden.png" alt="the champ crown icon"/>
        <div className="white-gradient"></div>
        <h3>Worms Champion</h3>
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
                  <img className="empty-profile-img" src="Shaun_Img_Sillouhette.png" alt="gamer shaun"/>
                </div>
                <article className="champ-info">
                  <div className="champ-name">
                    <h4>Champ Unknown</h4>
                  </div>
                  <div className="champ-rank">
                    <h6>NO RANK</h6>
                  </div>
                  <article className="champ-trophies"></article>
                  <div className="horizontal-decor-line"></div>
                  <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
                </article>
                <article className="champ-trophies"></article>
              </div>
              <div className="challenge-btn-container"></div>
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
              <img className="person-icon" src="Person_Icon_Grey.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/champdisplay">
            <button className="nav-btn silver-bg-colour">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
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
    </div>);
  }
}

export default ChampDisplay;
