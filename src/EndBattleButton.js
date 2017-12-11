import React, {Component} from 'react';

import './BattleDisplayReady.css';

class BattleDisplayReady extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>
      <button className="challenge-btn uk-animation-slide-bottom">
        <img src="Battle_End_Icon.png" alt="Provoke Symbol"/>
        <div>
          <h6 className="btn-description">END BATTLE</h6>
        </div>
      </button>
      </div>
    )
  }
}

export default BattleDisplayReady;
