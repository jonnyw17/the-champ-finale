import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      count: 0,
      fullname: 'block',
      password: 'none',
      username: 'none',
      twitter: 'none',
      submitBtn: 'none',
      confirmBtn: 'block',
      disabledBtn: true,
      userMessage: ''
    }
    this.displayInput = this.displayInput.bind(this);
    this.userInput = this.userInput.bind(this);
    this.userMessage = this.userMessage.bind(this);
  }

  //USERINPUT - caputure the details/length of the input fields with the view of removing the disabled attr from the input field when the user adds a string longer than the minimum length
  userInput(event) {
    event.preventDefault();
    let btnState;
    event.target.value.length > 3
      ? btnState = false
      : btnState = true;
    this.setState({disabledBtn: btnState})
  }

  //USERMESSAGE - inform the user of the minimum length needed, once minimum length has been reached inform the user that hey can then move onto the next input field
  userMessage(event) {
    event.preventDefault();
    let usermessage;
    event.target.value.length > 3
      ? usermessage = 'Username is acceptable, please press confirm to continue'
      : usermessage = 'Username too short, please make sure it has a minimum of 4 characters';
    this.setState({userMessage: usermessage})
  }

  //DISPLAYARTICLE - hide input field until a certain count value has been reached, count is incremented up by the value of 1 every time the 'Confirm' input is clicked by the user, for each increment a new input field slides in from the right, event object is then sent via ajax to the backend to be processed and then finally stored in the MongoDB
  displayInput() {
    let fullname = this.state.fullname;
    let username = this.state.username;
    let password = this.state.password;
    let twitter = this.state.twitter;
    let confirmBtn = this.state.confirmBtn;
    let submitBtn = this.state.submitBtn;
    let count = this.state.count;

    count === 0
      ? fullname = 'block'
      : fullname = 'none';

    count === 1
      ? username = 'block'
      : username = 'none';

    count === 2
      ? password = 'block'
      : password = 'none';

    count === 3
      ? twitter = 'block'
      : twitter = 'none';

    count === 0 || 1 || 2
      ? confirmBtn = 'block'
      : confirmBtn = 'none';

    count === 3
      ? submitBtn = 'block'
      : submitBtn = 'none';

    this.setState({
      fullname: fullname,
      username: username,
      password: password,
      twitter: twitter,
      submitBtn: submitBtn,
      confirmBtn: confirmBtn,
      count: this.state.count + 1
    });
  };

  //COMPOENENTDIDMOUNT - lifecylce function used to increase count after first render in preperation for users next input field (feel like the count has an issue need to read up more and find out if this is the right approach, count without this is always one behind, must be something to do with the way the component/render works but check!)
  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
      disabledBtn: true
    })
  }

  render() {

    //CSS inline styles, used to set display to either none for any none relevant input fields, accessing state to determin which input field is to be put in the view state is changed via the displayInput function.
    let displayFullname = {
      display: this.state.fullname
    }
    let displayUserName = {
      display: this.state.username
    };
    let displayPassword = {
      display: this.state.password
    };
    let displayTwitterHandle = {
      display: this.state.twitter
    }
    let displaySubmit = {
      display: this.state.submitBtn
    }
    let displayConfirm = {
      display: this.state.confirmBtn
    }

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

          <article className='input-container uk-animation-slide-right' style={displayFullname}>
            <div className="social-media-input">
              <label className="uk-form-label">We&#39;ll need your full name.
                <sup>&#42;</sup>
              </label>
            </div>
            <div className="sub-header"></div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <input onChange={this.userInput} className="uk-input" id="form-horizontal-text" type="text" name="fullname" placeholder="Full name" required="required"/>
              </div>
              <div className="input-line"></div>
            </div>
          </article>

          <article className='input-container uk-animation-slide-right' style={displayUserName}>
            <div className="social-media-input">
              <label className="uk-form-label">You&#39;ll need a username.<sup>&#42;</sup>
              </label>
            </div>
            <div className="sub-header"></div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" name="username" placeholder="Username" required="required"/>
              </div>
              <div className="input-line"></div>
            </div>
          </article>

          <article className='input-container uk-animation-slide-right' style={displayPassword}>
            <div className="social-media-input">
              <label className="uk-form-label">You&#39;ll need a password.<sup>&#42;</sup>
              </label>
            </div>
            <div className="sub-header_included">Make sure it&#39;s 6 characters or more</div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="password" name="password" placeholder="Password" required="required"/>
              </div>
              <div className="input-line"></div>
            </div>
          </article>

          <article className='input-container uk-animation-slide-right' style={displayTwitterHandle}>
            <div className="social-media-input">
              <img src="Twitter_Icon_Black.png" alt="twitter icon"/>
              <label className="uk-form-label">Twitter details</label>
            </div>
            <div className="sub-header_included">Provoke your opponent on Twitter (optional)</div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <div className="at-html-entity">&#64;</div>
                <div className="division-line"></div>
                <input className="uk-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="Twitter Handle"/>
              </div>
              <div className="input-line"></div>
            </div>
          </article>

          <input className="confirm-btn" onClick={this.displayInput} type="button" value="Confirm" style={displayConfirm} disabled={this.state.disabledBtn}/>
          <input className="confirm-btn" type="submit" value="Submit" style={displaySubmit}/>

        </form>
      </section>
    </div>)
  }
}
export default SignUp;
