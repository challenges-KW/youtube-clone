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

app.get('/api/:id', (req, resp) => {
  const id = req.params.id;
  console.log("id: ", id)
  client.query(queries.queryString10, [id]).then(res=> {
    resp.send(res.rows);
    console.log("sent successfully: ", res.rows)
  });
})

app.get('/api/:getDislikes', (req, resp) => {
  const getDislikes = req.params.id;
  console.log("id for dislike: ", getDislikes)
  client.query(queries.queryString11, [getDislikes]).then(res=> {
    resp.send(res.rows);
    console.log("DISLIKE: ", res.rows)
  });
})

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})