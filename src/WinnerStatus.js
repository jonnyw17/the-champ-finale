import React, {Component} from 'react';

import './BattleDisplayReady.css';

class WinnerStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="connect-glyph-container">
        <div className="wheel-overlay"></div>
        <article className="winner-circle">
          <img src="Winner_Circle.png" alt="Press on Winner circle"/>
            <div className="loading-info">
              <h5>Tap On</h5>
              <h5>Winner</h5>
            </div>
        </article>
      </div>
    )
  }
}

export default WinnerStatus;
