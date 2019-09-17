const uranus = require('express').Router()

// Uranus home page
uranus.get('/', (req, res) => {
  res.send('Uranus main page')
})

// Uranus 27 other moons page
uranus.get('/moons', (req, res) => {
  res.send("Uranus' 27 named moons' main page")
})

module.exports = uranus