const express = require(`express`)
const router = express.Router()
const HomeController = require(`../controllers/homeController.js`)

router.get(`/`, checkIsLogin, HomeController.viewPage)

function checkIsLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect(`/login`)
    }
}


module.exports = router