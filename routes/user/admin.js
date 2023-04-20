//create a router for admin
const express = require("express");
const router = express.Router();
const Admin = require("../../models/admin");
const User = require("../../models/user");

router.post("/admin/:id", async (req, res) => {
  const { id } = req.params;

  //find the user model and update the admin field
  const user = await User.findById(id);
  user.isAdmin = true;
  user.save();
  //   const newAdmin = new Admin({ userId: id });
  //save the new admin
  //   newAdmin.save();
  res.redirect("main/userPage/userPage");
});

module.exports = router;
