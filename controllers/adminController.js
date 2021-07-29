const {User, Topping, Menu} = require(`../models/index`)

class AdminController {
    static viewPageAdmin(req, res) {
        let menu
        Menu.findAll({
            order:[[`id`, `ASC`]]
        })
            .then(data => {
                menu = data
                return Topping.findAll({
                    order:[[`id`, `ASC`]]
                })
            })
            .then(data => {
                res.render(`homepageAdmin`, {data, menu})
            })
            .catch(err => res.send(err))
        
    }

    static editMenuForm(req, res) {
        Menu.findAll({
            where : {id : +req.params.id}
        })
        .then(data => {
            res.render(`editMenuForm`, {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editToppingForm(req, res) {
        Topping.findAll({
            where : {id : +req.params.id}
        })
        .then(data => {
            res.render(`editToppingForm`, {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editMenu(req, res) {
        Menu.update({
            name : req.body.name,
            price: req.body.price,
            description:req.body.description,
            image:req.body.image
        },
            {
            where : {id : +req.params.id}
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editTopping(req, res) {
        Topping.update({
            name : req.body.name,
            price: req.body.price,
            description:req.body.description,
            image:req.body.image
        },
            {
            where : {id : +req.params.id}
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static viewAddMenuForm(req, res) {
        res.render(`addMenuForm`)
    }

    static addMenu(req, res) {
        Menu.create({
           name : req.body.name,
           price: req.body.price,
           description: req.body.description,
           image: req.body.image 
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static viewAddToppingForm(req, res) {
        res.render(`addToppingForm`)
    }

    static addTopping(req, res) {
        Topping.create({
            name : req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image 
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteMenu(req, res) {
        Menu.destroy({
            where: {id : +req.params.id}
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteTopping(req, res) {
        Topping.destroy({
            where: {id : +req.params.id}
        })
        .then(() => {
            res.redirect(`/admin`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = AdminController