const router = require("express").Router();
const { Post } = require("../models/Post");

// Adding note to the database
router.post("/add", (req, res) => {
  const post = new Post(req.body);
  post.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// getting all notes from database
router.get("/", (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, posts: posts });
  });
});

// updating a note using id
router.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

// deleting a note using id
router.delete("/delete/:id", (req, res)=> {
    Post.findByIdAndRemove(req.params.id).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json(deleteItem);
    })
})

module.exports = router;
