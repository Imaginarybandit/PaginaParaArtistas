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
  res.render("main/publicaciones/Nuevapublicacion");
});

router.post("groups/:id/publicacion/new", async function (req, res, next) {
  const groupId = req.params.id;

  const { title, description, date, time, location } = req.body;
  const publicacion = new Publicacion({
    title: title,
    description: description,
    date: date,
    time: time,
    location: location,
  });
  publicacion.group = groupId;
  //save the publicacion object
  publicacion.save();
  res.send("Publicacion creada");
});

module.exports = router;
