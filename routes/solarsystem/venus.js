const venus = require('express').Router()

// Venus home page
venus.get('/', (req, res) => {
  res.send('Venus home page')
})

module.exports = venus