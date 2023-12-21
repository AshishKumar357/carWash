const validation = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
  } catch (error) {
    if (!res.headersSent) {
      return res.status(400).json(error);
    }
  }
};

module.exports = validation;
