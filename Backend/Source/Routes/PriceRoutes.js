const express = require("express");
const router = express.Router();
const db = require("../Controllers/pricingControllers");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const priceValidation = require("../middlewares/Validations");
const {
  priceCreateSchema,
  priceUpdateSchema,
} = require("../Models/PriceModels");

router.get("/", db.getAllPrice);
router.get("/:id", db.getPriceById);
router.get("/:serviceType/:subDuration", db.getPriceByValue);
router.post(
  "/create",
  priceValidation(priceCreateSchema),
  urlencodedParser,
  db.createPrice
);
router.put(
  "/update/:id",
  priceValidation(priceUpdateSchema),
  urlencodedParser,
  db.updatePrice
);

module.exports = router;
