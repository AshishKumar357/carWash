const yup = require("yup");

const userCreateSchema = yup.object({
  // add any field with respective validations
  // to add custom error messages,
  firstname: yup.string(50).required(),
  lastname: yup.string(50).required(),
  email: yup.string().email().required(),
  gender: yup
    .string()
    .max(1, "Write M/F/O for male, female and others respectively"),
  phonenum: yup.number().integer().positive().required(),
});

const userUpdateSchema = yup.object({
  firstname: yup.string(),
  lastname: yup.string(),
  email: yup.string().email(),
  //gender with regex to accept only M/F/O
  gender: yup
    .string()
    .max(1, "Write M/F/O for male, female and others respectively")
    .matches(/^[MFO]$/, "Write M/F/O for male, female and others respectively"),
  phonenum: yup.number().integer().positive().max(9999999999),
});

module.exports = { userCreateSchema, userUpdateSchema };
