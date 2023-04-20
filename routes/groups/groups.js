const express = require("express");
const router = express.Router();
const Group = require("../../models/groups");
const User = require("../../models/user");
const Admin = require("../../models/admin");
const { isLoggedIn } = require("../../utils/IsLoggedIn");

router.get("/pop", async (req, res) => {
  //find user by name
  const user = await User.findOne({ name: "Angelica" });
  //create a new admin
  const admin = new Admin({ userId: user._id });

  admin.save();
  res.send(admin);
});

router.get("/groups", async (req, res) => {
  //const groups = await Group.find({});
  res.render("main/groups/searchGroup");
});

router.get("/groups/new", isLoggedIn, (req, res) => {
  res.render("main/groups/createGroup");
});

router.post("/groups", async (req, res) => {
  const { groupName, groupDescription, website } = req.body;

  const admin = await Admin.findOne({ userId: req.user._id });

  const group = new Group({
    name: groupName,
    description: groupDescription,
    website: website,
    admin: admin._id,
  });

  await group.save();

  admin.groups.push(group._id);
  await admin.save();

  res.redirect(`/groups/${group._id}`);
});

router.get("/groups/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const admin = await Admin.findOne({ userId: req.user._id }).populate(
      "groups"
    );
    const group = await Group.findById(id).populate("admin");

    res.render("main/groups/showGroup", { group, admin });
  }
  //find group by id
});

module.exports = router;
