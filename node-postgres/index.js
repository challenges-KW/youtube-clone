const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get('/', (req, res) => {
    videonames.getVideoNames()
    videodata.getVideoData()
    res.send(videonames);
})

app.listen(port, () => {
    console.log("app is running on port 3001:", port)
})