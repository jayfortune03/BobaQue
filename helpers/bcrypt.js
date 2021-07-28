var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

function hashPassword(pw) {
    return bcrypt.hashSync(pw, salt)
}

function checkPassword(plainPW, hashedPw) {
    return bcrypt.compareSync(plainPW, hashedPw)
}

module.exports = {
    hashPassword,
    checkPassword
}

// console.log(hashPassword(`pass12345`))