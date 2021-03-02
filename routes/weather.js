const express = require('express')
const {controllerCallback: cc} = require('../utils')
const {getWeather, getWeatherHistory, postSimulation, postClean} = require('../controllers')
const {weatherValidator, memoryValidator, simulateValidator} = require('../validators')
const router = express.Router()

router.get('/weather', weatherValidator, cc(getWeather))
router.use(memoryValidator)
router.get('/history', cc(getWeatherHistory))
router.get('/simulate', simulateValidator, cc(postSimulation))
router.get('/clean', cc(postClean))

module.exports = router