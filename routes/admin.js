const express = require(`express`)
const router = express.Router()
const AdminController = require(`../controllers/adminController.js`)

router.get(`/`, checkIsLogin, checkIsAdmin, AdminController.viewPageAdmin)
router.get(`/addMenu`, checkIsLogin, checkIsAdmin, AdminController.viewAddMenuForm)
router.post(`/addMenu`, checkIsLogin, checkIsAdmin, AdminController.addMenu)
router.get(`/addTopping`, checkIsLogin, checkIsAdmin, AdminController.viewAddToppingForm)
router.post(`/addTopping`, checkIsLogin, checkIsAdmin, AdminController.addTopping)

function checkIsLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect(`/login`)
    }
}

function checkIsAdmin(req, res, next) {
    if (req.session.isAdmin) {
        next()
    } else {
        res.redirect(`/`)
    }
}


module.exports = router