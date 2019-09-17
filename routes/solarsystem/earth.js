const earth = require('express').Router()

// Earth main page
earth.get('/', (req, res) => {
  res.send('Earth main page')
})

earth.get('/moon', (req, res) => {
  res.send("Earth's moon main page")
})

module.exports = earth