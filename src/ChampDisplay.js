import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ChampDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      usersTwitter: []
    }
    // this.provokeChamp = this.provokeChamp.bind(this);
    // this.TweetChamp = this.TweetChamp.bind(this)
  }

  // TweetChamp(event) {
  //
  // }

  render() {
    return (
      <div>
          <button onSubmit={this.provokeChamp} type="button">Provoke</button>
          <button onSubmit={this.TweetChamp} type="button">Tweet Provocation</button>
          <Link to="/battledisplay">
            <h1>Champ Display</h1>
          </Link>
      </div>
    );
  }
}

export default ChampDisplay;
