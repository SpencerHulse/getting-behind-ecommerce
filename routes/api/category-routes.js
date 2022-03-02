const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// All Categories with associated Products
router.get("/", (req, res) => {
  Category.findAll({ include: { model: Product } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Single Category with associated Products
router.get("/:id", (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: { model: Product },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
