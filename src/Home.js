import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import './Normalise.css'
const Home = () => {
  return (<div className="main-container">
    <section className="logo-container">
      <article className="logo-wrapper">
        <img src="BetGame_Logo_White.png" alt="the champ logo"/>
        <h1>Champ</h1>
      </article>
    </section>
    <section className="brand-description-container">
      <article className="brand-description">
        <p>Welcome to Champ</p>
        <p>A Location based scoreboard. Become the</p>
        <p>Gaming Champion of your house or area</p>
      </article>
    </section>
    <section className="bottom-container">
      <article className="btn-wrapper">
        <Link to="/signup">
          <button className="sign-up-btn">
            <h5>Sign up</h5>
          </button>
        </Link>
        <Link to="/signin">
          <button className="sign-in-btn">
            <h5>Log in</h5>
          </button>
        </Link>
      </article>
    </section>
  </div>)
}

export default Home
