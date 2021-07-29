const { Menu, Topping, MenuTopping } = require('../models')
const getRp = require('../helpers/getRp')
const getTotalPrice = require('../helpers/getTotalPrice')

class MenuController {
    static showAddTopping(req, res) {
        let id = req.params.id
        let result = {getRp, getTotalPrice}
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
            ToppingId: req.body.ToppingId || null,
            MenuId: id
        }
        MenuTopping.create(obj)
            .then(()=> {
                res.redirect(`/menu/addTopping/${id}`)
            })
            .catch(err=>res.send(err))
    }

    static destroyMenuTopping(req,res){
        let MenuId = req.params.menuId
        let ToppingId = req.params.toppingId
        MenuTopping.destroy({
            where: {
                MenuId, ToppingId
            }
        })
            .then(()=> {
                // res.send('tes')
                res.redirect(`/menu/addTopping/${MenuId}`)
            })
            .catch(err=>res.send(err))
    }
}

module.exports = MenuController