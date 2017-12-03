import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SignUp from './SignUp';
import Platform from './Platform';
import SignIn from './SignIn';
import ChampDisplay from './ChampDisplay';
import BattleDisplay from './BattleDisplay';
import BattleDisplayReady from './BattleDisplayReady'
import Home from './Home'
import SearchProfile from './SearchProfile';
import ProfilePage from './ProfilePage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLoggedIn: []
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  //------------------------------------------------------------------------
    //FETCH ALL USER DATA FROM MONGODB
    // fetchUserData() {
    //   return axios.get(`http://localhost:3001/users`).then(result => {
    //     this.setState({users: result.data})
    //   }).catch(console.log)
    // }
    // //MOUNT ALL USER DATA FROM MONGODB BEFORE RENDER
    // componentDidMount() {
    //   this.fetchUserData();
    // }
  //------------------------------------------------------------------------

  getCurrentUser(currentUser) {
    console.log(currentUser)
    this.setState({
      userLoggedIn: currentUser
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/signup" render={()=><SignUp getCurrentUser={this.getCurrentUser}/>}/>
            <Route path="/signin" component={SignIn}/>
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
