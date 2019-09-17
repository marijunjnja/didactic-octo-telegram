const mars = require('express').Router()

// Mars main page
mars.get('/', (req, res) => {
  res.send('Mars main page')
})

// Phobos moon page
mars.get('/phobos', (req, res) => {
  res.send("Mars' moon Phobos main page")
})

// Deimos moon page
mars.get('/deimos', (req, res) => {
  res.send("Mars' moon Deimos main page")
})

module.exports = mars