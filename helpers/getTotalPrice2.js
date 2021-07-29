function getTotalPrice2(value1, value2) {  
    let output = value1 + value2
    return output.toLocaleString(`id`, { style: `currency`, currency: `IDR`})
}

module.exports = getTotalPrice2