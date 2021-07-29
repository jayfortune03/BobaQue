const express = require(`express`)
const router = express.Router()
const OrderController = require(`../controllers/orderController.js`)

router.get(`/`, checkIsLogin, OrderController.viewOrder)
router.get(`/checkout/:id/:price`, checkIsLogin, OrderController.postOrder)

function checkIsLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect(`/login`)
    }
}

module.exports = router