const {argsValidation, planets} = require('../utils')
module.exports = function ({SolarSystem}) {
    
	return async function ({days}) {
        argsValidation({days})
		let solarSystem = SolarSystem.getInstance()

        for (let day = 0; day <= days; day++) {
            solarSystem.historical.push(planets.calculateSolarSystem(day))
        }
		
	}

}