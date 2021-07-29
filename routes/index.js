const express = require(`express`)
const router = express.Router()
const register = require(`./register.js`)
const homepage = require(`./homepage.js`)
const login = require(`./login.js`)
const logout = require(`./logout.js`)
const order = require(`./order.js`)

router.use(`/`, homepage)
router.use(`/register`, register)
router.use(`/login`, login)
router.use(`/logout`, logout)
router.use(`/orders`, order)


module.exports = router