import React from 'react';

const SignIn = () => {
    return (
    <div>
      <h3>
        Sign In
      </h3>
      <form action="http://localhost:3001/login" method="post" className="uk-form-horizontal uk-margin-large">
        <div className="uk-margin">
          <label className="uk-form-label">User Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="username" placeholder="username"/>
          </div>
          <label className="uk-form-label">Password</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="password"/>
          </div>
        </div>
        <input type="submit"/>
      </form>
    </div>)
  }

export default SignIn;
