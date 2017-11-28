import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';

class SignUpTwitter extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: {

      }
    }
  }

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
        <img src="Twitter_Icon_Black.png" alt="twitter icon"/>
        <label className="uk-form-label">Twitter details</label>
      </div>
      <div className="sub-header_included">Provoke your opponent on Twitter (optional)</div>
      <div className="uk-margin">
      <div className="uk-form-controls">
      <div className="at-html-entity">&#64;</div>
      <div className="division-line"></div>
        <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="Twitter Handle"/>
      </div>

      <div className="input-line"></div>
      </div>
      </article>
      <Link to="/platform">
        <input className="confirm-btn" type="submit" value="Confirm"/>
      </Link>
      </form>
      </section>
    </div>)
  }
}

export default SignUpTwitter;


// <label className="uk-form-label">Twitter handle</label>
// <div className="uk-form-controls">
//   <input className="uk-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="@"/>
// </div>
