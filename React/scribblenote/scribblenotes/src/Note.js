import React from "react";
import "./Note.css";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <h1 className="note-text">{note.header}</h1>
      <p className="note-text">{note.text}</p>
      <div className="note-footer">
        <small className="timestamp">{note.timestamp}</small>
        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
