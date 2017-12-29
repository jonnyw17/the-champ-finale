//***********************************************
// Please check Documentation in Activity,
// whenever fullscreen mode needs to be applied
// again
// File Location: ./the-champ-finale/misc/Activity_Log/ActivityLog_15.12.2017.txt
// File Name: ActivityLog_15.12.2017.txt
// Timestamp: 23:56
//***********************************************

import React, {Component} from 'react';
import Fullscreenable from 'react-fullscreenable';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';


import BattleDisplay from './containers/BattleDisplay/BattleDisplayContainer';
import BattleDisplayReady from './containers/BattleDisplayReady/BattleDisplayReadyContainer';
import ChampDisplay from './containers/ChampDisplay/ChampDisplayContainer';
import ChampDisplayDoug from './containers/ChampDisplayDoug/ChampDisplayDougContainer';
import ChampDisplayShaun from './containers/ChampDisplayShaun/ChampDisplayShaunContainer';
// import FullScreenOverlay from './containers/Home/FullScreenOverlay';
import Home from './containers/Home/HomeContainer';
import MenuDropDown from './MenuDropDown';
import Platform from './containers/Platform/PlatformContainer';
import ProfilePage from './containers/ProfilePage/ProfilePageContainer';
import SearchProfile from './containers/SearchProfile/SearchProfileContainer';
import SignUp from './containers/SignUp/SignUpContainer';
import SignIn from './containers/SignIn/SignInContainer';

import './app.css';
// import './FullScreenOverlay.css';

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
    console.log(this.props);
    return (
      <div>

        <Router>
        <div>
          <Switch>
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
            </Switch>
              {/*<FullScreenOverlay
                isFullscreen={this.props.isFullscreen}
                onFullscreenChange={this.props.onFullscreenChange}
                toggleFullscreen={this.props.toggleFullscreen}
              />*/}
              <MenuDropDown
                isFullscreen={this.props.isFullscreen}
                toggleFullscreen={this.props.toggleFullscreen}
              />
          </div>
        </Router>
      </div>
    );
  }
}

const FullscreenableDemoComponent = Fullscreenable()(App);

export default FullscreenableDemoComponent;
