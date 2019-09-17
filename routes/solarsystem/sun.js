const sun = require('express').Router()

// Sun home page
sun.get('/', (req, res) => {
  res.send('Sun main page')
})

module.exports = sun