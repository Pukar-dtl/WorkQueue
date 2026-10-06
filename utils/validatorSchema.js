import joi from "joi";

const schema = joi.object({
  name: joi.string().alphanum().min(3).max(15).required(),
  email: joi.email().required(),
  role: joi.string(),
  password: joi.string().min(7)
});

export default schema;
