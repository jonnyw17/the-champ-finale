import React, {Component} from 'react';
import axios from 'axios';
import './SearchProfile.css';
import {Link} from 'react-router-dom';

class OnlineProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
    this.userProfile = this.userProfile.bind(this);
  }

  componentDidMount() {
    axios.get('https://thechamp-be.herokuapp.com/users/?online=true').then((res) => {
      this.setState({users: res.data})
    })
  }

  userProfile(index) {
    console.log(index)
  }

  render() {
    return (<div>
      {
        this.state.users.map((users, index) => {
          if (users.online) {
            return (
            <div key={index}>
              <Link onClick={this.userProfile} to='profilepage'>
                <article className="user-searched-details border-top-bottom-online uk-animation-slide-bottom">
                <div className="ghost-circle">
                {index === 0?
                  <img src="Shaun_Face_Circular.png" alt="person"/>
                  :
                  <img src="Doug_Face_Circular.png" alt="person"/>
                }
                </div>
                  <h6>{users.fullname}</h6>
                  <div className="online-circle"></div>
                </article>
              </Link>
            </div>)
          }
        })
      }
    </div>)
  }
}

export default OnlineProfile;
