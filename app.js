const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/app'))

app.listen(port, function() {
  console.log(`server starting on ${port}`)
})