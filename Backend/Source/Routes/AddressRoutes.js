const express = require("express");
const db = require("../Controllers/addressControllers");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const addressValidation = require("../middlewares/Validations");
const {
  addressCreateSchema,
  addressUpdateSchema,
} = require("../Models/addressModels");

router.get("/:userid", db.getAllAddress);
router.get("/:userid/:address_type", db.getAnAddress);
router.post(
  "/create",
  addressValidation(addressCreateSchema),
  urlencodedParser,
  db.createAddressLink
);
router.put(
  "/update/:id",
  addressValidation(addressUpdateSchema),
  urlencodedParser,
  db.updateAddress
);

module.exports = router;
