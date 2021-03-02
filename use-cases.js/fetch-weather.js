const {argsValidation} = require('../utils')
const {HTTPError} = require('../errors')
module.exports = function ({SolarSystem}) {
    
	return async function ({day}) {
		argsValidation({day})
		
        let solarSystem = SolarSystem.getInstance()
        if(solarSystem.historical.legth === 0) throw new HTTPError(409, 'No historical simulation')
        if(!solarSystem.historical[day]) throw new HTTPError(409, `Not historical data for day ${day}`)

        let solarSystemHistory = solarSystem.historical[day]
        let meta = solarSystemHistory.meta

        let respose = {
            day,
            weather: 'normal'
        }

        if(meta.isSunInside && meta.arePlanetsCollinear && meta.area === 0 ) respose.weather = 'drought'
        if(meta.isSunInside && !meta.arePlanetsCollinear && meta.area !== 0 && !meta.isMaxPerimeter) respose.weather = 'rain'
        if(meta.isSunInside && !meta.arePlanetsCollinear && meta.area !== 0 && meta.isMaxPerimeter) respose.weather = 'heavy rain'
        if(!meta.isSunInside && meta.arePlanetsCollinear) respose.weather = 'optimal pressure and temperature'
		
		return respose
	}

}