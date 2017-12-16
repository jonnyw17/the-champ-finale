import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';

// reminder to factorise if required
// import FullScreenOverlay from './FullScreenOverlay';

import './Home.css';
import './Normalise.css'
import './FullScreenOverlay.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullscreenOptionHidden:false,
      isFull: false
    }
    this.toggleFullscreenOption = this.toggleFullscreenOption.bind(this);
  }

  toggleFullscreenOption = () => {
    this.setState({ fullscreenOptionHidden:true })
  }
  render(){
    // isFullscreen props from the module - react-fullscreenable
    let displayFullscreenOption = this.state.fullscreenOptionHidden || this.props.isFullscreen
      ? 'none'
      : 'flex';
    return (
      <div className="main-container">
          <section className="logo-container">
            <article className="logo-wrapper">
              <img src="BetGame_Logo_White.png" alt="the champ logo"/>
              <h1>Champ</h1>
            </article>
          </section>
          <section className="brand-description-container">
            <article className="brand-description">
              <p>Welcome to Champ</p>
              <p>A Location based scoreboard. Become the</p>
              <p>Gaming Champion of your house or area</p>
            </article>
          </section>
          <section className="bottom-container">
            <article className="btn-wrapper">
              <Link to="/signup">
                <button className="sign-up-btn">
                  <h5>Sign up</h5>
                </button>
              </Link>
              <Link to="/signin">
                <button className="sign-in-btn">
                  <h5>Log in</h5>
                </button>
              </Link>
            </article>
          </section>
          <div className="fullscreen-overlay-container" style={{display : displayFullscreenOption}}>
              <button className="cancel-btn" onClick={()=>{this.setState({fullscreenOptionHidden:true})}}>
                <img src="Cancel_Glyph.png" alt="cancel glyph"/>
              </button>
              <section className="fullscreen-overlay-wrapper">
                <article className="fullscreen-overlay">
                <div>
                  <h5>Recommend Fullscreen Mode.</h5>
                </div>
                  <button className="fullscreen-logo-wrapper"
                    onClick={this.props.toggleFullscreen}
                  >
                    <div className="fullscreen-logo">
                      <img src="Full_Screen_Symbol.png" alt="Fullscreen" />
                      <div>
                        <h6>Fullscreen Mode</h6>
                      </div>
                    </div>
                  </button>
                </article>
              </section>
          </div>
      </div>
    )
  }
}

const FullscreenableDemoComponent = Fullscreenable()(Home);

export default FullscreenableDemoComponent;
