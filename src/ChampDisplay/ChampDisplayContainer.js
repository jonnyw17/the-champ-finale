import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import GuideStep1 from './GuideStep1';
import ChampionUnknown from './ChampionUnknown';

import './ChampDisplay.css';
import './Guides.css';
import './Home.css';
import './ChampLogo.css'
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
          <h3 className="activity-name">Area Champion</h3>
        </section>

        <ChampionUnknown/>

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
