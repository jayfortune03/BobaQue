function mailer(email, receipt) {
    const nodemailer = require(`nodemailer`)
    
    const transporter = nodemailer.createTransport({
        service : `gmail`,
        auth : {
            user : `bobaque56@gmail.com`,
            pass : `bobaque123`
        }
    })
    
    const options = {
        from : `bobaque56@gmail.com`,
        to : email,
        subject: `Receipt`,
        text : `Total yang harus dibayar ${receipt}`
    }
    
    transporter.sendMail(options, (err, info) => {
        if (err) {
            return err
        }
    })
}

// console.log(mailer(`nfortune03@gmail.com`, `Ini harganya 20000`))
module.exports = mailer
