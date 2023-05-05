const express = require("express");
const router = express.Router();
const Group = require("../../models/groups");
const User = require("../../models/user");
const Admin = require("../../models/admin");
const { isLoggedIn } = require("../../utils/IsLoggedIn");
const multer = require("multer");
const { storage } = require("../../cloudinary");

const upload = multer({ storage: storage });

router.get("/groups", async (req, res) => {
  //const groups = await Group.find({});
  res.render("main/groups/searchGroup");
});

router.get("/groups/new", isLoggedIn, (req, res) => {
  res.render("main/groups/createGroup");
});

router.post("/groups", upload.single("groupImage"), async (req, res) => {
  const { groupName, groupDescription, website } = req.body;
  const filename = req.file.filename;
  const url = req.file.path;
  const admin = await Admin.findOne({ userId: req.user._id });

  const group = new Group({
    name: groupName,
    description: groupDescription,
    website: website,
    admin: admin._id,
    posterimage: {
      url: url,
      filename: filename,
    },
  });

  await group.save();

  admin.groups.push(group._id);
  await admin.save();
  console.log(group);
  res.redirect(`/groups/${group._id}`);
  console.log(req.file, req.body);
});

router.get("/groups/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const admin = await Admin.findOne({ userId: req.user._id }).populate(
      "groups"
    );

    const group = await Group.findById(id)
      .populate("admin")
      .populate("publications");

    res.render("main/groups/showGroup", { group, admin });
  }
  //find group by id
});

module.exports = router;
