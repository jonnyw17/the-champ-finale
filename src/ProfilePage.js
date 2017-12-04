import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChallengeRequestSent from './ChallengeRequestSent';
import GuideStep3 from './GuideStep3';
import GuideStep4 from './GuideStep4';

import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersTwitter: [],
      requestSent: false,
      requestIcon: 'none'
    }
    this.SendRequest = this.SendRequest.bind(this);
  }

  SendRequest() {
    console.log(true)
    this.setState({requestSent: true});
    setTimeout(() => {
      console.log(true)
      this.setState({requestIcon: 'block'});
    }, 3000);
  }

  render() {

    const toggleButton = () => {
      if (this.state.requestSent) {
        return <ChallengeRequestSent/>;
      }
    }
    // 1) Triggers when to display the notification

    const dontShow = {
      display: this.state.requestIcon
    };

    const doShow = {
      display: this.state.requestIcon
    }

    // There must be someway to set Time on the Display variable
    const display = this.state.requestSent
      ? doShow
      : dontShow

    return (<div className="main-container">

      {/* Challenge Accepted Banner */}
      {/* There still needs to be a timeout period for it appear and disappear */}
      <article className="challenge-accepted-banner uk-animation-slide-top" style={display}>
        <div className="message-banner">
          <img src="Trophy_Icon_White.png" alt="trophy icon"/>
          <h5 className="challenge-msg">Challenge Accepted</h5>
          <h6 className="gamer-name">Shaun Gibson</h6>
        </div>
      </article>

      <section className="menu-drop-down"></section>
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
                  <img className="gamer-img" src="Shaun_Face_Circular.png" alt="gamer"/>
                </div>
                <article className="champ-info">
                  <div className="champ-name">
                    <h4>Shaun Gibson</h4>
                  </div>
                  <div className="champ-rank">
                    <h6>SILVER</h6>
                  </div>
                  <article className="champ-trophies"></article>
                  <div className="horizontal-decor-line"></div>
                  <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
                </article>
              </div>

              <div className="challenge-btn-container uk-animation-shake">

                {/* 1) Button Clicked */}
                <button className="challenge-btn" onClick={this.SendRequest} style={{
                    display: this.state.requestSent
                      ? 'none'
                      : 'flex'
                  }}>
                  <img src="Provoke_Icon_Brown.png" alt="challenge icon"/>
                  <h4>Challenge</h4>
                </button>
                    {toggleButton()}
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Navigation Bar */}
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
          <Link to="champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="separator"></div>
          <Link to="/battledisplayready">
            <button className="nav-btn">
              <img className="provoke-icon" src="Provoke_Icon_Grey.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
      {/* Display Step 1 Tip */}
      {
        this.state.requestSent
          ? <GuideStep4/>
          : <GuideStep3/>
      }


      {/* Notification Circle */}
      <section className="challenge-notification uk-animation-scale-up" style={display}>
        <div className="notification-amount">
          <h6>1</h6>
        </div>
      </section>
      {/* Navigation */}
      <section className="nav-display">
        <article className="logo-wrapper">
          <img className="white-logo" src="BetGame_Logo_White.png" alt="white champ logo"/>
          <h3 className="white-logo-name">Champ</h3>
        </article>
      </section>
    </div>);
  }
}

export default ProfilePage;
