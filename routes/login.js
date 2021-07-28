const express = require(`express`)
const router = express.Router()
const LoginController = require(`../controllers/loginController.js`)

router.get(`/`, LoginController.viewLoginForm)
router.post(`/`, LoginController.postLogin)


module.exports = router