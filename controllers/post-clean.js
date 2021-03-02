const {buildResponseBody} = require('../utils')
module.exports = function ({cleanSolarSystem}) {
	return async function (httpRequest) {
		const headers = {
			'Content-Type': 'application/json'
		}

		await cleanSolarSystem()
        
		return {
			headers,
			statusCode: 200,
			body: buildResponseBody('ok', null, null, null)
		}
	}
	
}
