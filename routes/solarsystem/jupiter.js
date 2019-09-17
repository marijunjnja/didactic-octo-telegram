const jupiter = require('express').Router()

// Jupiter home page
jupiter.get('/', (req, res) => {
  res.send('Jupiter main page')
})

// Io moon page
jupiter.get('/io', (req, res) => {
  res.send("Jupiter's moon Io main page")
})

// Europa moon page
jupiter.get('/europa', (req, res) => {
  res.send("Jupiter's moon Europa main page")
})

// Callisto moon page
jupiter.get('/callisto', (req, res) => {
  res.send("Jupiter's moon Callisto main page")
})

// Ganymede moon page
jupiter.get('/ganymede', (req, res) => {
  res.send("Jupiter's moon Ganymede main page")
})

// 75 other moons
jupiter.get('/othermoons', (req, res) => {
  res.send("Jupiter's other 75 moons' main page")
})

module.exports = jupiter