const {argsValidation} = require('../utils')
module.exports = function ({SolarSystem}) {
    
	return async function () {
        let solarSystem = SolarSystem.getInstance()

        solarSystem.clean()		
	}

}