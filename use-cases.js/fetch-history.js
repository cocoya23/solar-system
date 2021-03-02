module.exports = function ({SolarSystem}) {
    
	return async function () {
		let solarSystem = SolarSystem.getInstance()
        
		return solarSystem.historical
	}

}