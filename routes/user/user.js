//create an express router that shows the user's profile
const express = require("express");
const router = express.Router();
const Admin = require("../../models/admin");

router.get("/profile", (req, res) => {
  res.render("main/userPage/userPage");
});

module.exports = router;
