import React from 'react';
import ReHeader from './ReHeader';  // Assuming you have a ReHeader component

const About = () => {
  return (
    <div style={styles.pageContainer}>
      <ReHeader /> {/* Include the ReHeader component */}
      
      <div style={styles.container}>
        <h2 style={styles.header}>About Us</h2>
        
        <p style={styles.text}>
          Welcome to our application! We are dedicated to providing the best services to our users.
          Our platform is designed with simplicity and functionality in mind, allowing you to focus
          on what matters most.
        </p>

        <div style={styles.section}>
          <h3 style={styles.subHeader}>Our Mission</h3>
          <p style={styles.text}>
            Our mission is to empower users by offering a robust and intuitive platform that enhances
            their daily activities. We believe in the power of technology to transform lives, and we
            strive to make that transformation as seamless and enjoyable as possible.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subHeader}>Our Vision</h3>
          <p style={styles.text}>
            We envision a world where technology bridges the gap between complexity and simplicity,
            enabling everyone to achieve their goals with ease. Our vision is to be at the forefront
            of this revolution, continuously innovating and improving our services.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subHeader}>Our Team</h3>
          <p style={styles.text}>
            Our team is composed of passionate individuals who are experts in their respective fields.
            We work together to bring you the best experience possible, from user interface design to
            backend functionality. We are here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#A1DAD7', // Light background color for the entire page
    minHeight: '100vh', // Ensure it covers the full viewport height
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    backgroundColor: '#A1DAD7',
    padding: '10px',
    borderRadius: '10px',
    width: '75%',
    marginLeft: '21%',
    marginTop: '110px',
    fontFamily: 'Arial, sans-serif',
   
  },
  header: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  section: {
    marginBottom: '30px',
  },
  subHeader: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#444',
  },
};

export default About;
