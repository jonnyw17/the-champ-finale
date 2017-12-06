import React, {Component} from 'react';
import './SearchProfile.css';
import {Link} from 'react-router-dom';

class OnlineProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('https://thechamp-be.herokuapp.com/users/')
    .then((res) => {
      this.setState({
        users: res
      }).catch(function (error) {
        console.log(error);
      });
    })
  }

  render(){
    console.log(this.state.users)
    return (
      <div>
      <Link to="/profilepage">
        <article className="user-searched-details border-top-bottom-online uk-animation-slide-bottom">
          <div className="online-circle"></div>
          <h6>Shaun Gibson</h6>
          <div className="ghost-circle"></div>
        </article>
      </Link>
      </div>
    )
  }
}

export default OnlineProfile;
