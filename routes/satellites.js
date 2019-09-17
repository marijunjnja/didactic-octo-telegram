const satellites = require('express').Router()

// Home Satellite page route
satellites.get('/', (req, res) => {
  res.send('Satellite home page shit here')
})

// ISS page route
satellites.get('/iss', (req, res) => {
  res.send('ISS page')
})

module.exports = satellites