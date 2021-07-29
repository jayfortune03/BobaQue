const express = require(`express`)
const MenuController = require("../controllers/menuController")
const AdminController = require(`../controllers/adminController.js`)
const router = express.Router()

router.get('/addTopping/:id', checkIsLogin, MenuController.showAddTopping)
router.post('/addTopping/:id', checkIsLogin, MenuController.createMenuTopping)
router.get('/removeTopping/:menuId/:toppingId', checkIsLogin, MenuController.destroyMenuTopping)


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
