const express = require("express");
const router = express.Router();
const Actividad = require("../../models/publications");

//get all the activities
router.get("/publicaciones", function (req, res, next) {
  Actividad.find(function (err, actividades) {
    if (err) {
      return next(err);
    }
    res.json(actividades);
  });
});

//get a single activity
router.get("/publicacion", function (req, res, next) {
  res.render("main/publicaciones/publicacionConId");
});

//create a new activity

//make a get router for new  activities
router.get("/publicacion/new", function (req, res, next) {
  res.render("main/publicaciones/Nuevapublicacion");
});

router.post("/", function (req, res, next) {
  var actividad = new Actividad(req.body);
  actividad.save(function (err, actividad) {
    if (err) {
      return next(err);
    }
    res.json(actividad);
  });
});

module.exports = router;
