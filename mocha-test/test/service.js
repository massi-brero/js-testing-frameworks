const service = require('../app/service')
const nock = require('nock');
const expect = require('chai').expect

describe('test special routes', () => {
    const baseUrl = 'http://localhost:3000'
    let serverMock = nock(baseUrl)


    it('black route', async () => {
        const param = 'foo'
        const result = await service.specialService(param)

        serverMock.get(`/black/${param}`)  
            .reply(200, JSON.stringify({data: 'success'}))

    })
})