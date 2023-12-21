// create an address model schema using yup
const yup = require("yup");

const addressUpdateSchema = yup.object({
  userid: yup.number().integer().positive().required(),
  name: yup.string(),
  first_loa: yup.string(),
  second_loa: yup.string(),
  city: yup.string(),
  state: yup.string(),
  country: yup.string(),
  pincode: yup.number().integer().positive(),
  address_type: yup.string(),
});

const addressCreateSchema = yup.object({
  userid: yup.number().integer().positive().required(),
  name: yup.string(),
  first_loa: yup.string().required(),
  second_loa: yup.string(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  pincode: yup.number().integer().positive().required(),
  address_type: yup.string().required(),
});

module.exports = { addressCreateSchema, addressUpdateSchema };
