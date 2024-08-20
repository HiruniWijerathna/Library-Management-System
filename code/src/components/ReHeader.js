import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchBar from './SearchBar'; // Import SearchBar component
import './Header2.css'; // Import the CSS file

const ReHeader = () => {
  return (
    <div>
      {/* Render SearchBar at the top */}
      <SearchBar userName="John Doe" />

      {/* Sidebar content */}
      <div className="sidebar-container">
        {/* Brand section */}
        <div className="brand">
          EpicReads
        </div>
        
        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <Link to="/">
                <span className="icon">🏠</span> Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/category">
                <span className="icon">📚</span> Category
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/library">
                <span className="icon">📖</span> My Library
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/favourite">
                <span className="icon">❤️</span> Favourite
              </Link>
            </li>
          </ul>
        </nav>

        {/* Separator Line */}
        <div className="separator-line"></div>

        {/* Settings Menu */}
        <nav className="settings-menu">
          <ul>
            <li>
              <Link to="/settings"> {/* Ensure path is lowercase and matches App.js */}
                <span className="icon">⚙️</span> Settings
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">
                <span className="icon">ℹ️</span> About
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/logout">
                <span className="icon">🚪</span> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ReHeader;
