import React from 'react';
import Header from './Header';
import './User.css';
import { Link } from 'react-router-dom';


const Userb = () => {
  return (
    <div>
      <Header />
      <div className="signin-containe">
        <div className="title-sid">
        <h1 className="admin-titl"><Link to="/Admin_a">Admin</Link></h1>
        <h1 className="user-titl"><Link to="/User_a">User</Link></h1>
        </div>
        <div className="signin-card">
          <div className="signin-header">
            <button className="signin-ta"><Link to="/User_b">Sign in</Link></button>
            <button className="signup-tab">Sign up</button>
          </div>
          <div className="signin-body">
            <div className="signin-input-group">
              <label htmlFor="username">Name</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="signin-input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="signin-input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="signin-input-group">
            <label htmlFor="repassword">Re-Password</label>
            <input type="password" id="repassword" name="repassword" />
            </div>
            <div className="signin-options">
              <label>
                <input type="checkbox" />
                I accept the Terms and Conditions
              </label>
              </div>
            <button className="signin-button">Create Account</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userb;
