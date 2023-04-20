//make a router for the main page and export it
const express = require("express");
const router = express.Router();
const Admin = require("../../models/admin");

router.get("/", async (req, res) => {
  //search for the user in the database and populate the user's data
  if (req.user) {
    const admin = await Admin.findOne({ userId: req.user._id }).populate(
      "groups"
    );

    console.log(admin);
    res.render("main/mainpage", { admin });
  } else {
    res.render("main/mainpage", { user: null });
  }
});

module.exports = router;
