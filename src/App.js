import React, {Component} from 'react';
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
    this.setState({currentUserSignedIn: currentUser})
  }

  getCurrentUserSignUp(currentUser) {
    this.setState({currentUserSignedUp: currentUser})
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

    return (
      <div>
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

export default App;
