const expect = require('chai').expect
const request = require('postman-request')

describe('Color Code Converter Api', () => {


    const url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255'

    describe('RGB to HEX conversion', () => {

        it('returns status 200', async () => {
            await request(url, (err, res, _) => {
                expect(res.statusCode).to.equal(200)
            })
        })

        it('returns colors in hex', async() => {
            const expected = 'ffffff'
            await request(url, (err, _, body) => {
                expect(body).to.equal(expected)
            })

        })
    })
    
    describe('HEX to RGB conversion', () => {
            
        const url = 'http://localhost:3000/hexToRgb?hex=00ff00'
        it('returns status 200', async () => {
            await request(url, (err, res, _) => {
                expect(res.statusCode).to.equal(200)
            })
        })
        it('returns colors in RGB', async () => {
            const expected = '[0,255,0]'
            await request(url, (err, _, body) => {
                expect(body).to.equal(expected)
            })
        })
    })
})