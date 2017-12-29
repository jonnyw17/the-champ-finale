import React, {Component}from 'react';
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
    const menu = this.state.menuDisplayed
      ? 'flex'
      : 'none';
    return (
      <div className="menu-drop-down">
        <article className="menu-btn-container">
          <article className="logo-btn-wrapper">
            <img className="logo-btn" src="BetGame_Logo_White.png" alt="white champ logo"/>
          </article>
          <article className="drop-down-container">
            <button className="menu-drop-down-btn" onClick={this.displayMenu}>
              <img className="drop-down-btn" src="Menu_Dropdown_Icon.png" alt="Menu Dropdown"/>
            </button>
          </article>
          <article className="menu-container" style={{display: menu}}>
            <div className="menu-container-glasseffect">
              <button className="full-screen-option-btn menu-option" onClick={
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
                  <h6 className="normal-screen">Normal Screen Mode</h6>
                </div>
              </button>
              <Link to="/">
                <div className="log-out-btn menu-option">
                  <div className="icon-box">
                    <img className="logout-icon" src="Logout_Icon.png" alt="Log Out Icon"/>
                  </div>
                  <div className="description-icon">
                    <h6 className="log-out">Log out</h6>
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
