import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';
import axios from 'axios';

import ChampionUnknown from './ChampionUnknown';
// import MenuDropDown from './MenuDropDown';
// import GuideStep1 from './GuideStep1';

import './ChampDisplay.css';
import './ChampLogo.css';

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutorialsDisplay: true,
      tweetBox: 'none',
      user: []
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
      <div className="champ-display-container">
        {/* Navigation Top*/}
        <section className="activity-name-wrapper">
          <h3 className="activity-name">Area Champion</h3>
        </section>
        <section className="ghost-section"></section>
        <ChampionUnknown />

        <section className="actions-container">
          <button className="challenge-btn" style={{
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
              <button className="search-profile-btn nav-btn">
                <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
            <Link to="champdisplay">
              <button className="champ-display-btn nav-btn nav-highlight">
                <img className="button-highlight" src="Button_Highlight.png" alt="highlight button"/>
                <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
              </button>
            </Link>
            <div className="ghost-separator"></div>
            <Link to="/battledisplay">
              <button className="provoke-btn nav-btn">
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
