import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class BattleDisplay extends Component {
  render() {
    return (
        <Link to="/champdisplay">
          <h1>Battle Disply</h1>
        </Link>
    );
  }
}

export default BattleDisplay;
