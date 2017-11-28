import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'

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
      users: []
    }
    this.currentUserLoggedIn = this.currentUserLoggedIn.bind(this);
  }

  //------------------------------------------------------------------------
    //FETCH ALL USER DATA FROM MONGODB
    fetchUserData() {
      return axios.get(`http://localhost:3001/users`).then(result => {
        this.setState({users: result.data})
      }).catch(console.log)
    }
    //MOUNT ALL USER DATA FROM MONGODB BEFORE RENDER
    componentDidMount() {
      this.fetchUserData();
    }
  //------------------------------------------------------------------------

  currentUserLoggedIn(userDetails) {
    this.setState({
      userLoggedIn: userDetails
    })
  }

  // <Route path="/password" component={SignUpPassword}/>
  // <Route path="/twitter" component ={SignUpTwitter}/>

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/platform" component={Platform}/>
            <Route path="/champdisplay" component={ChampDisplay}/>
            <Route path="/battledisplay" component={BattleDisplay}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
