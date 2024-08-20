import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import ReHeader from './ReHeader';  // Import the ReHeader component

const Logout = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleConfirm = () => {
    navigate('/'); // Navigate to the Hero.js page
  };

  const handleCancel = () => {
    navigate('/home'); // Navigate to the Home.js page
  };

  return (
    <div style={styles.pageContainer}>
      <ReHeader /> {/* Include the ReHeader component at the top */}

      <div style={styles.dialogBox}>
        <p style={styles.text}>Are you sure you want to log out?</p>
        <div style={styles.buttonContainer}>
          <button onClick={handleConfirm} style={styles.confirmButton}>Confirm</button>
          <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    
    backgroundColor: '#A1DAD7',
    padding: '10px',
    borderRadius: '10px',
    width: '83%',
    marginLeft: '17%',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',

    
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',

  },
  dialogBox: {
    backgroundColor: '#C8E3E0', // Slightly lighter teal for the dialog box
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  text: {
    fontSize: '20px',
    marginBottom: '30px',
    color: '#000', // Dark text color
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#00796b', // Darker teal for the confirm button
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#00796b', // Darker teal for the cancel button
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Logout;
