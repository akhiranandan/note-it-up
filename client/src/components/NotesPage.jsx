import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "../App.css";

function NotesPage() {
  const location = useLocation();
  const { title, description, id, isNew } = location.state;
  const [notes, setNotes] = useState({
    title: title,
    description: description,
  });
  const handleSave = async () => {
    await axios.post("http://localhost:4000/posts/add", notes);
  };
  const handleUpdate = async (id) => {
    notes.title = inputValue;
    await axios.put(`http://localhost:4000/posts/update/${id}`, notes);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/posts/delete/${id}`, notes);
  };

  const handleTitle = (event) => {
    const temp = event.target.value;
    console.log(event.target.value);
    setNotes({ ...notes, title: temp });
  };
  const [inputValue, setInputValue] = useState(title);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="NotesPage">
      <div className="notesPageHeader">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button
          className="saveButton"
          onClick={() => {
            isNew ? handleSave() : handleUpdate(id);
          }}
        >
          Save
        </button>
        <button className="deleteButton" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
      <div className="ckEditor">
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          setNotes({ ...notes, description: editor.getData() });
          console.log(notes);
        }}
      />
      </div>
    </div>
  );
}

export default NotesPage;
