import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './SignUp.css'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fullname: 'block',
      password: 'none',
      address: 'none',
      postcode: 'none',
      username: 'none',
      twitter: 'none',
      submitBtn: 'none',
      confirmBtn: 'block',
      nextBtn: 'none',
      disabledBtn: true,
      userMessage: ''
    }
    this.displayInput = this.displayInput.bind(this);
    this.postUserDetails = this.postUserDetails.bind(this);
    this.showPostcodeInput = this.showPostcodeInput.bind(this);
    this.userMessage = this.userMessage.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  //COMPOENENTDIDMOUNT - lifecylce function used to increase count after first render in preperation for users next input field (feel like the count has an issue need to read up more and find out if this is the right approach, count without this is always one behind, must be something to do with the way the component/render works but check!)
  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
      disabledBtn: true
    })
  }

  //DISPLAYARTICLE - hide input field until a certain count value has been reached, count is incremented up by the value of 1 every time the 'Confirm' input is clicked by the user, for each increment a new input field slides in from the right, event object is then sent via ajax to the backend to be processed and then finally stored in the MongoDB
  displayInput() {
    let fullname = this.state.fullname;
    let username = this.state.username;
    let password = this.state.password;
    let address = this.state.address;
    let twitter = this.state.twitter;
    let confirmBtn = this.state.confirmBtn;
    let submitBtn = this.state.submitBtn;
    let nextBtn = this.state.nextBtn;
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
      ? address = 'block'
      : address = 'none';

    count === 4
      ? twitter = 'block'
      : twitter = 'none';

    count === 0 || 1 || 2 || 3
      ? confirmBtn = 'block'
      : confirmBtn = 'none';

    count === 4
      ? submitBtn = 'block'
      : submitBtn = 'none';

    count === 5
      ? nextBtn = 'block'
      : nextBtn = 'none';

    this.setState({
      fullname: fullname,
      username: username,
      password: password,
      address: address,
      twitter: twitter,
      submitBtn: submitBtn,
      nextBtn: nextBtn,
      confirmBtn: confirmBtn,
      count: this.state.count + 1
    });
  };

  postUserDetails(event) {
    event.preventDefault();
    let currentUser = {
      fullname: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
      streetname: event.target[3].value,
      city: event.target[4].value,
      twitterHandle: event.target[5].value
    }
    this.props.getCurrentUserSignUp(currentUser);

    axios.post("https://thechamp-be.herokuapp.com/users/register", {
      fullname: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
      streetname: event.target[3].value,
      city: event.target[4].value,
      twitterhandle: event.target[5].value
    }).catch((err) => err)
  }

  //SHOWPOSTCODEINPUT - adds display to hidden input fields on address section, when event.target.value.length > 0 input field slides in
  showPostcodeInput(event) {
    let postcodeInput;
    event.preventDefault();
    event.target.value.length > 0
      ? postcodeInput = 'block'
      : postcodeInput = 'none';
    this.setState({postcode: postcodeInput})
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

  //USERINPUT - caputure the details/length of the input fields with the view of removing the disabled attr from the input field when the user adds a string longer than the minimum length
  userInput(event) {
    let btnState;
    event.preventDefault();
    event.target.value.length > 3
      ? btnState = false
      : btnState = true;
    this.setState({disabledBtn: btnState})
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
    let displayAddress = {
      display: this.state.address
    };
    let displayPostcode = {
      display: this.state.postcode
    };
    let displayTwitterHandle = {
      display: this.state.twitter
    };
    let displaySubmit = {
      display: this.state.submitBtn
    };
    let displayConfirm = {
      display: this.state.confirmBtn
    };
    let displayNext = {
      display: this.state.nextBtn
    }

    return (
      <div>
        <section className="top-container">
          <article className="back-btn-wrapper fixed">
            <Link to="/">
              <div className="back-btn">
                <img src="Back_Button_Triangle_Icon.png" alt="back button"/>
                <h5>Back</h5>
              </div>
            </Link>
          </article>
          <article className="logo-signup-wrapper">
            <img src="BetGame_Logo.png" alt="the champ logo"/>
            <h3>Champ</h3>
          </article>
        </section>
        <section className="form-container">
          <form onSubmit={this.postUserDetails} className="uk-form-horizontal uk-margin-large">

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

            <article className='input-container uk-animation-slide-right' style={displayAddress}>
              <div className="social-media-input">
                <label className="uk-form-label">We&#39;ll need your full address.
                  <sup>&#42;</sup>
                </label>
              </div>
              <div className="sub-header"></div>
              <div className="uk-margin">
              <div className="uk-form-controls">
                <input onChange={this.showPostcodeInput} className="uk-input" id="form-horizontal-text" type="text" name="streetname" placeholder="Street Number" required="required"/>
              </div>
                <div className="uk-form-controls">
                  <input onChange={this.showPostcodeInput} className="uk-input" id="form-horizontal-text" type="text" name="streetname" placeholder="Street Name" required="required"/>
                </div>
                <div className="uk-form-controls">
                  <input onChange={this.userInput} className="uk-input uk-animation-slide-right" style={displayPostcode} id="form-horizontal-text" type="text" name="city" placeholder="City" required="required"/>
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
                  <input className="uk-input twitter-handle-input" id="form-horizontal-text" type="text" name="twitterhandle" placeholder="Twitter Handle"/>
                </div>
                <div className="input-line"></div>
              </div>
            </article>

            <input className="confirm-btn" onClick={this.displayInput} type="button" value="Confirm" style={displayConfirm} disabled={this.state.disabledBtn}/>
            <input className="confirm-btn" onClick={this.displayInput} type="submit" value="Submit" style={displaySubmit}/>
            <article className='input-container uk-animation-slide-right' style={displayNext}>
              <div className="centered-description">
                <label className="uk-form-label">Ready to be The Champ?!</label>
              </div>
            </article>
            <Link to='/platform'>
              <input className="confirm-btn" type="button" value="Next" style={displayNext}/>
            </Link>
          </form>
        </section>
    </div>)
  }
}
export default SignUp;
