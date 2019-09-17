const mercury = require('express').Router()

// Mercury home page
mercury.get('/', (req, res) => {
  res.send('Mercury main page')
})

module.exports = mercury