import React, {Component} from 'react';
import axios from 'axios';

import './ProfilePage.css';

class TwitterDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      tweet: [],
      userLoggedIn: this.props.activeUser
    }
    // this.postTweet = this.postTweet.bind(this);
  }
  //
  // postTweet(event) {
  //   event.preventDefault();
  //   console.log(event.target[0].value)
  //   axios.post("https://thechamp-be.herokuapp.com/twitter/tweetuser", {
  //     message: event.target[0].value
  //   }).catch((err) => err)
  // }

  render() {
    return (
      <div className="twitter-dialog-container uk-animation-slide-right">
        <form action="https://thechamp-be.herokuapp.com/tweet/tweetuser" method="post" className="uk-form-horizontal uk-margin-large">
        <article className='input-container'>
          <div className="social-media-input">
            <label>Send a tweet to user!</label>
          </div>
          <div className="sub-header"></div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input className="uk-input" id="form-horizontal-text" type="text" name="message" placeholder="Lets Battle!" />
            </div>
            <div className="input-line"></div>
          </div>
        </article>
        <div className="submit-tweet">
          <input type="submit" value="Send Tweet"/>
        </div>
        </form>
      </div>
    )
  }
}
export default TwitterDialog;
