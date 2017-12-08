import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import GuideStep1 from './GuideStep1.js';

import './ChampDisplay.css';
import './Guides.css'

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      tweetBox: 'none',
      tutorialsDisplay: true
    }
    this.removeTutorialDisplay = this.removeTutorialDisplay.bind(this);
  }

  componentDidMount() {
    axios.get('https://thechamp-be.herokuapp.com/users/').then((res) => {
      this.setState({user: res.data})
    })
  }
  removeTutorialDisplay() {
    this.setState({tutorialsDisplay:false});
  }
  render() {
    console.log(this.state.user)
    return (
      <div className="main-container">

        <section className="menu-drop-down"></section>
        <section className="activity-name-wrapper">
          <h3 className="activity-name">Location Champion</h3>
        </section>

        <section className="profile-info">
          <article className="champdisplay"></article>
          <article className="white-ring-border"></article>
          <article className="game-overlay-display"></article>
          <article className="gamer-info-container">
          <article className="upper-circle-container">
            <article className="progress-circle">
            </article>
            <div className="gamer-name">
              <h3>No Current Champ</h3>
            </div>
          </article>
          <article className="middle-circle-container">
            <div className="img-container">
              <div className="empty-profile-pic">
                <img className="question-mark" src="Question_Mark.png" alt="unknown player"/>
                <img className="highlight-img" src="Blue_Player_Highlight.png" alt="blue_highlight_ring"/>
              </div>
            </div>
            <div className="victory-recent-container">
              <img src="Crowned_Champion.png" alt="crown champion symbol"/>
              <div className="victory-recent-description">
                <h6 className="victory-title">Recent</h6>
                <h6 className="victory-title">Victory</h6>
                <h6 className="victory-address">N/A</h6>
                <h6 className="champion-title">CHAMPION</h6>
                <div className="trophy-icon-container">
                  <img className="recent-trophy-icon" src="Trophy_Icon_Golden_Yellow.png" alt="Golden Trophy Icon"/>
                </div>
              </div>
            </div>
          </article>
          <article className="lower-circle-container">
            <div>
              <div className="gamer-level">Location</div>
              <div className="line-decor"></div>
              <div className="gamer-level">29 Tib Street</div>
            </div>
          </article>
          </article>
        </section>
        <section className="actions-container">
          <button className="challenge-btn" onClick={this.SendRequest} style={{
                      display: 'none'
                    }}>
            <img src="Provoke_Icon_White.png" alt="Provoke Icon"/>
            <h6>CHALLENGE</h6>
          </button>
          <button className="challenge-sent pos-abs" style={{
                      display: this.state.requestSent
                        ? 'flex'
                        : 'none'
                    }}>
            <h6>CHALLENGE SENT !</h6>
          </button>
        </section>
        {/* Navigation Bar */}
        <section className="nav-bar">
          <article className="nav-btn-container">
            <div className="ghost-separator"></div>
            <Link to="/searchprofile">
              <button className="nav-btn">
                <img className="search-icon" src="Search_Fa_Icon_White.png" alt="navigation icon"/>
                <img className="button-highlight" src="Button_Highlight.png" alt="highlight button used"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
            <Link to="champdisplay">
              <button className="nav-btn">
                <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
            <Link to="/battledisplay">
              <button className="nav-btn">
                <img className="provoke-icon" src="Provoke_Icon_White.png" alt="provoke icon"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
          </article>
        </section>
        {/* Display Step 1 Tip */}
        {
          this.state.requestSent
            /*? <GuideStep4/> : <GuideStep3/>*/
        }
        {/* Navigation */}
        <section className="nav-display">
          <article className="logo-wrapper">
            <img className="white-logo" src="BetGame_Logo_White.png" alt="white champ logo"/>
            <h3 className="white-logo-name">Champ</h3>
          </article>
        </section>
      </div>
    );
  }
}

export default ChampDisplay;

// {/*Display Step 1 Tip*/}
// {<GuideStep1/>}
