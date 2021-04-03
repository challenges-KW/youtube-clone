const videoPlaylist = require('../src/data')
 
const express = require('express')
const app = express()
const port = 4000
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () => {
    4000
})