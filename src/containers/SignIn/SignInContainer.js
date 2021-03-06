import React, {Component} from 'react';
import axios from 'axios';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.postUserDetails = this.postUserDetails.bind(this);
  }
  postUserDetails(event) {
    event.preventDefault();
    let currentUser = {
      username: event.target[0].value,
    }
    this.props.getCurrentUserSignIn(currentUser);

    axios.post("https://thechamp-be.herokuapp.com/users/login", {
      username: event.target[0].value,
      password: event.target[1].value
    }).catch((err) => err)
  }

  render() {
    return (
    <div className="main-container">
    <section className="nav-platform-display">
      <article className="logo-platform-wrapper">
        <img className="white-logo" src="BetGame_Logo_White.png" alt="white champ logo"/>
        <h3 className="white-logo-name">Champ</h3>
      </article>
    </section>
      <section className="activity-form-container">
        <article className="form-container">
          <form onSubmit={this.postUserDetails} className="uk-form-horizontal uk-margin-large">
              <label className="uk-form-label white-color">Username</label>
              <div className="uk-form-controls">
                <input className="username-signin uk-input form-border-radius" id="form-horizontal-text" type="text" name="username" placeholder="Username"/>
                <div className="horizontal-separator"></div>
              </div>
              <label className="uk-form-label white-color form-margin-top">Password</label>
              <div className="uk-form-controls">
                <input className="password-signin uk-input form-border-radius" id="form-horizontal-text" type="password" name="password" placeholder="Password"/>
                <div className="horizontal-separator"></div>
              </div>
            <input className="confirm-credentials" onClick={this.displayInput} type="submit" value="Submit" />
          </form>
        </article>
      </section>
    </div>
  );
 }
}

export default SignIn;
