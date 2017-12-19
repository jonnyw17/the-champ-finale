import React, {Component}from 'react';

// import './.css';

class ChallengeRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    console.log(this.props);
    const displayRequestButtonPending = !this.props.requestSent
      ? 'flex'
      : 'none';
    const displayRequestButtonSent = this.props.requestSent
      ? 'flex'
      : 'none';
    return (
      <div>
        <button className="challenge-btn" onClick={this.props.sendingRequest} style={{display: displayRequestButtonPending}}>
          <img src="Provoke_Icon_White.png" alt="provoke icon"/>
          <h6>CHALLENGE</h6>
        </button>
        <button className="challenge-sent" style={{display: displayRequestButtonSent}}>
          <h6 className="uk-animation-slide-top">CHALLENGE SENT !</h6>
        </button>
      </div>
    )
  }
}

export default ChallengeRequest;
