// Main server
const express = require('express')
const app = express()
const port = 3000

// app.use(express.static(__dirname + '/app'))
app.get('/', (req, res) => {
  res.send('All Things Space')
})

// Router imports
const satellites = require('./routes/satellites')
app.use('/satellites', satellites)

const solarsystem = require('./routes/solarsystem')
app.use('/solarsystem', solarsystem)

// Server start
app.listen(port, () => {
  console.log(`server starting on ${port}`)
})