const Joi = require('joi')

const singupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(4).max(20)
  })
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({
      message:"Bad Request", error
    })
  }
  next()
}

const loginVlidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(4).max(20)
  })
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({
      message: "Bad Request",
      error
    })
  }
}

module.exports = {
  singupValidation,
  loginVlidation
}