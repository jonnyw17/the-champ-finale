import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './ChampDisplay.css';
class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
    this.fetchUserData = this.fetchUserData.bind(this);
    this.provokeChamp = this.provokeChamp.bind(this);
  }

//------------------------------------------------------------------------
  //FETCH ALL USER DATA FROM MONGODB
  fetchUserData() {
    return axios.get(`http://localhost:3001/allusers`).then(result => {
      console.log(result.data)
      this.setState({user: result.data})
    }).catch(console.log)
  }
  //MOUNT ALL USER DATA FROM MONGODB BEFORE RENDER
  componentDidMount() {
    this.fetchUserData();
  }
//------------------------------------------------------------------------


  provokeChamp() {

  }
  render() {
    console.log(this.props)
    return (<div class="main-container">
      <section className="menu-drop-down">
      <div className="ghost-div"></div>
      <article className="logo-wrapper">
        <img src="BetGame_Logo_White.png"/>
        <h3>Champ</h3>
      </article>
      <img src="Menu_Dropdown_Icon.png"/>
      </section>
      <section className="activity-name-wrapper">
        <img src="Crowned_Champion_Golden.png"/>
        <div class="white-gradient"></div>
        <h3>Worms Champion</h3>
      </section>
      
      <section className="nav-bar">
        <div className="horizontal-line"></div>
        <article className="nav-btn-container">
          <div className="ghost-separator"></div>
          <button className="nav-btn">
            <img className="search-icon" src="Search_Fa_Icon.png"/>
          </button>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="trophy-icon" src="Trophy_Icon_Grey.png"/>
          </button>
          <div className="separator"></div>
          <button className="nav-btn">
            <img className="provoke-icon" src="Provoke_Icon_Grey.png"/>
          </button>
          <div className="ghost-separator"></div>
        </article>
      </section>
    </div>);
  }
}

export default ChampDisplay;
// <button onSubmit={this.provokeChamp} type="button">Provoke</button>
