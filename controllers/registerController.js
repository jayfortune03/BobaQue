const {checkPassword} = require(`../helpers/bcrypt.js`)
const {User} = require(`../models/index`)

class RegisterController {
    static viewData(req, res) {
        if (req.session.isLogin) {
            res.redirect(`/`)
        } else {
            res.render(`register`)
        }
    }

    static postData(req, res) {
        User.create({
            username:req.body.username,
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            role: `Customer`
        })
        .then(() => {
            res.redirect(`/login`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = RegisterController