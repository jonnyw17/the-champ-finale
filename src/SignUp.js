import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (<div>
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
      <article className="menu-wrapper"></article>
    </section>

    <section className="form-container">
      <form action="http://localhost:3001/users/register" method="post" className="uk-form-horizontal uk-margin-large">
        <article className="input-container">
          <div className="social-media-input">
            <label className="uk-form-label">You&#39;ll need a username.<sup>&#42;</sup>
            </label>
          </div>
          <div className="sub-header"></div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input className="uk-input" id="form-horizontal-text" type="text" name="username" placeholder="Username"/>
            </div>
            <div className="input-line"></div>
          </div>
          <input type="submit" value="Submit"/>
        </article>
        <Link to="/password">
          <input className="confirm-btn" type="button" value="Confirm"/>
        </Link>
      </form>
    </section>
  </div>)
}

export default SignUp;
