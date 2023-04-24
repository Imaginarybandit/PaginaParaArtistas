const express = require("express");
const router = express.Router();
const Publicacion = require("../../models/publications");
const Group = require("../../models/groups");
// const Admin = require("../../models/admin");

//get a single activity
router.get("/publicacion", function (req, res, next) {
  res.render("main/publicaciones/publicacionConId");
});

//create a new activity

//make a get router for new  activities
router.get("/publicacion/:id", async function (req, res, next) {
  //find a publication by id

  const publicacion = await Publicacion.findById(req.params.id).populate(
    "group"
  );

  res.render("main/publicaciones/publicacionConId", { publicacion });
});

//make a get router for new publicacion
router.get("/:id/publicacion/new", async function (req, res, next) {
  const groupId = req.params.id;
  res.render("main/publicaciones/Nuevapublicacion", { groupId });
});

router.post("/:id/publicacion/new", async function (req, res, next) {
  const groupId = req.params.id;

  const group = await Group.findById(groupId);

  const publicacion = new Publicacion({
    title: req.body.title,
    description: req.body.content,
    date: req.body.date,
    time: req.body.time,
    location: req.body.localizacion,
  });
  publicacion.group = groupId;

  publicacion.save();

  group.publications.push(publicacion._id);

  group.save();

  res.redirect(`/publicacion/${publicacion._id}`);
});

module.exports = router;
