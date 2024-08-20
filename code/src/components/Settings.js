import React, { useState } from 'react';
import ReHeader from './ReHeader';  // Import the ReHeader component

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleProfilePicUpload = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };

  const handleProfilePicRemove = () => {
    setProfilePic(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Account details updated successfully.');
    // Add logic to save the settings here
  };

  return (
    <div style={styles.pageContainer}>
      <ReHeader /> {/* Include the ReHeader component */}

      <div style={styles.container}>
        <h2 style={styles.header}>ACCOUNT SETTINGS</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.profileContainer}>
            <div style={styles.profilePic}>
              {!profilePic && (
                <i className="fas fa-user-circle" style={styles.profileIcon}></i>
              )}
              {profilePic ? (
                <img src={profilePic} alt="Profile" style={styles.profileImg} />
              ) : (
                <div style={styles.emptyProfile}></div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="upload"
              style={styles.fileInput}
              onChange={handleProfilePicUpload}
            />
            <label htmlFor="upload" style={styles.uploadBtn}>Upload</label>
            <button type="button" onClick={handleProfilePicRemove} style={styles.removeBtn}>Remove</button>
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.label}>Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.deleteAccount}>
            <button type="button" onClick={() => alert('Account deletion logic goes here')} style={styles.deleteBtn}>
              Delete Account ...
            </button>
          </div>

          <button type="submit" style={styles.saveBtn}>Save Changes</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#A1DAD7', // Background color for the entire page
    minHeight: '100vh', // Ensure it covers the full viewport height
    padding: '20px'
  },
  container: {
    backgroundColor: '#A1DAD7',
    padding: '10px',
    borderRadius: '10px',
    width: '75%',
    marginLeft: '21%',
    marginTop: '150px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '20px',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  profilePic: {
    marginRight: '10px',
    position: 'relative'
  },
  profileIcon: {
    fontSize: '100px',
    color: '#ccc',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  profileImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%'
  },
  emptyProfile: {
    width: '100px',
    height: '100px',
    backgroundColor: '#FFF',
    borderRadius: '50%'
  },
  fileInput: {
    display: 'none'
  },
  uploadBtn: {
    backgroundColor: '#FFF',
    padding: '5px 10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px'
  },
  removeBtn: {
    backgroundColor: '#FFF',
    padding: '5px 10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  inputContainer: {
    marginBottom: '15px'
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px'
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '97%'
  },
  deleteAccount: {
    marginBottom: '15px',
    textAlign: 'right'
  },
  deleteBtn: {
    color: '#D34E4E',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px'
  },
  saveBtn: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#1F8475',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Settings;
