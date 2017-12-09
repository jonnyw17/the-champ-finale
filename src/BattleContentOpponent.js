import React, {Component}from 'react';

import './BattleDisplayReady.css';

class BattleContentOpponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="user-container uk-animation-slide-right">
        <div className="user-img-container">
          <img src="Shaun_Face_Circular.png" alt="opponents profile"/>
        </div>
        <article className="user-info-container">
          <div className="user-info-wrapper">
            <h6 className="username">Widow Maker</h6>
            <h6 className="actual-name">Shaun Gibson</h6>
            <h6 className="actual-lvl">Level {5}</h6>
          </div>
        </article>
      </div>
    )
  }
}

export default BattleContentOpponent;
