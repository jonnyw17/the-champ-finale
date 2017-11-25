import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SignUp from './SignUp';
import Platform from './Platform';
import SignIn from './SignIn';
import ChampDisplay from './ChampDisplay';
import BattleDisplay from './BattleDisplay';
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLoggedIn: []
    }
    this.currentUserLoggedIn = this.currentUserLoggedIn.bind(this);
  }

  currentUserLoggedIn(userDetails) {
    this.setState({
      userLoggedIn: userDetails
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/signup" component={() => <SignUp currentUserLoggedIn={this.currentUserLoggedIn} />} />
            <Route path="/signin" component={SignIn}/>
            <Route path="/platform" component={Platform}/>
            <Route path="/champdisplay" component={() => <ChampDisplay loggedInUser={this.state.userLoggedIn} />} />
            <Route path="/battledisplay" component={BattleDisplay}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
