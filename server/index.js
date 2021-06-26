const express = require('express')
const client = require('../node-postgres')
const videoPlaylist = require('../src/data')
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

// const sql = "SELECT * FROM employee WHERE salary > $1";
// const values = [55000];

// client.query(sql, values).then(res => {
//   const data = res.rows;
//   data.forEach(row => console.log(row));
// });


app.get('/api/:id', (req, resp) => {
  const id = req.params.id;
  console.log("req.params.id: ", id)
  client.query(queries.queryString10, [id]).then(res=> {
    console.log("res.rows: ", res.rows)
    resp.send(res.rows);
  });
})

//   }) (err, res) => {
//     console.log("res.rows: ", res.rows)
//     if (err) throw err
//     resp.send(res.rows)
//     client.end()
//   })
// })

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})
