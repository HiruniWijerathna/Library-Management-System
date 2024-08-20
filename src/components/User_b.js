import React from 'react';
import Header from './Header';
import './User.css';
import { Link } from 'react-router-dom';


const User_b = () => {
  return (
    <div>
      <Header />
      <div className="signin-containe">
        <div className="title-sid">
        <h1 className="admin-titl"><Link to="/Admin_a">Admin</Link></h1>
        <h1 className="user-titl"><Link to="/User_b">User</Link></h1>
        </div>
        <div className="signin-card">
          <div className="signin-header"><br></br><br></br><br></br><br></br>
            <button className="signin-ta">Sign in</button>
            <button className="signup-tab"><Link to="/User_a">Sign up</Link></button>
          </div>
          <div className="signin-body">
          <div className="signin-input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="signin-input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="signin-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/forget-password" className="forget-password">Forget Password?</a>
            </div>
            <button className="signin-button">Sign in</button>
            <button className="signup-link">Don't have an account?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_b;
