const express = require("express");
const router = express.Router();
const Publicacion = require("../../models/publications");
// const Group = require("../../models/groups");
// const Admin = require("../../models/admin");

//get all the activities
router.get("/publicaciones", function (req, res, next) {
  // Publicacion.find(function (err, ) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json(actividades);
  // });
});

//get a single activity
router.get("/publicacion", function (req, res, next) {
  res.render("main/publicaciones/publicacionConId");
});

//create a new activity

//make a get router for new  activities
router.get("/:id/publicacion/new", function (req, res, next) {
  const groupId = req.params.id;

  res.render("main/publicaciones/Nuevapublicacion", { groupId });
});

router.post("/:id/publicacion/new", async function (req, res, next) {
  const groupId = req.params.id;

  const publicacion = new Publicacion({
    title: req.body.title,
    description: req.body.content,
    date: req.body.date,
    time: req.body.time,
    location: req.body.localizacion,
  });
  publicacion.group = groupId;

  publicacion.save();
  res.send(publicacion);
});

module.exports = router;
