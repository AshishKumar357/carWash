const yup = require("yup");

const priceCreateSchema = yup.object({
  // to add custom error messages, write error inside brackets
  id: yup.number().integer().positive(),
  price: yup.number().integer().positive().required(),
  servicetype: yup.number().required(),
  servicetype_cd: yup.number(),
  subduration: yup.number().integer().positive().required(),
  subduration_cd: yup.number(),
  discounts: yup.number().integer(),
});

const priceUpdateSchema = yup.object({
  // to add custom error messages, write error inside brackets
  id: yup.number().integer().positive(),
  price: yup.number().integer().positive(),
  servicetype: yup.number().required(),
  servicetype_cd: yup.number(),
  subduration: yup.number().integer().positive(),
  subduration_cd: yup.number(),
  discounts: yup.number().integer(),
});

module.exports = { priceCreateSchema, priceUpdateSchema };
