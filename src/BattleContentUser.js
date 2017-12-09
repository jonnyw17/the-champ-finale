import React, {Component} from 'react';

import './BattleDisplayReady.css';

class BattleContentUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="opponent-container uk-animation-slide-right">
        <div className="opponent-img-container">
          <img src="Doug_Face_Circular.png" alt="player profile"/>
        </div>
        <article className="opponent-info-container">
          <div className="opponent-info-wrapper">
            <h6 className="opponent-username">Occam&#39;s Blade</h6>
            <h6 className="opponent-name">Doug Ward</h6>
            <h6 className="opponent-lvl">Level {5}</h6>
          </div>
        </article>
      </div>
    )
  }
}

export default BattleContentUser;
