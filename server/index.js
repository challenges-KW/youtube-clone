const express = require('express')
const client = require('../node-postgres')
// const videoPlaylist = require('../src/data')
const queries = require('../database-queries') 

const app = express()
const port = 4000
 

app.get('/api', (req, resp) => {
  client.query(queries.queryString8, (err, res) => {
    if (err) throw err
    resp.send(res.rows)
    // client.end()
  })  
})

app.get('/api/:id/', (req, resp) => {
  const id = req.params.id;
  client.query(queries.queryString10, [id]).then(res=> {
    resp.send(res.rows);
    var row = res.rows[0];
    console.log(row.videoid +"'s likes: ", row.likes);
  });
})


app.get('/api/:id/:dislikes', (req, resp) => {
  const dislikeId = req.params.id;
  client.query(queries.queryString11, [dislikeId]).then(res=> {
    resp.send(res.rows);
    var row = res.rows[0];
    console.log(row.videoid +"'s dislikes: ", row.dislikes);
  });
})

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})