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
    this.setState({
      currentUserSignedUp: currentUser
    })
  }

  getCurrentUserSignIn(currentUser) {
    this.setState({
      currentUserSignedIn: currentUser
    })
  }

  render() {
    console.log(this.state.userLoggedIn)
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/signup" render={()=><SignUp getCurrentUserSignUp={this.getCurrentUserSignUp}/>}/>
            <Route path="/signin" render={()=><SignIn getCurrentUserSignIn={this.getCurrentUserSignIn}/>}/>
            <Route path="/profilepage" component={ProfilePage}/>
            <Route path="/platform" component={Platform}/>
            <Route path="/champdisplay" render={()=><ChampDisplay activeUser={this.state.userLoggedIn}/>}/>
            <Route path="/searchprofile" render={()=><SearchProfile activeUser={this.state.userLoggedIn}/>}/>
            <Route path="/battledisplay" component={BattleDisplay}/>
            <Route path="/battledisplayready" component={BattleDisplayReady}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
