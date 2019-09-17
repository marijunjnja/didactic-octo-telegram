const dwarfs = require('express').Router()

// Dwarf planets home page
dwarfs.get('/', (req, res) => {
  res.send('Dwarf planets main page')
})

// Pluto page
dwarfs.get('/pluto', (req, res) => {
  res.send('King of all dwarf planets, Pluto, main page')
})

module.exports = dwarfs