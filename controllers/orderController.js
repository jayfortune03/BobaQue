const { Menu, Topping, User, MenuTopping } = require('../models')
const getRp = require(`../helpers/getRp`)
const getTotalPrice2 = require(`../helpers/getTotalPrice2`)
const mailer = require(`../helpers/nodemailer`)

class OrderController {
    static viewOrder(req, res) {
        MenuTopping.findAll({
            include: [Topping, Menu, User]
        })
            .then(data => {
                res.render(`order`, {data, getRp, getTotalPrice2})
            })
            .catch(err => {
                console.log(err)
            })
    }

    static postOrder(req, res) {
        MenuTopping.findAll({
            where : {id : req.params.id},
            include: User
        })
        .then(data => {
            mailer(data[0].User.email, req.params.price)
            return MenuTopping.destroy({
                where : {id : req.params.id}
            })
        })
        .then(() => {
            res.redirect(`/`)

        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = OrderController