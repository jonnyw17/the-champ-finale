import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown-now';

import GuideStep1 from './GuideStep1';
import ChampionUnknown from './ChampionUnknown';
import ChampionDoug from './ChampionDoug';
import ChampionShaun from './ChampionShaun';
import TwitterBtn from './TwitterBtn';

import './ChampDisplay.css';
import './Guides.css'

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      tweetBox: 'none',
      requestSent: false,
      tutorialsDisplay: true,
      countdownOver: false,
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
    console.log(this.state.userLoggedIn);
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        hours = `0` + hours;
        minutes < 10
          ? minutes = `0` + minutes
          : minutes;
        seconds < 10
          ? seconds = `0` + seconds
          : seconds;
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };

    return (
      <div className="main-container">

        <section className="menu-drop-down"></section>
        <section className="activity-name-wrapper">
          <h3 className="activity-name">Area Champion</h3>
        </section>

        <ChampionDoug/>

        <section className="champ-actions-container">
        {
          !this.state.countdown ?
          <div className="countdown-container">
            <img src="Hourglass_Icon.png"/>
            <h6 className="cooldown-title">Challenge Cooldown</h6>
            <div className="countdown-timer">
            <Countdown
              date={Date.now() + 3600000}
              zeroPadLength={1}
              renderer={renderer}
            />
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
