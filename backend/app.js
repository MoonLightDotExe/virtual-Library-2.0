const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send("hello world!")
})

app.listen(PORT)