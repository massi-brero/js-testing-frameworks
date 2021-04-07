const express = require('express')
const app = express()
const converter = require('./converter')

app.get('/rgbToHex', (req, res) => {
    const red = parseInt(req.query.red)
    const green = parseInt(req.query.green)
    const blue = parseInt(req.query.blue)

    res.send(
        converter.rgbToHex(red, green, blue)
    )
})

app.get('/hexToRgb', (req, res) => {
    const hex = req.query.hex

    res.send(
        JSON.stringify(
            converter.hexToRgb(hex)
        )
    )
})

app.get('/black', (req, res) => {
    const hex = '000000'

    res.send(hex)
})

app.listen(3000, () => {
    console.log('listening on 3000'); 
})