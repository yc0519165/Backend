const { singup, login } = require('../Controllers/AuthController')
const { singupValidation, loginVlidation } = require('../Middlewares/AuthValidation')

const route = require('express').Router()

route.post("/login", loginVlidation, login)
route.post("/singup", singupValidation, singup)

module.exports = route