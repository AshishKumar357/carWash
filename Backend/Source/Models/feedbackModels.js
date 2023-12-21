const yup = require("yup");

const feedbackCreateSchema = yup.object({
  score: yup
    .number()
    .integer()
    .min(1, "Score must be at least 1")
    .max(5, "Score must be at most 5")
    .required(),
  comment: yup.string().required(),
  userid: yup.number().integer().positive().required(),
});

module.exports = { feedbackCreateSchema };