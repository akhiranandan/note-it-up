import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NotesPage() {
  const location = useLocation();
  const navigateTo = useNavigate();
  const { title, description, id, isNew } = location.state;
  const [notes, setNotes] = useState({
    title: title,
    description: description,
  });
  const handleSave = async () => {
    notes.title = inputValue;
    await axios.post("http://localhost:4000/posts/add", notes);
    navigateTo("/");
  };
  const handleUpdate = async (id) => {
    notes.title = inputValue;
    await axios.put(`http://localhost:4000/posts/update/${id}`, notes);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/posts/delete/${id}`, notes);
    navigateTo("/");
  };
  const [inputValue, setInputValue] = useState(title);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="NotesPage">
      <div className="notesPageHeader">
        {/* TITLE TEXTFIELD */}
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="titleNote"
        />
        <div className="rightHeaderNotes">
          {/* SAVE BUTTON */}
          <Button
            variant="contained"
            className="saveButton"
            onClick={() => {
              isNew ? handleSave() : handleUpdate(id);
            }}
          >
            Save
          </Button>
          {/* DELETE BUTTON */}
          <Button
            variant="outlined"
            color="error"
            className="deleteButton"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </div>
      </div>
      {/* EDITOR AREA */}
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
