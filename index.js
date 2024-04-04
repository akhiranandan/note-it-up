const express = require("express");
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")

mongoose.connect("mongodb+srv://akhira:JHj78aM22wkp-A$@cluster0.3pknttf.mongodb.net/note-details?retryWrites=true&w=majority&appName=Cluster0")

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts", require("./routes/route"))

app.get("/", (req, res)=> {
    res.send({Project:"Note It Up"})
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
// DB USER PASS - JHj78aM22wkp-A$