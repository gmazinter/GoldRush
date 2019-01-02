const express = require('express')
const app = express()

app.use(express.static(path.join(_dirname, 'dist')))
app.use(express.static(path.join(_dirname, 'node_modules')))


app.listen(3000, function() {
    console.log('server running on 3000')
})