import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SignUp from './SignUp/SignUpContainer';
import Platform from './Platform/PlatformContainer';
import SignIn from './SignIn/SignInContainer';
import ChampDisplay from './ChampDisplay/ChampDisplayContainer';
import BattleDisplay from './BattleDisplay/BattleDisplayContainer';
import BattleDisplayReady from './BattleDisplayReady/BattleDisplayReadyContainer';
import Home from './Home/HomeContainer';
import SearchProfile from './SearchProfile/SearchProfileContainer';
import ProfilePage from './ProfilePage/ProfilePageContainer';
import ChampDisplayDoug from './ChampDisplayDoug/ChampDisplayDougContainer';
import ChampDisplayShaun from './ChampDisplayShaun/ChampDisplayShaunContainer';

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
