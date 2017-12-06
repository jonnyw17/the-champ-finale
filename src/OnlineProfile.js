import React, {Component} from 'react';
import axios from 'axios';
import './SearchProfile.css';
import {Link} from 'react-router-dom';

class OnlineProfile extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    axios.get('https://thechamp-be.herokuapp.com/users/')
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
  }

  render(){
    return (
      <div>
      {this.state.users.map((users, index) => {
        if(users.online) {
          return (
            <div key={index}>
              <Link to="/profilepage">
                <article className="user-searched-details border-top-bottom-online uk-animation-slide-bottom">
                  <div className="online-circle"></div>
                  <h6>{users.fullname}</h6>
                  <div className="ghost-circle"></div>
                </article>
              </Link>
            </div>
          )
        }
      })}
      </div>
    )
  }
}

export default OnlineProfile;
