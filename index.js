require("dotenv").config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/login', (res, req) => {
    res.send("Enter username and password.")
})
  
  app.listen(`${process.env.PORT}`, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })