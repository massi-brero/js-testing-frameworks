const express = require('express')
const request = require('postman-request');
const app = express()

exports.specialService = (param) => {
    const url = `http://localhost:3000/black/${param}`
    return request(url)
}