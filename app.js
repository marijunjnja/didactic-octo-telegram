// Main server
const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('media'))

app.get('/', (req, res) => {
  res.render('index', { title: 'All Things Space' })
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