import React, {Component} from 'react';
import axios from 'axios';

class TwitterBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweet: [],
      userLoggedIn: this.props.activeUser
    }
    // this.userTwitter = this.userTwitter.bind(this);
  }

  // userTwitter(event) {
  //   event.preventDefault();
  //   axios.post("https://thechamp-be.herokuapp.com/twitter/tweetuser", {
  //     message: event.target[0].value
  //   }).catch((err) => err)
  // }

  render() {
    return (
      <div>
        <form action="https://thechamp-be.herokuapp.com/twitter/tweetuser" method="post" className="uk-form-horizontal uk-margin-large">
          <article className='input-container uk-animation-slide-right'>
            <div className="social-media-input">
              <label>Send a tweet to user!</label>
            </div>
            <div className="sub-header"></div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" name="message" placeholder="Lets Battle!"/>
              </div>
              <div className="input-line"></div>
            </div>
          </article>
          <input type="submit" value="Send Tweet"/>
        </form>
      </div>
    )
  }
}
export default TwitterBtn;
