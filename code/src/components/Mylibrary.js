// Mylibrary.js
import React, { useState } from 'react';
import ReHeader from './ReHeader'; // Ensure this path is correct

const Mylibrary = () => {
  const [myBooks, setMyBooks] = useState([
    {
      title: 'The Great Gatsby',
      imageUrl: 'https://example.com/the-great-gatsby.jpg', // Replace with actual image URL
    },
    {
      title: 'Moby Dick',
      imageUrl: 'https://example.com/moby-dick.jpg', // Replace with actual image URL
    },
    {
      title: 'Pride and Prejudice',
      imageUrl: 'https://example.com/pride-and-prejudice.jpg', // Replace with actual image URL
    },
    {
      title: 'To Kill a Mockingbird',
      imageUrl: 'https://example.com/to-kill-a-mockingbird.jpg', // Replace with actual image URL
    },
    // Add more books as needed
  ]);

  const handleRemoveBook = (title) => {
    setMyBooks(myBooks.filter((book) => book.title !== title));
  };

  return (
    <div style={styles.container}>
      <ReHeader /> {/* Include ReHeader in your component */}
      <h1 style={styles.heading}>My Library</h1>
      <div style={styles.booksContainer}>
        {myBooks.map((book, index) => (
          <div key={index} style={styles.bookCard}>
            <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
            <h2 style={styles.bookTitle}>{book.title}</h2>
            <button
              onClick={() => handleRemoveBook(book.title)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#F5F5F5', // Light gray background
    padding: '20px',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#333', // Darker text color for better readability
    marginBottom: '20px',
    fontSize: '2rem',
  },
  booksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center', // Center-align the book cards
  },
  bookCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#fff', // White background for book cards
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow for depth
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth transition
  },
  bookImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  bookTitle: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0 0 10px 0',
  },
  removeButton: {
    backgroundColor: '#ff4d4d', // Red background for remove button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease',
  },
  removeButtonHover: {
    backgroundColor: '#cc0000', // Darker red on hover
  },
};

export default Mylibrary;
