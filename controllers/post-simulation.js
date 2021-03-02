const {buildResponseBody} = require('../utils')
module.exports = function ({simulateSolarSystem}) {
	return async function (httpRequest) {
		const headers = {
			'Content-Type': 'application/json'
		}

		await simulateSolarSystem({days: httpRequest.params.days})
        
		return {
			headers,
			statusCode: 200,
			body: buildResponseBody('ok', null, null, null)
		}
	}
	
}
