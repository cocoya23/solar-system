const {argsValidation, planets} = require('../utils')
module.exports = function () {

	return async function ({day}) {
		argsValidation({day})
		
        let solarSystem = planets.calculateSolarSystem(day)
        let meta = solarSystem.meta

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