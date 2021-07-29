const express = require(`express`)
const router = express.Router()
const register = require(`./register.js`)
const homepage = require(`./homepage.js`)
const login = require(`./login.js`)
const logout = require(`./logout.js`)
const order = require(`./order.js`)
const menu = require(`./menu.js`)

router.use(`/`, homepage)
router.use(`/register`, register)
router.use(`/login`, login)
router.use(`/logout`, logout)
router.use(`/orders`, order)
router.use(`/menu`, menu)


module.exports = router