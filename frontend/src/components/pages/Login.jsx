import React, { useState } from 'react';
import '../homemodules/css/Login.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Login() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const fetchValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    axios.post("http://localhost:3000/user/login", user)
      .then((res) => {
        alert(res.data.message);
      }).catch((err) => {
        console.log(err);
      });

  }

  return (
    <>
      <div className='link-home'><Link to={'/'}>Home</Link></div>
      <div className='login-body'>
        <div className="login-container">
          <h1>Welcome</h1>
          <div className="profile-pic">
            {/* Profile picture*/}
            <img src="https://via.placeholder.com/100" alt="User" />
          </div>
          <form onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              placeholder="xxxxxx@email.com"
              name='username'
              onChange={fetchValue}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name='password'
              onChange={fetchValue}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="login-footer">
            <a href="#">Forgot Username / Password?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;