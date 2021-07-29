const { Menu, Topping, MenuTopping } = require('../models')

class MenuController {
    static showAddTopping(req, res) {
        let id = req.params.id
        let result = {}
        Menu.findAll({
            where: { id:id },
            include: Topping
        })
            .then(data => {
                result.menu = data
                return Topping.findAll()
            })
            .then(data => {
                result.topping = data
                res.render('addTopping', result)
            })
            .catch(err=>res.send(err))
    }

    static createMenuTopping(req,res) {
        let id = req.params.id
        let obj = {
            ToppingId: req.body.ToppingId,
            MenuId: id
        }
        MenuTopping.create(obj)
            .then(()=> {
                console.log('masuk');
                res.redirect(`/menu/addTopping/${id}`)
            })
            .catch(err=>res.send(err))
    }
}

module.exports = MenuController