import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserProvider'; // Import the useUser hook
import "./setting.css";

export const Change_info_popup = ({ isOpen, onClose }) => {
  const { user, updateUser } = useUser(); // Get user and updateUser from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username); // Set the initial username to the logged-in user
    }
  }, [user]); // Only run useEffect when the user changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (user && user.password === password) {
      // Update the username in the user object
      const updatedUser = { ...user, username: username };

      // Update the user both in the context and localStorage
      updateUser(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      
      setMessage("Username updated successfully!");
      onClose(); // Close the popup after successful submission
    } else {
      setMessage("Incorrect password. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={(e) => e.target.className === 'popup-overlay' && onClose()}>
      <div className="popup-box">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter new username"
            required
          />

          <label>Password (for validation)</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password to confirm"
            required
          />

          <button type="submit">SUBMIT</button>
          {message && <p>{message}</p>} {/* Display message after submission */}
        </form>
      </div>
    </div>
  );
};

