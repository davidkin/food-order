const db = require("../models");
const Menu = db.menu;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!", status: res.statusCode });
    return;
  }

  const menu = new Menu({
    title: req.body.title,
    description: req.body.description,
    updates: req.body.updates,
  });

  menu
    .save(menu)
    .then(data => {
      res.status(201).send({ data, status: res.statusCode });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Menu.",
          status: res.statusCode
      });
    });
};

exports.findAll = (req, res) => {
  Menu.find({})
    .then(data => {
      res.status(200).send({ data, status: res.statusCode });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving menu.",
          status: res.statusCode
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
      status: res.statusCode
    });
  }

  const id = req.params.id;

  Menu.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update recipe with id=${id}. Maybe recipe was not found!`,
          status: res.statusCode
        });
      } else res.status(200).send({ status: res.statusCode, message: "Recipe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating recipe with id=" + id,
        status: res.statusCode
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Menu.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete recipe with id=${id}. Maybe recipe was not found!`,
          status: res.statusCode
        });
      } else {
        res.status(200).send({
          message: "Recipe was deleted successfully!",
          status: res.statusCode
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete recipe with id=" + id,
        status: res.statusCode
      });
    });
};
