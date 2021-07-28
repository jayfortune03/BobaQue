const express = require(`express`)
const router = express.Router()
const register = require(`./register.js`)
const homepage = require(`./homepage.js`)
const login = require(`./login.js`)

router.use(`/`, homepage)
router.use(`/register`, register)
router.use(`/login`, login)


module.exports = router