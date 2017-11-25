import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (<div>
    <Link to="/signin">
      <h1>Sign In</h1>
    </Link>
    <Link to="/signup">
      <h1>Sign Up</h1>
    </Link>
  </div>)
}

export default Home
