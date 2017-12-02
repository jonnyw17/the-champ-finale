import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './BattleDisplay.css'
class BattleDisplay extends Component {
  render() {
    return (
      <div className="main-container">

        <section className="menu-drop-down">
        <article className="logo-wrapper">
          <img src="BetGame_Logo_White.png" alt="the champ icon"/>
          <h3>Champ</h3>
        </article>
        </section>

        <section className="activity-name-wrapper">
          <img className="battle-cover-img" src="Battle_Symbol.png" alt="battling icon"/>

          <h3>Challenge Mode</h3>
        </section>

        <section className="activity-container">
          <article className="battle-display">
            <div className="battle-img-display">
              <img src="Worms_Circle_Background.png" alt="worms"/>

              <button className="search-opponent">
              <div className="white-gradient"></div>
               <img src="Search_Fa_Icon.png"/>
               <h5>Search opponents in your area. Now</h5>
              </button>

            </div>
          </article>
        </section>
        <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
          <button className="nav-btn">
            <img className="person-icon" src="Person_Icon_Grey.png" alt="navigation icon"/>
          </button>
          </Link>
          <div className="separator"></div>
          <Link to="/champdisplay">
          <button className="nav-btn">
            <img className="trophy-icon" src="Trophy_Icon_Grey.png" alt="trophy icon"/>
          </button>
          </Link>
          <div className="separator"></div>
          <Link to="/battledisplay">
          <button className="nav-btn silver-bg-colour">
            <img className="provoke-icon" src="Provoke_Icon_White.png" alt="provoke icon"/>
          </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
      </div>
          );
  }
}

export default BattleDisplay;
