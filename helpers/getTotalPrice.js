function getTotalPrice(menu,topping) {
    menuPrice = menu.map(el => el.price).reduce((a, b) => a + b, 0)
    toppingPrices = topping.map(el => el.price).reduce((a, b) => a + b, 0)
    let output = menuPrice + toppingPrices
    return output.toLocaleString(`id`, { style: `currency`, currency: `IDR`})
}

module.exports = getTotalPrice