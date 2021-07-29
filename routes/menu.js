const express = require(`express`)
const MenuController = require("../controllers/menuController")
const router = express.Router()

router.get('/addTopping/:id', MenuController.showAddTopping)
router.post('/addTopping/:id', MenuController.createMenuTopping)
router.get('/removeTopping/:menuId/:toppingId', MenuController.destroyMenuTopping)

module.exports = router
