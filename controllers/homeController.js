const { Menu, Topping } = require('../models')

class HomeController {
    static viewPage(req, res) {
        let menu
        Menu.findAll({
            order: [[`id`, `ASC`]]
        })
            .then(data => {
                menu = data
                return Topping.findAll({
                    order: [[`id`, `ASC`]]
                })
            })
            .then(data => {
                res.render(`homepage`, {data,menu})
            })
            .catch(err => res.send(err))
        
    }
}

module.exports = HomeController