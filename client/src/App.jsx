import React, { useEffect, useState } from "react";
import "./App.css";
import Plusicon from "./assets/plus-icon.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleFetchNotes();
  }, []);
  const handleFetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data.posts);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const navigateTo = useNavigate();
  const handleClick = (data) => {
    navigateTo("/newNote", {
      state: {
        title: data.title,
        description: data.description,
        id: data._id,
        isNew: false,
      },
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="logo">Note It Up</h1>
        <div className="sideHeader">
          <Link
            to="/newNote"
            state={{
              title: "herll",
              description: "<p>text here</p>",
              id: "",
              isNew: true,
            }}
          >
            <p className="headerItem">New Note +</p>
          </Link>
          <p className="headerItem">Archives</p>
          <p className="headerItem">Trash</p>
        </div>
      </div>
      <div className="notesContainer">
        {data.map((item, index) => (
          <motion.div
            className="noteCard"
            whileHover={{
              scale: 1.05,
            }}
            id={index}
            onClick={() => {
              handleClick(item);
            }}
          >
            <h1 className="titleCard">{item.title}</h1>
            <p className="contentCard">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
