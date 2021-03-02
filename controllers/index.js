const notFound = require('./not-found')
const {calculateWeather, fetchWeather, fetchHistory, simulateSolarSystem, cleanSolarSystem} = require('../use-cases.js')
const healthCheck = require('./health-check')
const getWeather = require('./get-weather')({calculateWeather, fetchWeather})
const getWeatherHistory = require('./get-weather-history')({fetchHistory})
const postSimulation = require('./post-simulation')({simulateSolarSystem})
const postClean = require('./post-clean')({cleanSolarSystem})

module.exports = Object.freeze({
    getWeather,
    getWeatherHistory,
    postSimulation,
    postClean,
	healthCheck,
    notFound
})
