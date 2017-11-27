import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (

<div class="main-container">
<section class="logo-container">
    <article class="logo-wrapper">
      <img src="BetGame_Logo_White.png"/>
      <h1>Champ</h1>
    </article>
</section>
  <section class="brand-description-container">
  <article class="brand-description">
  <p>Welcome to Champ</p>
  <p>A Location based scoreboard. Become the</p>
  <p>Gaming Champion of your house or area</p>
  </article>
  </section>
  <section class="bottom-container">
  <article class="btn-wrapper">
    <Link to="/signup">
      <button class="sign-up-btn">
        <h5>SIGN UP</h5>
      </button>
    </Link>
    <Link to="/signin">
    <button class="sign-in-btn">
        <h5>SIGN IN</h5>
      </button>
    </Link>
  </article>
  </section>
    </div>)
}

export default Home
