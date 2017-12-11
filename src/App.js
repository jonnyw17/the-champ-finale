import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SignUp from './SignUp';
import Platform from './Platform';
import SignIn from './SignIn';
import ChampDisplay from './ChampDisplay';
import BattleDisplay from './BattleDisplay';
import BattleDisplayReady from './BattleDisplayReady';
import Home from './Home';
import SearchProfile from './SearchProfile';
import ProfilePage from './ProfilePage';
import TwitterDialog from './TwitterDialog';
import ChampDisplayDoug from './ChampDisplayDoug';
import ChampDisplayShaun from './ChampDisplayShaun';

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

    return (<div>
      <Router>
        <div>
          <Route path="/twitterbutton" component={TwitterDialog} />
          <Route exact={true} path="/" component={Home}/>
          <Route path="/signup" render={() =>< SignUp getCurrentUserSignUp = {
              this.getCurrentUserSignUp
            } />}/>
          <Route path="/signin" render={() =>< SignIn getCurrentUserSignIn = {
              this.getCurrentUserSignUp
            } />}/>
          <Route path="/profilepage" render={() =>< ProfilePage activeUser = {
              this.getCurrentUserSignUp
            } />}/>
          <Route path="/platform" component={Platform}/>
          <Route path="/champdisplay" render={() =>< ChampDisplay activeUser = {
              this.getCurrentUserSignUp
            } />}/>
          <Route path="/searchprofile" render={() =>< SearchProfile activeUser = {
              this.getCurrentUserSignUp
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
