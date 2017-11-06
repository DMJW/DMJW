const app = require('./app')
const http = require('http').Server(app)

http.listen(3500, function() {
  console.log('serving app on', 3500)
})
