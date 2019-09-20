const satellites = require('express').Router()

// Home Satellite page route
satellites.get('/', (req, res) => {
  res.send('Satellite home page shit here')
})

// ISS page route
satellites.get('/iss', (req, res) => {
  distance().then((parameters) => {
    console.log(`parameters: ${parameters}`)
    res.render('./satellites/iss', {
      title: parameters['title'],
      issDistance: parameters['issDistance']
    })
  })
})
const distance = async () => {
  const iss = await require('./satellites/iss')
  return await iss.issdistance.then((response) => {
    console.log(`res: ${response}`)
    return {
      title: 'International Space Station',
      issDistance: response
    }
  })
}

module.exports = satellites