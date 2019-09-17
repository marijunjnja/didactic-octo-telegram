const asteroids = require('express').Router()

// Asteroids home page
asteroids.get('/', (req, res) => {
  res.send('Asteroids main page')
})

module.exports = asteroids