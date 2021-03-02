const express = require('express')
const path = require('path')
const cors = require('cors')
const {controllerCallback: cc, middlewareCallback: mc} = require('../utils')
const { notFound, healthCheck } = require('../controllers')
const {requestParser} = require ('../middlewares')
const router = express.Router()

router.use(cors())
router.use(mc(requestParser))

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/../index.html'))
})
router.get('/healthcheck', cc(healthCheck))

router.use(cc(notFound))

module.exports = router