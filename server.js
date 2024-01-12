const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + '/dist'))

app.listen(process.env.PORT || 3000)

console.log('server started ' + process.env.PORT || 3000)
