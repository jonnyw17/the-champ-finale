import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Platform extends Component {
  render() {
    return (<div className="platForm-main-div">
      <div className="platform-nav">
        <p className="platform-header">Platform</p>
      </div>
      <Link to="/champdisplay">
        <div className="platform">
            <h3 className="platform-name-top">Worms W.M.D.</h3>
        </div>
      </Link>
      <div className="platform">
        <h3 className="platform-name">League of Legends<br/>
          <span className="coming-soon">Coming Soon</span>
        </h3>
      </div>
      <div className="platform">
        <h3 className="platform-name">Starcraft II
          <br/>
          <span className="coming-soon">Coming Soon</span>
        </h3>
      </div>
      <div className="platform">
        <h3 className="platform-name">Dota 2
          <br/>
          <span className="coming-soon">Coming Soon</span>
        </h3>
      </div>
    </div>)
  }
}

export default Platform;
