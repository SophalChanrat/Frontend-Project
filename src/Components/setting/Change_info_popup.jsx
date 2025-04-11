import React from 'react';
import "./setting.css"

export const Change_info_popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={(e) => e.target.className === 'popup-overlay' && onClose()}>
      <div className="popup-box">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted!");
          onClose(); // close popup after submit
        }}>
          <label>Username</label>
          <input type="text" placeholder="Spider Man CADT" required />

          <label>Password</label>
          <input type="password" placeholder="Password" required />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

