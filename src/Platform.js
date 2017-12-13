import React from 'react';
import {Link} from 'react-router-dom';
import './Platform.css';

const Platform = () => {
  return (<div>
    <div className="main-container uk-animation-slide-right">
      <section className="ghost-section"></section>
      <section className="platform-btn-container">
        <article className="btn-wrapper">
          <h6>Track your gaming progress. Discover the champions in your city.</h6>

          <Link className="champ-display-link" to="/champdisplay">
            <button>
              <img className="worms-icon" src="Worms_Icon.png" alt="worms logo"/>
              <h5 className="platform-name-top btn-title-margin">Worms W.M.D.</h5>
              <div className="ghost-div"></div>
            </button>
          </Link>
        </article>
      </section>
    </div>
    <section className="nav-display">
      <article className="logo-wrapper-home">
        <div className="logo-underlay">
          <img className="white-logo" src="BetGame_Logo_White.png" alt="white champ logo"/>
          <h3 className="white-logo-name">Champ</h3>
        </div>
      </article>
    </section>
  </div>)
}

export default Platform;

// <article className="champ-display-link">
//   <button className="disabled-btn">
//     <img className="disabled-btn league-legends-icon" src="League_Legends_Icon.png" alt="league of legends logo"/>
//     <div>
//       <h5 className="platform-name-top">League of Legends</h5>
//       <span className="coming-soon">Coming Soon</span>
//     </div>
//     <div className="ghost-div"></div>
//   </button>
// </article>
// <article className="champ-display-link">
//   <button className="disabled-btn">
//     <img className="starcraft-icon" src="StarCraft_2.png" alt="starcraft 2 logo"/>
//     <div>
//       <h5 className="platform-name-top">StarCraft 2</h5>
//       <span className="coming-soon">Coming Soon</span>
//     </div>
//     <div className="ghost-div"></div>
//   </button>
// </article>
// <article className="champ-display-link">
//   <button className="disabled-btn">
//     <img className="dota-icon" src="Dota_2_Icon.png" alt="dota 2 logo"/>
//     <div>
//       <h5 className="platform-name-top">Dota 2</h5>
//       <span className="coming-soon">Coming Soon</span>
//     </div>
//     <div className="ghost-div"></div>
//   </button>
// </article>
