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

// console.log(hashPassword(`bobaque123`))
// console.log(checkPassword(`bobaque123`, `$2a$10$B6VhW/a7s5ju2eqgM/BKFOrR1LW.AHfHC.erAfuyXf3OA6emSlCEu`))