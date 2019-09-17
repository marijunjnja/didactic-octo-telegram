const solarsystem = require('express').Router()

// Solar System home page
solarsystem.get('/', (req, res) => {
  res.send('Solar System home page shit')
})

// Sun page
const sun = require('./solarsystem/sun')
solarsystem.use('/sun', sun)

// Mercury page
const mercury = require('./solarsystem/mercury')
solarsystem.use('/mercury', mercury)

// Venus page
const venus = require('./solarsystem/venus')
solarsystem.use('/venus', venus)

// Earth page
const earth = require('./solarsystem/earth')
solarsystem.use('/earth', earth)

// Mars page
const mars = require('./solarsystem/mars')
solarsystem.use('/mars', mars)

// Jupiter page
const jupiter = require('./solarsystem/jupiter')
solarsystem.use('/jupiter', jupiter)

// Saturn page
const saturn = require('./solarsystem/saturn')
solarsystem.use('/saturn', saturn)

// Uranus page
const uranus = require('./solarsystem/uranus')
solarsystem.use('/uranus', uranus)

// Neptune page
const neptune = require('./solarsystem/neptune')
solarsystem.use('/neptune', neptune)

// Dwarf Planets page
const dwarfs = require('./solarsystem/dwarfplanets')
solarsystem.use('/dwarfs', dwarfs)

// Asteroids page
const asteroids = require('./solarsystem/asteroids')
solarsystem.use('/asteroids', asteroids)

module.exports = solarsystem