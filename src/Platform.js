import React from 'react';
import {Link} from 'react-router-dom';
import './Platform.css';

const Platform = () => {
    return (<div className="main-container">
      <section className="nav-bar">
      <article className="logo-wrapper">
        <img src="BetGame_Logo_White.png" alt="the champ logo"/>
        <h3>Champ</h3>
      </article>
      </section>
      <section className="platform-btn-container">
        <article className="btn-wrapper">
        <h5>Pick gaming platform.</h5>

        <Link className="champ-display-link" to="/champdisplay">
          <button>
            <img className="worms-icon" src="Worms_Icon.png" alt="worms logo"/>
            <h5 className="platform-name-top btn-title-margin">Worms W.M.D.</h5>
            <div className="ghost-div"></div>
          </button>
        </Link>
        <article className="champ-display-link">
          <button className="disabled-btn">
          <img className="league-legends-icon" src="League_Legends_Icon.png" alt="league of legends logo"/>
            <div>
              <h5 className="platform-name-top">League of Legends</h5>
              <span className="coming-soon">Coming Soon</span>
            </div>
            <div className="ghost-div"></div>
          </button>
        </article>
        <article className="champ-display-link">
          <button className="disabled-btn">
          <img className="starcraft-icon" src="StarCraft_2.png" alt="starcraft 2 logo"/>
            <div>
              <h5 className="platform-name-top">StarCraft 2</h5>
              <span className="coming-soon">Coming Soon</span>
            </div>
            <div className="ghost-div"></div>
          </button>
        </article>
        <article className="champ-display-link">
          <button className="disabled-btn">
          <img className="dota-icon" src="Dota_2_Icon.png" alt="dota 2 logo"/>
            <div>
              <h5 className="platform-name-top">Dota 2</h5>
              <span className="coming-soon">Coming Soon</span>
            </div>
            <div className="ghost-div"></div>
          </button>
        </article>
        </article>
        </section>
    </div>)
}

export default Platform;
