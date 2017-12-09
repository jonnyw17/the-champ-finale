import React, {Component}from 'react';

import './ChampDisplay.css';

class ChampionShaun extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>
      <section className="profile-info">
      <article className="champdisplay"></article>
      <article className="white-ring-border"></article>
      <article className="game-overlay-display"></article>
      <article className="gamer-info-container">
        <article className="upper-circle-container">
        <article className="progress-circle">
          <img src="Progress_Circle.png" alt="person"/>
        </article>
        <div className="gamer-name">
          <h3>Widow Maker</h3>
          <h6>Shaun Gibson</h6>
        </div>
        </article>

        <article className="middle-circle-container">
          <div className="img-container">
            <img className="gamer-img" src="Shaun_Face_Circular.png" alt="gamer"/>
            <img className="highlight-img" src="Blue_Player_Highlight.png" alt="blue_highlight_ring"/>
          </div>
          <div className="victory-recent-container">
            <img src="Crowned_Champion.png" alt="crown champion symbol"/>
            <div className="victory-recent-description">
              <h6 className="victory-title">Number</h6>
              <h6 className="victory-title">of Wins</h6>
              <h6 className="victory-address">{1}</h6>
              <h6 className="champion-title"></h6>
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
      </div>
    )
  }
}

export default ChampionShaun;
