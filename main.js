const express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(3000)