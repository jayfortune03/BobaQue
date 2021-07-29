function getRp(value) {
    return value.toLocaleString(`id`, { style: `currency`, currency: `IDR`})
}

module.exports = getRp