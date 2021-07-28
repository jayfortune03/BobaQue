const express = require('express')
const app = express()
const port = 3000
const router = require(`./routes/index.js`)
const session = require(`express-session`)

app.use(session({
    secret: 'BobaQue',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }))

app.set(`view engine`, `ejs`)
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
