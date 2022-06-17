import Joi from "joi";

export const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).max(30).required(),
    lastName: Joi.string().min(1).max(30).required(),
    occupationId: Joi.string().required(),
    email: Joi.string().email().required(),
    profileImage: Joi.string(),
    phoneNumber: Joi.number().required(),
    images: Joi.array(),
    categoryId: Joi.string().required(),
    description: Joi.string().required().max(300),
    postalCode: Joi.string().required(),
    city: Joi.string().required(),
    location: Joi.object(),
    hourlyRate: Joi.number().integer(),
    workRange: Joi.number().integer(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const validation = schema.validate(data);
  return validation;
};

export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const validation = schema.validate(data);
  return validation;
};
