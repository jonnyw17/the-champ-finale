import React, {Component} from 'react';

import './ChampDisplay.css';

class ChampDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      usersTwitter: []
    }
    // this.provokeChamp = this.provokeChamp.bind(this);
    // this.TweetChamp = this.TweetChamp.bind(this)
  }

  // TweetChamp(event) {
  //
  // }

  render() {
    return (<div class="main-container">
      <section className="menu-drop-down">
      <div className="ghost-div"></div>
      <article className="logo-wrapper">
        <img src="BetGame_Logo_White.png" alt="the champ icon"/>
        <h3>Champ</h3>
      </article>
      <img src="Menu_Dropdown_Icon.png" alt="navigation icon"/>
      </section>
      <section className="activity-name-wrapper">
        <img src="Crowned_Champion_Golden.png" alt="the champ crown icon"/>
        <div class="white-gradient"></div>
        <h3>Worms Champion</h3>
      </section>
      <section className="activity-container">
        <article class="champ-display">
          <div class="game-img-display">
            <img src="Worms_Circle_Background.png" alt="worms"/>
            <div class="user-location">
            <img src="Targeting_Icon.png" alt="navigation icon"/>
              <div class="location-separator"></div>
              <article class="location-address">
                <div class="location-zone">16 Tib Street</div>
                <div class="location-city">Manchester</div>
              </article>
            </div>
            <div class="champ-details">
              <div class="champ-status">
                <img src="Trophy_Icon_Golden_Yellow.png" alt="trophy icon"/>
                <h3>Champ Unknown</h3>
              </div>
              <div class="horizontal-decor-line"></div>
              <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
            </div>
          </div>
        </article>
      {
        this.state.user.map((user, index) => {
          if (user.currentchamp === true) {
            return (<div key={index}>
              <p>{user.username}</p>
            </div>)
          } else {
            return (<div key={index}>
              <p>Champ Unknown</p>
            </div>)
          }
        })
      }
      </section>
      <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <button className="nav-btn">
            <img className="search-icon" src="Search_Fa_Icon.png" alt="navigation icon"/>
          </button>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
          </button>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="provoke-icon" src="Provoke_Icon_Grey.png" alt="provoke icon"/>
          </button>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>);
  }
}

export default ChampDisplay;
// <button onSubmit={this.provokeChamp} type="button">Provoke</button>
