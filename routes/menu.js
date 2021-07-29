const express = require(`express`)
const router = express.Router()
const AdminController = require(`../controllers/adminController.js`)

router.get(`/edit/:id`, checkIsLogin, checkIsAdmin, AdminController.editMenuForm)
router.post(`/edit/:id`, checkIsLogin, checkIsAdmin, AdminController.editMenu)
router.get(`/delete/:id`, checkIsLogin, checkIsAdmin, AdminController.deleteMenu)

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