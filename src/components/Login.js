import React, { useState } from 'react';
import '../css/Login.css';

const Login = ({ onLogin }) => { // This component receives a prop called onLogin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const userData = {
      name: 'Saxeli Gvari',
      email: email,
    };
    onLogin(userData);
  };

  const handleFacebookLogin = () => { // This function is called when the Facebook login button is clicked
    const userData = {
      name: 'Saxeli Gvari',
      email: 'saxeligvari@facebook.com',
    };
    onLogin(userData);
  };

  const handleGoogleLogin = () => { // Similiar for google
    const userData = {
      name: 'Saxeli Gvari',
      email: 'saxeligvari@gmail.com',
    };
    onLogin(userData);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login with Email</button>
      </form>
      <div className="social-login">
        <button onClick={handleFacebookLogin} className="facebook-button">Login with Facebook</button>
        <button onClick={handleGoogleLogin} className="google-button">Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
