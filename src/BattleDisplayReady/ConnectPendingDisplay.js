import React, { Component } from 'react';


import './BattleDisplayReady.css';

class CircularPendingDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="connect-glyph-container">
        <article className="connecting-wheel">
          <img src="Provoke_Pending_White.png" alt="loading circle"/>
            <div className="loading-info">
              <h5>Connecting</h5>
              <h5>players</h5>
            </div>
        </article>
      </div>
    )
  }
}

export default CircularPendingDisplay;
