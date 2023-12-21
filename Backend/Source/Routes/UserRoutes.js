const express = require("express");
const router = express.Router();
const db = require("../Controllers/userControllers");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const uservalidation = require("../middlewares/Validations");
const { userCreateSchema, userUpdateSchema } = require("../Models/UserModels");

router.get("/", db.getUsers);
router.get("/:id", db.getUserById);
router.post(
  "/",
  uservalidation(userCreateSchema),
  urlencodedParser,
  db.createUser
);
router.put(
  "/:id",
  uservalidation(userUpdateSchema),
  urlencodedParser,
  db.updateUser
);

module.exports = router;
