import React from 'react';

const SignUp = () => {
    return (
      <div>
      <h3>
        Sign Up
      </h3>
      <form action="http://localhost:3001/users/register" method="post" className="uk-form-horizontal uk-margin-large">
        <div className="uk-margin">
          <label className="uk-form-label">User Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="username" placeholder="John123"/>
          </div>
          <label className="uk-form-label">Password</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="password"/>
          </div>
          <label className="uk-form-label">Twitter handle</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="@"/>
          </div>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>)
}

export default SignUp;
