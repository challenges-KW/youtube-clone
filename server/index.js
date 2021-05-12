const client = require('../node-postgres')
const videoPlaylist = require('../src/data')
 
const express = require('express')
const app = express()
const port = 4000
 
app.get('/videos', function (req, res) {
  res.send(videoPlaylist)
})


//create tables
const queryString = 'CREATE TABLE IF NOT EXISTS videodata (videoId VARCHAR, imageId VARCHAR, views VARCHAR, date VARCHAR, relativeDate VARCHAR);'
//insert data -- do with a loop
const queryString2 = `INSERT INTO videodata(videoId, imageId, views, date, relativeDate) values('tg00YEETFzg', '4.png', '960M', 'September 22, 2011', '10');`
//get data
const queryString3 ='select * from videonames inner join videodata using(videoId);'
//delete tables
const queryString4 = 'drop table videodata'
const queryString5 = 'CREATE TABLE IF NOT EXISTS thumbs (likes VARCHAR, dislikes VARCHAR);'
// const queryString6 = `INSERT INTO thumbs(likes, dislikes) values('0', '0');`

app.get('/api', (req, resp) => {
  client.query(queryString3, (err, res) => {
    if (err) throw err
    resp.send(res.rows)
    client.end()

  })  
})

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})

