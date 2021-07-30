const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
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

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
