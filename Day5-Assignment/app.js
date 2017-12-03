let express = require('express')

let app = express()

app.get('/', (request, response) => {
  response.send('Hello')
})

app.listen('3000', () => {
  console.log('I hope this is work!!!!')
})
