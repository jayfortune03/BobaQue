const {checkPassword} = require(`../helpers/bcrypt.js`)
const {User} = require(`../models/index`)

class LoginController {
    static viewLoginForm(req, res) {
        if (req.session.isLogin) {
            res.redirect(`/`)
        } else {
            let error = req.query.errors
            res.render(`login`, {error})
        }
    }

    static postLogin(req, res) {
        let error = `login_failed`
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
                    res.redirect(`/login?errors=${error}`)
                }
            } else {
                res.redirect(`/login?errors=${error}`)
            }
        })
        .catch(err => {
            res.redirect(`/login?errors=${error}`)
        })
    }

    static logout(req, res) {
        req.session.isLogin = false
        res.redirect(`/login`)
    }
}

module.exports = LoginController