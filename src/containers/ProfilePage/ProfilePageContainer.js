import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';

import './TwitterDialog';

import ChallengeRequest from './ChallengeRequest';
// import GuideStep3 from './GuideStep3';
// import GuideStep4 from './GuideStep4';
import TwitterDialog from './TwitterDialog';
import TwitterBtn from './TwitterBtn';

import './ProfilePage.css';
import './TwitterDialog.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestSent: false,
      requestIcon: 'none',
      tweetBtnClick: false,
      userLoggedIn: this.props.activeUser,
      usersTwitter: []
    }
    this.displayMenu = this.displayMenu.bind(this);
    this.sendingRequest = this.sendingRequest.bind(this);
    this.twitterActivate = this.twitterActivate.bind(this);
  }
  displayMenu() {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  }
  // <TwitterBtn activeUser={this.state.userLoggedIn} />
  sendingRequest() {
    console.log(true)
    this.setState({requestSent: true});
    setTimeout(() => {
      console.log(true)
      this.setState({requestIcon: 'block'});
    }, 3000);
  }
  twitterActivate() {
    this.setState({tweetBtnClick: !this.state.tweetBtnClick});
  }
  render() {
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
      : dontShow;
    const twitterNewPos = this.state.tweetBtnClick
      ? 'twitter-new-position'
      : 'twitter-btn-container';
    const twitterAnimation = this.state.tweetBtnClick
      ? 'twitter-move-animation'
      : '';
    return (<div className="profile-container">
      {/* Challenge Accepted Banner */}
      {/* There still needs to be a timeout period for it appear and disappear */}
      <section className="challenge-accepted-banner uk-animation-slide-top" style={display}>
        <div className="message-banner">
          <div className="img-container">
            <img src="Trophy_Icon_White.png" alt="trophy icon"/>
          </div>
          <div className="challenge-msg">
            <h5>Challenge Accepted</h5>
            <h6 className="gamer-name">by Shaun Gibson</h6>
          </div>
        </div>
      </section>
      <section className="activity-name-wrapper">
        <h3 className="activity-name">Rival&#39;s Profile</h3>
      </section>
      <section className="ghost-section"></section>
      <section className="profile-info">
        <article className="white-ring-border"></article>
        <article className="game-overlay-display"></article>
        <article className="gamer-info-container">
        <article className="upper-circle-container">
          <div className="gamer-name">
            <h3>Widow Maker</h3>
            <h6>Shaun Gibson</h6>
          </div>
        </article>
        <article className="middle-circle-container">
          <div className="img-container">
            <img className="highlight-img" src="Blue_Player_Highlight.png" alt="blue_highlight_ring"/>
            <img className="gamer-img" src="Shaun_Face_Circular.png" alt="gamer"/>
          </div>
          <div className="victory-recent-container">
            <img src="Crowned_Champion.png" alt="crown champion symbol"/>
            <div className="victory-recent-description">
              <h6 className="victory-title">Recent</h6>
              <h6 className="victory-title">Victory</h6>
              <h6 className="victory-address">29 Tib Street</h6>
              <h6 className="champion-title">CHAMPION</h6>
              <div className="trophy-icon-container">
                <img className="recent-trophy-icon" src="Trophy_Icon_Golden_Yellow.png" alt="Golden Trophy Icon"/>
              </div>
            </div>
          </div>
        </article>
        <article className="lower-circle-container">
          <div>
            <div className="gamer-level">Level {5}</div>
            <div className="line-decor"></div>
            <div className="gamer-level"><span className="experience-title">EXP</span><span className="experience-value">{1050}<span className="experience-divider">/</span>{1500}</span></div>
          </div>
        </article>
        </article>
      </section>
      <section className="actions-container">
        {/*TwitterDialog*/}
        {
          this.state.tweetBtnClick
            ? <TwitterDialog />
            : ""
        }
        {/*Twitter Button*/}
        <TwitterBtn
          twitterActivate={this.twitterActivate}
          tweetBtnClick={this.state.tweetBtnClick}
        />
        <ChallengeRequest
          requestSent={this.state.requestSent}
          sendingRequest={this.sendingRequest}
        />
      </section>
      {/* Navigation Bar */}
      <section className="nav-bar">
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="search-profile-btn nav-btn">
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="champdisplay">
            <button className="champ-display-btn nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/battledisplayready">
            <button className="battle-display-ready-btn nav-btn">
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
      {/* Notification Circle */}
      <section className="challenge-notification uk-animation-scale-up" style={display}>
          <div className="notification-amount">
            <h6>1</h6>
          </div>
      </section>
    </div>);
  }
}

const FullscreenableDemoComponent = Fullscreenable()(ProfilePage);

export default FullscreenableDemoComponent;
