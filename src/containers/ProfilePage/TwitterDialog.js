import React, {Component} from 'react';
import axios from 'axios';

import './TwitterDialog.css';

class TwitterDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      tweet: [],
      userLoggedIn: this.props.activeUser
    }
  }

  render() {
    console.log(this.state.userLoggedIn)
    return (
      <div className="twitter-dialog-container uk-animation-slide-right">
        <form onSubmit={this.postUserDetails} className="uk-form-horizontal uk-margin-large">
        <article className='input-container'>
          <div className="social-media-input">
            <label>Send a tweet to user!</label>
          </div>
          <div className="sub-header"></div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input className="tweet-box-input uk-input" id="form-horizontal-text" type="text" name="fullname" placeholder="Lets Battle!" />
            </div>
            <div className="input-line"></div>
          </div>
        </article>
        <div className="submit-tweet">
          <input className="send-tweet" type="submit" value="Send Tweet"/>
        </div>
        </form>
       </div>
    )
  }
}
export default TwitterDialog;
