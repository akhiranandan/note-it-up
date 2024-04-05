import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "../App.css";

function NotesPage() {
  const [notes, setNotes] = useState({ title: "", description: "" });
  const handleSave = async () => {
    await axios.post("http://localhost:4000/posts/add", notes);
  };
  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:4000/posts/update/${id}`, notes);
  };
  const location = useLocation()
  const { title, description, id, isNew } = location.state;

  return (
    <div className="NotesPage">
      <h2>{title}</h2>
      <input/>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          setNotes({ ...notes, description: editor.getData(), title: "xyz" });
          console.log(notes);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <button className="saveButton" onClick={()=>{isNew ? handleSave() : handleUpdate(id)}}>
        Save
      </button>
    </div>
  );
}

export default NotesPage;
