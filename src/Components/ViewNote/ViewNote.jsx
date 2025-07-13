import React, { useState, useEffect } from "react";
import "./ViewNote.scss";
import CloseIcon from "../../assets/closeIcon.svg";

const ViewNote = ({ note, setViewNote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (note) {
      setIsVisible(true);
    }
  }, [note]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setViewNote(false);
    }, 300); // Match this duration with the CSS transition duration
  };

  if (!note) {
    return null;
  }

  console.log("Viewing note:", note);
  return (
    <div
      className={`viewScreen ${isVisible ? "is-visible" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`viewNoteContainer ${isVisible ? "is-visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="viewNoteHeader">
          <button className="closeButton" onClick={handleClose}>
            <img src={CloseIcon} alt="" />
          </button>
        </div>
        <div className="viewNoteContent">
          <h2>{note?.title || "Untitled Note"}</h2>
          <p>{note?.content || "No content available."}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
