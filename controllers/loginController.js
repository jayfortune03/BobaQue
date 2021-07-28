const {checkPassword} = require(`../helpers/bcrypt.js`)
const {User} = require(`../models/index`)

class LoginController {
    static viewLoginForm(req, res) {
        if (req.session.isLogin) {
            res.redirect(`/`)
        } else {
            res.render(`login`)
        }
    }

    static postLogin(req, res) {
        User.findOne({
            where: {username : req.body.username}
        })
        .then(data => {
            if (data) {
                const isPasswordMatch = checkPassword(req.body.password, data.password)
                if (isPasswordMatch) {
                    req.session.isLogin = true
                    res.redirect(`/`)
                } else {
                    res.send(`Password/Username salah mas`)
                }
            } else {
                res.send(`Password/Username salah mas`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = LoginController