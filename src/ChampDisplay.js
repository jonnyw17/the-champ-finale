import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './ChampDisplay.css';

class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/users/').then((res) => {
      this.setState({users: res.data})
      console.log(this.state.users)
    })
  }

  render() {
    return (<div className="main-container">
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
        <div className="white-gradient"></div>
        <h3>Worms Champion</h3>
      </section>
      <section className="activity-container">
        <article className="champ-display">
          <div className="game-img-display">
            <img src="Worms_Circle_Background.png" alt="worms"/>
            <div className="user-location">
              <img src="Targeting_Icon.png" alt="navigation icon"/>
              <div className="location-separator"></div>
              <article className="location-address">
                <div className="location-zone">16 Tib Street</div>
                <div className="location-city">Manchester</div>
              </article>
            </div>
            <div className="champ-details">
              <div className="champ-status">
                <img src="Trophy_Icon_Golden_Yellow.png" alt="trophy icon"/> {
                  this.state.users.map((users, index) => {
                    if (users.currentchamp === true) {
                      return (<h3 key={index}>{users.fullname}</h3>)
                    }
                    return (<h3 key={index}>Champion Unknown</h3>)
                  })
                }
              </div>
              <div className="horizontal-decor-line"></div>
              <img src="Champion_Name_Decoration.png" alt="champion decoration"/>
            </div>
          </div>
        </article>
      </section>
      <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <Link to="/searchprofile">
            <button className="nav-btn">
              <img className="search-icon" src="Search_Fa_Icon.png" alt="navigation icon"/>
            </button>
          </Link>
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
