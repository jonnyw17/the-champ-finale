import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';

class SignUpPassword extends Component {

  handleSubmit(event) {
    event.preventDefault();
    // const userDetails = event.target[0].value;
    this.setState({
      name:event.target[0].value
    })
  }

  render() {
    return (
      <div>
      <section className="top-container">
        <article className="back-btn-wrapper">
          <Link to="/">
            <h5>Back</h5>
          </Link>
        </article>
        <article className="logo-wrapper">
          <img src="BetGame_Logo_Brown.png" alt="the champ logo"/>
          <h3>Champ</h3>
        </article>
        <article className="menu-wrapper">
        </article>
      </section>

      <section className="form-container">
      <form onSubmit={this.handleSubmit} className="uk-form-horizontal uk-margin-large">
      <article className="input-container">
      <div className="social-media-input">
        <label className="uk-form-label">You&#39;ll need a password.<sup>&#42;</sup></label>
      </div>
      <div className="sub-header_included">Make sure it&#39;s 6 characters or more</div>
      <div className="uk-margin">
      <div className="uk-form-controls">
        <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="Password"/>
      </div>
      <div className="input-line"></div>
      </div>
      </article>
      <Link to="/twitter">
        <input className="confirm-btn" type="submit" value="Confirm"/>
      </Link>
      </form>
      </section>
    </div>)
  }
}

export default SignUpPassword;


// <label className="uk-form-label">Twitter handle</label>
// <div className="uk-form-controls">
//   <input className="uk-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="@"/>
// </div>
