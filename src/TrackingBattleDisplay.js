import React, { Component } from 'react';


import './BattleDisplayReady.css';

class TrackingBattleDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="connect-glyph-container">
        <div className="wheel-overlay"></div>
        <article className="battling-wheel">
          <img src="Battling_Circle.png" alt="Battling circle"/>
            <div className="loading-info">
              <h5>Battling ...</h5>
            </div>
        </article>
      </div>
    )
  }
}

export default TrackingBattleDisplay;
