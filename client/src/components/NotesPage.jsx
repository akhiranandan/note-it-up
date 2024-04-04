import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "../App.css";

function NotesPage() {
  const [data, setData] = useState("");
  const [notes, setNotes] = useState({"title": "", "description": ""})
  const handleSave = async () => {

    await axios.post("http://localhost:4000/posts/add", notes);
    console.log(data);
  }
    return (
      <div className="NotesPage">
        <h2>Title</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            setData(editor.getData());
            setNotes({...notes,'description':editor.getData(),'title':"xyz"})
            console.log(notes);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <button className="saveButton" onClick={handleSave}>Save</button>
      </div>
    );
}

export default NotesPage;
