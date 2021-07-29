const express = require(`express`)
const router = express.Router()
const LoginController = require(`../controllers/loginController.js`)

router.get(`/`, checkIsLogin, LoginController.logout)

function checkIsLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect(`/login`)
    }
}

module.exports = router