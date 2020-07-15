module.exports = app => {
  const menu = require("../controllers/menu.controller.js");
  const router = require("express").Router();

  router.post("/", menu.create);
  router.get("/", menu.findAll);
  router.put("/:id", menu.update);
  router.delete("/:id", menu.delete);

  app.use('/api/menu', router);
};
