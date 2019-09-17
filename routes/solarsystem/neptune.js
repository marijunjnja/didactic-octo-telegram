const neptune = require('express').Router()

// Neptune home page
neptune.get('/', (req, res) => {
  res.send('Neptune main page')
})

// Neptune 14 moons page
neptune.get('/moons', (req, res) => {
  res.send("Neptune's 14 named moons' main page")
})

module.exports = neptune