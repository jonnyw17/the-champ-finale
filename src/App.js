import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import BattleDisplay from './containers/BattleDisplay/BattleDisplayContainer';
import BattleDisplayReady from './containers/BattleDisplayReady/BattleDisplayReadyContainer';
import ChampDisplay from './containers/ChampDisplay/ChampDisplayContainer';
import ChampDisplayDoug from './containers/ChampDisplayDoug/ChampDisplayDougContainer';
import ChampDisplayShaun from './containers/ChampDisplayShaun/ChampDisplayShaunContainer';
import Home from './containers/Home/HomeContainer';
import Platform from './containers/Platform/PlatformContainer';
import ProfilePage from './containers/ProfilePage/ProfilePageContainer';
import SearchProfile from './containers/SearchProfile/SearchProfileContainer';
import SignUp from './containers/SignUp/SignUpContainer';
import SignIn from './containers/SignIn/SignInContainer';

import './FullScreenOverlay.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserSignedUp: [],
      currentUserSignedIn: []
    }
    this.getCurrentUserSignIn = this.getCurrentUserSignIn.bind(this);
    this.getCurrentUserSignUp = this.getCurrentUserSignUp.bind(this);
  }

  getCurrentUserSignIn(currentUser) {
    this.setState({currentUserSignedIn: currentUser});
  }

  getCurrentUserSignUp(currentUser) {
    this.setState({currentUserSignedUp: currentUser});
  }

  render() {
    // isFullscreen props from the module - react-fullscreenable
    let fullScreenOption = this.props.isFullscreen
      ? 'none'
      : 'flex';
    return (
      <div>
        <div className="fullscreen-overlay-container" style={{display : fullScreenOption}}>
            <button className="cancel-btn" onClick={()=>{this.setState({fullscreenOptionHidden:true})}}>
              <img src="Cancel_Glyph.png" alt="cancel glyph"/>
            </button>
            <section className="fullscreen-overlay-wrapper">
              <article className="fullscreen-overlay">
              <div>
                <h5>Recommend Fullscreen Mode.</h5>
              </div>
                <button className="fullscreen-logo-wrapper" onClick={this.props.toggleFullscreen}>
                  <div className="fullscreen-logo">
                    <img src="Full_Screen_Symbol.png" alt="Fullscreen" />
                    <div>
                      <h6>Fullscreen Mode</h6>
                    </div>
                  </div>
                </button>
              </article>
            </section>
        </div>
        <Router>
          <div>
            {/*Route Starts Here*/}
            <Route exact={true} path="/" component={Home}/>
            {/*Secondary Routes*/}
            <Route path="/battledisplay" component={BattleDisplay}/>
            <Route path="/champdisplay" render={() =>< ChampDisplay activeUser = {
                this.state.userLoggedIn
              } />}/>
            <Route path="/platform" component={Platform}/>
            <Route path="/profilepage" render={() =>< ProfilePage activeUser = {
                this.state.userLoggedIn
              } />}/>
            <Route path="/searchprofile" render={() =>< SearchProfile activeUser = {
                this.state.userLoggedIn
              } />}/>
            <Route path="/signup" render={() =>< SignUp getCurrentUserSignUp = {
                this.getCurrentUserSignUp
              } />}/>
            <Route path="/signin" render={() =>< SignIn getCurrentUserSignIn = {
                this.getCurrentUserSignIn
              } />}/>
            {/*Demo Routes (Throwaway Secondary Routes)*/}
            <Route path="/battledisplayready" component={BattleDisplayReady}/>
            <Route path="/champdisplaydoug" component={ChampDisplayDoug}/>
            <Route path="/champdisplayshaun" component={ChampDisplayShaun}/>
          </div>
        </Router>
      </div>
    );
  }
}

const FullscreenableDemoComponent = Fullscreenable()(App);

export default FullscreenableDemoComponent;
