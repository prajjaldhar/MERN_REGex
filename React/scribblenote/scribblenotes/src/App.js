import React, { useState } from "react";
import NoteList from "./NoteList";
import "./App.css";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState({
    header: "",
    text: "",
  });

  const handleAddNote = () => {
    if (noteInput.text.trim() !== "") {
      const newNote = {
        id: Date.now(),//Output: A number representing the current timestamp in milliseconds
        header: noteInput.header,
        text: noteInput.text,
        timestamp: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
      setNoteInput({
        header: "",
        text: "",
      });
    }
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-app">
      <h1>Note Taking App</h1>
      <div className="note-input">
        <input
          type="text"
          value={noteInput.header}
          onChange={(e) =>
            setNoteInput({ ...noteInput, header: e.target.value })
          }
          placeholder="Enter note header..."
        />
        <textarea
          value={noteInput.text}
          onChange={(e) =>
            setNoteInput({ ...noteInput, text: e.target.value })
          }
          placeholder="Enter your note..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default NoteApp;
