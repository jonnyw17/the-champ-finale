import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChampLogo from './ChampLogo';

import './BattleDisplay.css';


class BattleDisplay extends Component {
  render( ) {
    return (<div className="main-container">
    <ChampLogo />
    <section className="menu-drop-down"></section>

    <section className="activity-name-wrapper">
      <h3 className="activity-name">Battle Tracker</h3>
    </section>

      <section className="activity-container">
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

// <Link to="/searchprofile">
//   <button className="search-opponent">
//     <div className="white-gradient"></div>
//     <img src="Search_Fa_Icon.png" alt="navigation icon"/>
//     <h5>Search opponents in your area. Now</h5>
//   </button>
// </Link>
