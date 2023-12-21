const express = require("express");
const router = express.Router();
const submitFeedback = require("../Controllers/feedbackControllers");
const { feedbackCreateSchema } = require("../Models/feedbackModels");
const validate = require("../middlewares/Validations");

router.post("/", validate(feedbackCreateSchema), submitFeedback);

module.exports = router;
