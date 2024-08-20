// src/components/Book.js
import React, { useState } from 'react';
import ReHeader from './ReHeader'; // Import ReHeader component

const Book = () => {
  // Sample data for the selected book and other books
  const selectedBook = {
    title: 'A Thousand Letters',
    author: 'Staci Hart',
    description: 'Dive into "A Thousand Letters," a touching romance about Elliott and Wade, who reunite after seven years apart. This novel explores love, loss, and second chances in a modern twist on a classic tale.',
    coverImage: 'https://example.com/a-thousand-letters.jpg', // Replace with the actual path to the image
  };

  const otherBooks = [
    { title: 'The Songs You\'ve Never Heard', coverImage: 'https://example.com/image-1.jpg' },
    { title: 'Dungeons and Drama', coverImage: 'https://example.com/image-2.jpg' },
    { title: 'Love Letters for Joy', coverImage: 'https://example.com/image-3.jpg' },
    { title: 'Boarded Hearts', coverImage: 'https://example.com/image-4.jpg' },
    { title: 'XOXO', coverImage: 'https://example.com/image-5.jpg' },
  ];

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Logic to add or remove from the favorite list can go here
  };

  return (
    <div>
      <ReHeader /> {/* Include ReHeader component */}
      <div style={styles.pageContainer}>
        <div style={styles.selectedBookContainer}>
          <img src={selectedBook.coverImage} alt={selectedBook.title} style={styles.bookImage} />
          <div style={styles.bookInfo}>
            <h2 style={styles.bookTitle}>{selectedBook.title}</h2>
            <h3 style={styles.bookAuthor}>Author: {selectedBook.author}</h3>
            <p style={styles.bookDescription}>{selectedBook.description}</p>
            <div style={styles.iconContainer}>
              <button onClick={toggleFavorite} style={styles.iconButton}>
                <span style={{ color: isFavorite ? 'red' : 'black' }}>❤️</span> {/* Heart icon */}
              </button>
              <button style={styles.iconButton}>⬇️</button> {/* Download icon */}
              <button style={styles.iconButton}>🔄</button> {/* Share icon */}
            </div>
          </div>
        </div>

        <div style={styles.otherBooksContainer}>
          {otherBooks.map((book, index) => (
            <img key={index} src={book.coverImage} alt={book.title} style={styles.otherBookImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#A1DAD7', // Match background color
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: '#A1DAD7',
    padding: '10px',
    borderRadius: '10px',
    width: '83%',
    marginLeft: '20%',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  selectedBookContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  bookImage: {
    width: '150px',
    height: 'auto',
    marginRight: '20px',
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  bookTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  bookAuthor: {
    fontSize: '18px',
    margin: '0 0 10px 0',
  },
  bookDescription: {
    fontSize: '16px',
    margin: '0 0 20px 0',
  },
  iconContainer: {
    display: 'flex',
    gap: '10px',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },
  otherBooksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  otherBookImage: {
    width: '100px',
    height: 'auto',
    cursor: 'pointer',
  },
};

export default Book;
