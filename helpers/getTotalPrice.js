function getTotalPrice(menu,topping) {
    console.log(menu, topping, '<<<<<<');
    menuPrice = menu.map(el => el.price).reduce((a, b) => a + b, 0)
    toppingPrices = topping.map(el => el.price).reduce((a, b) => a + b, 0)
    console.log(menuPrice, toppingPrices,'>>>>');
    return menuPrice + toppingPrices
}

module.exports = getTotalPrice