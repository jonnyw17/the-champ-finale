import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SignUp from './containers/SignUp/SignUpContainer';
import Platform from './containers/Platform/PlatformContainer';
import SignIn from './containers/SignIn/SignInContainer';
import ChampDisplay from './containers/ChampDisplay/ChampDisplayContainer';
import BattleDisplay from './containers/BattleDisplay/BattleDisplayContainer';
import BattleDisplayReady from './containers/BattleDisplayReady/BattleDisplayReadyContainer';
import Home from './containers/Home/HomeContainer';
import SearchProfile from './containers/SearchProfile/SearchProfileContainer';
import ProfilePage from './containers/ProfilePage/ProfilePageContainer';
import ChampDisplayDoug from './containers/ChampDisplayDoug/ChampDisplayDougContainer';
import ChampDisplayShaun from './containers/ChampDisplayShaun/ChampDisplayShaunContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserSignedUp: [],
      currentUserSignedIn: []
    }
    this.getCurrentUserSignUp = this.getCurrentUserSignUp.bind(this);
    this.getCurrentUserSignIn = this.getCurrentUserSignIn.bind(this);
  }

  getCurrentUserSignUp(currentUser) {
    this.setState({currentUserSignedUp: currentUser})
  }

  getCurrentUserSignIn(currentUser) {
    this.setState({currentUserSignedIn: currentUser})
  }

  render() {

    // (function toggleFullScreen() {
    //   var doc = window.document;
    //   var docEl = doc.documentElement;
    //
    //   var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    //   var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    //
    //   if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    //     requestFullScreen.call(docEl);
    //   }
    //   else {
    //     cancelFullScreen.call(doc);
    //   }
    // })()

    return (<div>
      <Router>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/signup" render={() =>< SignUp getCurrentUserSignUp = {
              this.getCurrentUserSignUp
            } />}/>
          <Route path="/signin" render={() =>< SignIn getCurrentUserSignIn = {
              this.getCurrentUserSignIn
            } />}/>
          <Route path="/profilepage" render={() =>< ProfilePage activeUser = {
              this.state.userLoggedIn
            } />}/>
          <Route path="/platform" component={Platform}/>
          <Route path="/champdisplay" render={() =>< ChampDisplay activeUser = {
              this.state.userLoggedIn
            } />}/>
          <Route path="/searchprofile" render={() =>< SearchProfile activeUser = {
              this.state.userLoggedIn
            } />}/>
          <Route path="/battledisplay" component={BattleDisplay}/>
          <Route path="/battledisplayready" component={BattleDisplayReady}/>
          <Route path="/champdisplaydoug" component={ChampDisplayDoug}/>
          <Route path="/champdisplayshaun" component={ChampDisplayShaun}/>
        </div>
      </Router>
    </div>);
  }
}

export default App;
