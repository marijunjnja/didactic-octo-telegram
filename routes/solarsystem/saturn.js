const saturn = require('express').Router()

// Saturn home page
saturn.get('/', (req, res) => {
  res.send('Saturn main page')
})

// Mimas moon page
saturn.get('/mimas', (req, res) => {
  res.send("Saturn's moon Mimas main page")
})

// Enceladus moon page
saturn.get('/enceladus', (req, res) => {
  res.send("Saturn's moon Enceladus main page")
})

// Tethys moon page
saturn.get('/tethys', (req, res) => {
  res.send("Saturn's moon Tethys main page")
})

// Titan moon page
saturn.get('/titan', (req, res) => {
  res.send("Saturn's moon Titan main page")
})

// Saturn other named moons' page
saturn.get('/othernamed', (req, res) => {
  res.send("Saturn's other 49 named moons' main page")
})

// Saturn unconfirmed moons' page
saturn.get('/unconfirmed', (req, res) => {
  res.send("Saturn's unconfirmed moons' main page")
})

module.exports = saturn