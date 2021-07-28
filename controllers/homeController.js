class HomeController {
    static viewPage(req, res) {
        // res.render(`register`)
        // console.log(req.session)
        res.send(`Testing Masyok`)
    }
}

module.exports = HomeController