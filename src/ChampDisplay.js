import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
    this.fetchUserData = this.fetchUserData.bind(this);
    this.provokeChamp = this.provokeChamp.bind(this);
  }

//------------------------------------------------------------------------
  //FETCH ALL USER DATA FROM MONGODB
  fetchUserData() {
    return axios.get(`http://localhost:3001/allusers`).then(result => {
      console.log(result.data)
      this.setState({user: result.data})
    }).catch(console.log)
  }
  //MOUNT ALL USER DATA FROM MONGODB BEFORE RENDER
  componentDidMount() {
    this.fetchUserData();
  }
//------------------------------------------------------------------------


  provokeChamp() {

  }
  render() {
    console.log(this.props)
    return (<div>

      {
        this.state.user.map((user, index) => {
          if (user.currentchamp === true) {
            return (<div key={index}>
              <p>{user.username}</p>
            </div>)
          } else {
            return (<div key={index}>
              <p>Champ Unknown</p>
            </div>)
          }
        })
      }

      <button onSubmit={this.provokeChamp} type="button">Provoke</button>

      <Link to="/battledisplay">
        <h1>Champ Display</h1>
      </Link>
    </div>);
  }
}

export default ChampDisplay;
