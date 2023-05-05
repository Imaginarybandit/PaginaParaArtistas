const groups = require("../../models/groups");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Gallery = require("../../models/gallery");

router.get("/upload", async (req, res) => {
  //const groups = await Group.find({});
  res.render("main/gallery/upload");
});

router.post("/upload", upload.array("image"), async (req, res) => {
  res.send(req.files);
});

module.exports = router;
