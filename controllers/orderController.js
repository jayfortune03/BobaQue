const { Menu, Topping, User, MenuTopping } = require('../models')

class OrderController {
    static viewOrder(req, res) {
        MenuTopping.findAll()
            .then((data)=> res.render(`order`, {data}))
            .catch(err=> res.send(err))
        
    }
}

module.exports = OrderController