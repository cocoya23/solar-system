const SolarSystem = require('../models/solar-system')
const calculateWeather = require('./calculate-weather')()
const fetchWeather = require('./fetch-weather')({SolarSystem})
const fetchHistory = require('./fetch-history')({SolarSystem})
const simulateSolarSystem = require('./simulate')({SolarSystem})
const cleanSolarSystem = require('./clean')({SolarSystem})
module.exports = Object.freeze({
    calculateWeather,
    fetchHistory,
    fetchWeather,
    simulateSolarSystem,
    cleanSolarSystem
})