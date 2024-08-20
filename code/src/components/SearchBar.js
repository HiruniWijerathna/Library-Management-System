import React from "react";
import headerImage from "../image/header2.jpg"; // Ensure the image path is correct

const SearchBar = ({ userName }) => {
  return (
    <div style={styles.navbar}>
      <input
        type="text"
        placeholder="Search your favourite books"
        style={styles.searchInput}
      />
      <div style={styles.userIcon}>
        <span role="img" aria-label="User Icon">
          &#128100;
        </span>
        <span>{userName}</span>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: " #d1f9f1",
    padding: "20px", // Adjust padding to fit content
    borderBottom: "2px solid black",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover", // Cover the entire area of the navbar
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Ensure the image does not repeat
    height: "60px", // Adjust height as needed
    position: "fixed", // Fix the position to the top
    top: "0", // Align to the top of the viewport
    left: "17%", // Align to the left of the viewport
    width: "83%", // Span the entire width of the viewport
    zIndex: 1000, // Ensure it stays above other content
  },
  searchInput: {
    flex: 1,
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#d1f9f1",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  userIcon: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    marginRight: "5%",
  },
};

export default SearchBar;
