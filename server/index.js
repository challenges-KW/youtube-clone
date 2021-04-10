// require('dotenv').config({ path: '../k.env' })

const client = require('../node-postgres')
const videoPlaylist = require('../src/data')
 
const express = require('express')
const app = express()
const port = 4000
 
app.get('/videos', function (req, res) {
  res.send(videoPlaylist)
})
 

// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …)


//create tables
const queryString = 'CREATE TABLE IF NOT EXISTS videodata (videoId VARCHAR, imageId VARCHAR, views VARCHAR, date VARCHAR, relativeDate VARCHAR);'
//insert data -- do with a loop
const queryString2 = `INSERT INTO videodata(videoId, imageId, views, date, relativeDate) values('tg00YEETFzg', '4.png', '960M', 'September 22, 2011', '10');`
//get data
const queryString3 ='select * from videonames'
//delete tables
const queryString4 = 'drop table videodata'

app.get('/api', (req, resp) => {
  client.query(queryString2, (err, res) => {
    if (err) throw err
    resp.send(res)
    client.end()
  })  
})

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})

