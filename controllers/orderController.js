const { Menu, Topping, User } = require('../models')

class OrderController {
    static viewOrder(req, res) {
        res.render(`order`)
    }
}

module.exports = OrderController