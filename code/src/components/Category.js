import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReHeader from './ReHeader'; // Import ReHeader component

const categories = [
  {
    title: 'Fiction',
    imageUrl: 'https://example.com/fiction.jpg', // Replace with actual image URL
  },
  {
    title: 'Non-Fiction',
    imageUrl: 'https://example.com/non-fiction.jpg', // Replace with actual image URL
  },
  {
    title: 'Science Fiction',
    imageUrl: 'https://example.com/science-fiction.jpg', // Replace with actual image URL
  },
  {
    title: 'Fantasy',
    imageUrl: 'https://example.com/fantasy.jpg', // Replace with actual image URL
  },
  {
    title: 'Biography',
    imageUrl: 'https://example.com/biography.jpg', // Replace with actual image URL
  },
  // Add more categories as needed
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (title) => {
    navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div style={styles.container}>
      <ReHeader /> {/* Include ReHeader in your component */}
      <h1 style={styles.heading}>Book Categories</h1>
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={styles.categoryCard}
            onClick={() => handleCategoryClick(category.title)}
          >
            <img src={category.imageUrl} alt={category.title} style={styles.categoryImage} />
            <h2 style={styles.categoryTitle}>{category.title}</h2>
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
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center', // Center-align the category cards
  },
  categoryCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#fff', // White background for category cards
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow for depth
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth transition
    cursor: 'pointer',
  },
  categoryCardHover: {
    transform: 'scale(1.05)', // Slightly enlarge on hover
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)', // Darker shadow on hover
  },
  categoryImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  categoryTitle: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0',
  },
};

export default Category;
