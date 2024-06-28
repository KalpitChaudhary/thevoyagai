import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="signup-options">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <p>Or sign up using:</p>
        <button>Facebook</button>
        <button>Google</button>
        <button>Apple ID</button>
      </div>
    </div>
  );
}

export default Login;
