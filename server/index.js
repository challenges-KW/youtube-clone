const videoPlaylist = require('../src/data')
 
const express = require('express')
const app = express()
const port = 4000
 
app.get('/videos', function (req, res) {
  res.send(videoPlaylist)
})
 
app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})