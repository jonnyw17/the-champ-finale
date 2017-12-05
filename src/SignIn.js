import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
    <div className="main-container">
    <section className="menu-drop-down">
    <article className="logo-wrapper">
      <img src="BetGame_Logo_White.png" alt="the champ icon"/>
      <h3>Champ</h3>
    </article>
    </section>
    <section className="activity-form-container">
    <article className="form-container">
      <form action="https://thechamp.herokuapp.com/users/login" method="post" className="uk-form-horizontal uk-margin-large">
          <label className="uk-form-label white-color">Username</label>
          <div className="uk-form-controls">
            <input className="uk-input form-border-radius" id="form-horizontal-text" type="text" name="username" placeholder="Username"/>
            <div className="horizontal-separator"></div>
          </div>
          <label className="uk-form-label white-color form-margin-top">Password</label>
          <div className="uk-form-controls">
            <input className="uk-input form-border-radius" id="form-horizontal-text" type="password" name="password" placeholder="Password"/>
            <div className="horizontal-separator"></div>
          </div>
        <input className="signin-btn" type="submit" value="SIGN IN"/>
      </form>
      </article>
    </section>
    </div>)
  }

export default SignIn;
