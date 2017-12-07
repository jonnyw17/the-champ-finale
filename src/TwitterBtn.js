import React, {Component} from 'react';
import axios from 'axios';

class TwitterBtn extends Component {
  constructor(props){
    super(props)
    this.state = {
      tweet: [],
      userLoggedIn: this.props.activeUser
    }
  }

  render() {
    let style = {
      backgroundColor:"red",
      color:"#fff"
    }
    console.log(this.state.userLoggedIn)
    return (
      <div>
        <form onSubmit={this.postUserDetails} className="uk-form-horizontal uk-margin-large">
        <article className='input-container uk-animation-slide-right'>
          <div className="social-media-input">
            <label style={style}>Send a tweet to user!</label>
          </div>
          <div className="sub-header"></div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input className="uk-input" id="form-horizontal-text" type="text" name="fullname" placeholder="Lets Battle!" />
            </div>
            <div className="input-line"></div>
          </div>
        </article>
        <input type="submit" value="Send Tweet" style={style}/>
        </form>
       </div>
    )
  }
}
export default TwitterBtn;
