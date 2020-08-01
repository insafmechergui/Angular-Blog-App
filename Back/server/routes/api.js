const express = require('express')
const routerApi = express.Router()

routerApi.get('/', (res, req) => {
    res.setEncoding('from api route')
})

module.exports = routerApi