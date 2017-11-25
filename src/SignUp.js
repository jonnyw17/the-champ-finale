import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const userDetails = event.target.value;
    this.props.currentUserLoggedIn(userDetails)
  }

  render() {
    return (
      <div>
      <h3>
        Sign Up
      </h3>
      <form onSubmit={this.handleSubmit} action="http://localhost:3001/register" method="post" className="uk-form-horizontal uk-margin-large">
        <div className="uk-margin">
          <label className="uk-form-label">User Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="username" placeholder="John123"/>
          </div>
          <label className="uk-form-label">Password</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="password"/>
          </div>
          <label className="uk-form-label">First Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="firstname" placeholder="John"/>
          </div>
          <label className="uk-form-label">Last Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="lastname" placeholder="Smith"/>
          </div>
          <label className="uk-form-label">Twitter handle</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="@"/>
          </div>
        </div>
        <input type="submit"/>
      </form>
    </div>)
  }
}

export default SignUp;
