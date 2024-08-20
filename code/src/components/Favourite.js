import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReHeader from './ReHeader'; // Import ReHeader component

const books = [
  {
    title: 'To Kill a Mockingbird',
    imageUrl: 'https://example.com/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    imageUrl: 'https://example.com/1984.jpg'
  },
  // Add more books as needed
];

const Favourite = () => {
  const navigate = useNavigate();

  const handleBookClick = (title) => {
    navigate(`/book/${encodeURIComponent(title)}`);
  };

  return (
    <div style={styles.container}>
      <ReHeader /> {/* Include ReHeader in your component */}
      <h1 style={styles.heading}>Our Book Collection</h1>
      <div style={styles.booksContainer}>
        {books.map((book, index) => (
          <div
            key={index}
            style={styles.bookCard}
            onClick={() => handleBookClick(book.title)}
          >
            <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
            <h2 style={styles.bookTitle}>{book.title}</h2>
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
    cursor: 'pointer',
  },
  bookCardHover: {
    transform: 'scale(1.05)', // Slightly enlarge on hover
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)', // Darker shadow on hover
  },
  bookImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  bookTitle: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0',
  },
};

export default Favourite;
