import React from 'react';
import Header from './Header';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div>
      <Header /> {/* Add the Header component here */}

      <div className="hero">
        <div className="hero-content">
          <div className="hero-title-side">
            <br></br><br></br>
            <h1 className="hero-title">EpicReads</h1>
          </div>
          <div className="hero-text-side">
            <p className="hero-subtitle">Every Book You Love and Ones You Haven’t Met Yet!</p>
            <p className="hero-description">
              Explore a collection where familiar favorites meet undiscovered gems.
              Dive in and let every book introduce itself, one page at a time.
              Start your next chapter with us today!
            </p>
            <button className="hero-button"><Link to="/Admin_a">Start Read</Link>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
