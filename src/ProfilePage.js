import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChampLogo from './ChampLogo';
import GuideStep3 from './GuideStep3';
import GuideStep4 from './GuideStep4';

import './TwitterDialog';

import ChallengeRequestSent from './ChallengeRequestSent';
// import GuideStep3 from './GuideStep3';
// import GuideStep4 from './GuideStep4';
import TwitterDialog from './TwitterDialog';

import './ProfilePage.css';
import './TwitterDialog.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersTwitter: [],
      requestSent: false,
      requestIcon: 'none',
      userLoggedIn: this.props.activeUser,
      tweetBtnClick: false
    }
    this.SendRequest = this.SendRequest.bind(this);
    this.TwitterActivate = this.TwitterActivate.bind(this);
  }

  SendRequest() {
    console.log(true)
    this.setState({requestSent: true});
    setTimeout(() => {
      console.log(true)
      this.setState({requestIcon: 'block'});
    }, 3000);
  }
  TwitterActivate() {
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
    return (<div className="main-container">
      <ChampLogo />
      {/* Challenge Accepted Banner */}
      {/* There still needs to be a timeout period for it appear and disappear */}
      <article className="challenge-accepted-banner uk-animation-slide-top" style={display}>
        <div className="message-banner">
          <div className="img-container">
            <img src="Trophy_Icon_White.png" alt="trophy icon"/>
          </div>
          <div className="challenge-msg">
            <h5>Challenge Accepted</h5>
            <h6 className="gamer-name">by Shaun Gibson</h6>
          </div>
        </div>
      </article>

      <section className="menu-drop-down"></section>
      <section className="activity-name-wrapper">
        <h3 className="activity-name">Rival&#39;s Profile</h3>
      </section>
      <section className="profile-info">
        <article className="white-ring-border"></article>
        <article className="game-overlay-display"></article>
        <article className="gamer-info-container">
        <article className="upper-circle-container">
          <div className="gamer-name">
            <h3>Occam&#39;s Razor</h3>
            <h6>Doug Ward</h6>
          </div>
        </article>
        <article className="middle-circle-container">
          <div className="img-container">
            <img className="gamer-img" src="Doug_Face_Circular.png" alt="gamer"/>
            <img className="highlight-img" src="Blue_Player_Highlight.png" alt="blue_highlight_ring"/>
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
      <button className={twitterNewPos + ' ' + twitterAnimation} onClick={this.TwitterActivate} style={{
                  display: this.state.requestSent
                    ? 'none'
                    : 'flex'
                }}>
        <div className="twitter-btn">
          <img src="Twitter_Icon_White.png" alt="Twitter"/>
        </div>
      </button>
        <button className="challenge-btn" onClick={this.SendRequest} style={{
                    display: this.state.requestSent
                      ? 'none'
                      : 'flex'
                  }}>
          <img src="Provoke_Icon_White.png" alt="provoke icon"/>
          <h6>CHALLENGE</h6>
        </button>
        <button className="challenge-sent" style={{
                    display: this.state.requestSent
                      ? 'flex'
                      : 'none'
                  }}>
          <h6 className="uk-animation-slide-top">CHALLENGE SENT !</h6>
        </button>
      </section>


      {/* Navigation Bar */}
      <section className="nav-bar">
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn">
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/battledisplayready">
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
          ? <GuideStep4/> : <GuideStep3/>
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

export default ProfilePage;

// PLEASE DO NOT DELETE
//
// <article className="champ-display">
//   <div className="game-img-display">
//     <div className="champ-details">
//       <div className="champ-status">
//         <div className="img-container">
//           <img className="gamer-img" src="Shaun_Face_Circular.png" alt="gamer"/>
//         </div>
//         <article className="champ-info">
//           <div className="champ-name">
//             <h4>Shaun Gibson</h4>
//           </div>
//           <div className="champ-rank">
//             <h6>SILVER</h6>
//           </div>
//           <article className="champ-trophies"></article>
//           <div className="horizontal-decor-line"></div>
//           <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
//         </article>
//       </div>
//
//       <div className="challenge-btn-container uk-animation-shake">
//
//         {/* 1) Button Clicked */}
//         <button className="challenge-btn" onClick={this.SendRequest} style={{
//             display: this.state.requestSent
//               ? 'none'
//               : 'flex'
//           }}>
//           <img src="Provoke_Icon_Brown.png" alt="challenge icon"/>
//           <h4>Challenge</h4>
//         </button>
//
//         {/* 2) Toggles to this button */}
//
//
//       </div>
//
//     </div>
//   </div>
// </article>
