import React, {Component}from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link} from 'react-router-dom';

import './MenuDropDown.css';

class MenuDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuDisplayed: false
    }
    this.displayMenu = this.displayMenu.bind(this);
  }
  displayMenu() {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  }
  render(){
    const menu = this.props.isFullscreen && this.state.menuDisplayed
      ? 'block'
      : 'none';
      console.log('this.props.isFullscreen ' + this.props.isFullscreen);
    return (
      <div className="menu-drop-down">
        <article className="menu-btn-container">
          <article className="logo-btn-wrapper">
            <img className="logo-btn" src="BetGame_Logo_White.png" alt="white champ logo"/>
          </article>
          <article className="drop-down-container">
            <button onClick={this.displayMenu}>
              <img className="drop-down-btn" src="Menu_Dropdown_Icon.png" alt="Menu Dropdown"/>
            </button>
          </article>
          <article className="menu-container" style={{display: menu}}>
            <div className="menu-container-glasseffect">
              <button className="menu-option" onClick={
                ()=>{
                  if(this.props.isFullscreen){
                    this.setState({menuDisplayed : false});
                  }
                  return this.props.toggleFullscreen()}
                }>
                <div className="icon-box">
                  <img className="screen-icon" src="Screen_Icon.png" alt="Normalscreen Icon"/>
                </div>
                <div className="description-icon">
                  <h6>Normal Screen Mode</h6>
                </div>
              </button>
              <Link to="/">
                <div className="menu-option">
                  <div className="icon-box">
                    <img className="logout-icon" src="Logout_Icon.png" alt="Log Out Icon"/>
                  </div>
                  <div className="description-icon">
                    <h6>Log out</h6>
                  </div>
                </div>
              </Link>
            </div>
          </article>
        </article>
      </div>)
  }
}

export default MenuDropDown;
