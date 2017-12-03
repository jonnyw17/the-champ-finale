import React, {Component} from 'react';
import './ProfilePage.css';

import ChallengeRequestSent from './ChallengeRequestSent';

class ChallengeRequest extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestSend: false
    };
    this.testToggle = this.testToggle.bind(this);
  }
  testToggle(){
    this.setState({requestSend : true});
  }
  render(){

    return (

      <div>
      <button className="challenge-btn-send" style={{display:'none'}}>
        <img src="Provoke_Icon_Brown.png" alt="challenge icon"/>
        <h4>Challenge </h4>
      </button>
      </div>
    )
  }
}

export default ChallengeRequest;
