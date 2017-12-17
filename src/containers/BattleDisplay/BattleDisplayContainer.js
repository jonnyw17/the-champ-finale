import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './BattleDisplay.css';

class BattleDisplay extends Component {
  render( ) {
    return (<div className="battle-display-container">

    {/* Navigation */}
    <section className="menu-drop-down">
      <article className="menu-btn-container">
        <article className="logo-btn-wrapper">
          <img className="logo-btn" src="BetGame_Logo_White.png" alt="white champ logo"/>
        </article>
        <article className="drop-down-container">
          <img className="drop-down-btn" src="Menu_Dropdown_Icon.png" alt="Menu Dropdown"/>
        </article>
      </article>
    </section>

    <section className="activity-name-wrapper">
      <h3 className="activity-name">Battle Tracker</h3>
    </section>

      <section className="battle-activity-container">
        <article className="search-container">
          <Link to="/searchprofile">
            <div className="search-opponent">
              <div className="search-icon-wrapper">
                <img src="Search_Fa_Icon.png" alt="navigation icon"/>
              </div>
            </div>
          </Link>
          <h5>Search opponents in your area. Now</h5>
        </article>
      </section>

      <section className="nav-bar">
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn">
              <img className="person-icon" src="Person_Icon_White.png" alt="navigation icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/champdisplay">
            <button className="nav-btn">
              <img className="trophy-icon" src="Trophy_Icon_White.png" alt="trophy icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
          <Link to="/battledisplay">
            <button className="nav-btn">
              <img className="button-highlight" src="Button_Highlight.png" alt="highlight button"/>
              <img className="provoke-icon" src="Provoke_Icon_White.png" alt="provoke icon"/>
            </button>
          </Link>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>);
  }
}

export default BattleDisplay;
