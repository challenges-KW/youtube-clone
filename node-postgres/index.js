
// const { REACT_APP_HOST, REACT_APP_PORT, REACT_APP_USER, REACT_APP_PASSWORD } = require('../k.env')

const { Client } = require('pg')
const client = new Client({
    //environment variables
  // host: {REACT_APP_HOST},
  // port: {REACT_APP_PORT},
  // user: {REACT_APP_USER},
  // password: {REACT_APP_PASSWORD},
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = client;