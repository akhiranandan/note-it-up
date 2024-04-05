import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./assets/n logo.jpeg";
import Button from "@mui/material/Button";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleFetchNotes();
  }, []);
  const handleFetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data.posts);
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
  const colors = [
    "#D9EDF8",
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#DEDAF4",
    "#C9E4DE",
    "#F2C6DE",
  ];
  const getColor = (index) => colors[index % colors.length];
  return (
    <div className="App">
    {/* HEADER IN HOME PAGE */}
      <div className="header">
        <h1 className="logo">Note It Up</h1>
        <img src={Logo} className="nLogo" />
        <div className="sideHeader">
        {/* BUTTON FOR NEW NOTE */}
          <Link
            to="/newNote"
            state={{
              title: "",
              description: "<p></p>",
              id: "",
              isNew: true,
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button variant="contained" className="newNoteButton">
              New Note +
            </Button>
          </Link>
        </div>
      </div>
      {/* NOTES CONTAINER */}
      <div className="notesContainer">
        {data.map((item, index) => (
          <motion.div
            className="noteCard"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px black",
            }}
            id={index}
            style={{ backgroundColor: getColor(index) }}
            onClick={() => {
              handleClick(item);
            }}
          >
            <h1 className="cardTitle">{item.title}</h1>
            <p className="cardText" dangerouslySetInnerHTML={{__html:item.description}}></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
