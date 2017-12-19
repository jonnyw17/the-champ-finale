import React, {Component}from 'react';

import './TwitterDialog.css';

class TwitterBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    console.log(this.props);
    const twitterNewPos = this.props.tweetBtnClick
      ? 'twitter-new-position'
      : 'twitter-btn-container';
    const twitterAnimation = this.props.tweetBtnClick
      ? 'twitter-move-animation'
      : '';
    return (
      <div>
        <button className={twitterNewPos + ' ' + twitterAnimation} onClick={this.props.twitterActivate} style={{
                  display: this.props.requestSent
                      ? 'none'
                      : 'flex'
                  }}>
          <div className="twitter-btn">
            <img src="Twitter_Icon_White.png" alt="White Twitter"/>
          </div>
        </button>
          <button className="challenge-sent pos-abs" style={{
                  display: this.props.requestSent
                        ? 'flex'
                        : 'none'
                  }}>
            <h6>CHALLENGE SENT !</h6>
          </button>
      </div>
    )
  }
}

export default TwitterBtn;
