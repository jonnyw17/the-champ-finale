import React, {Component} from 'react';
import './SearchProfile.css';

class OfflineProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      online: false
    }
  }
  render(){
    return (
      <div>
        <article className="user-searched-details border-top-bottom-offline uk-animation-slide-bottom">
          <div className="offline-circle"></div>
          <h6>Anthony Tran</h6>
          <div className="ghost-circle"></div>
        </article>
        <article className="user-searched-details border-top-bottom-offline uk-animation-slide-bottom">
          <div className="offline-circle"></div>
          <h6>Jonny Ward</h6>
          <div className="ghost-circle"></div>
        </article>
      </div>
    )
  }
}

export default OfflineProfile;
