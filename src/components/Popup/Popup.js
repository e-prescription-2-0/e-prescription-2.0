import React, { useState } from "react";
import "./Popup.css";

export const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>
            <h2>Login/Register</h2>
            {/* Add your popup content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
