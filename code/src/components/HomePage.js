import React from 'react';
import ReHeader from './ReHeader'; // Importing the sidebar component
import './HomePage.css'; // Importing the CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Sidebar */}
      <ReHeader />

      {/* Main Content */}
      <div className="main-content">
        {/* Search Bar and Banner */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your favourite books"
            className="search-input"
          />
          <div className="user-profile">
            <span className="user-name">John Doe</span>
            <img
              src="path_to_user_icon" // Replace with the path to the user icon image
              alt="User Icon"
              className="user-icon"
            />
          </div>
        </div>

        {/* Banner with Text */}
        <div className="banner">
          <h1 className="banner-text">The Art of Digital Library Mastery</h1>
        </div>

        {/* Recommended Books Section */}
        <div className="recommended-section">
          <h2 className="section-title">Recommended Books</h2>
          <div className="books-container">
            <img
              src="#" // Replace with the path to your book image
              alt="Book 1"
              className="book-image"
            />
            <img
              src="#" // Replace with the path to your book image
              alt="Book 2"
              className="book-image"
            />
            <img
              src="#" // Replace with the path to your book image
              alt="Book 3"
              className="book-image"
            />
            <img
              src="#" // Replace with the path to your book image
              alt="Book 4"
              className="book-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
