import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown-now';

import ChampionDoug from './ChampionDoug';
import MenuDropDown from './MenuDropDown';
import TwitterDialog from './TwitterDialog';

import './ChampDisplay.css';

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      requestSent: false,
      tutorialsDisplay: true,
      countdownOver: false,
      tweetBtnClick: false
    }
    this.TwitterActivate = this.TwitterActivate.bind(this);
  }

  componentDidMount() {
    axios.get('https://thechamp-be.herokuapp.com/users/').then((res) => {
      this.setState({user: res.data})
    })
  }
  TwitterActivate() {
    this.setState({tweetBtnClick: !this.state.tweetBtnClick});
  }

  render() {
    console.log(this.state.userLoggedIn);
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        hours = `0` + hours;
        minutes = minutes < 10
          ? `0` + minutes
          : minutes;
        seconds = seconds < 10
          ? `0` + seconds
          : seconds;
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };
    const twitterNewPos = this.state.tweetBtnClick
      ? 'twitter-new-position'
      : 'twitter-btn-container';
    const twitterAnimation = this.state.tweetBtnClick
      ? 'twitter-move-animation'
      : '';
    return (
      <div className="champ-display-container">
        <section className="activity-name-wrapper">
          <h3 className="activity-name">Area Champion</h3>
        </section>
        <section className="ghost-section"></section>
        <ChampionDoug/>

        <section className="champ-actions-container">
          {
          !this.state.countdown ?
          <div className="countdown-container">
            <img src="Hourglass_Icon.png" alt="Hour Glass"/>
            <div className="">
              <h6 className="cooldown-title">Challenge Cooldown</h6>
              <div className="countdown-timer">
              <Countdown
                date={Date.now() + 3600000}
                zeroPadLength={1}
                renderer={renderer}
              />
              </div>
            </div>
          </div>
          : <button className="challenge-btn" onClick={this.SendRequest} style={{
                      display: this.state.requestSent
                        ? 'none'
                        : 'flex'
                    }}>
            <img src="Provoke_Icon_White.png" alt="Provoke Icon"/>
            <h6>CHALLENGE</h6>
          </button>
        }
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
            <img src="Twitter_Icon_White.png" alt="White Twitter"/>
          </div>
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
                <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
            <Link to="champdisplay">
              <button className="nav-btn">
                <img className="button-highlight" src="Button_Highlight.png" alt="highlight button used"/>
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
      </div>
    );
  }
}
const FullscreenableDemoComponent = Fullscreenable()(ChampDisplay);

export default FullscreenableDemoComponent;
