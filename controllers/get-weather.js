const {buildResponseBody} = require('../utils')
module.exports = function ({calculateWeather, fetchWeather}) {
	return async function (httpRequest) {
		const headers = {
			'Content-Type': 'application/json'
		}

		const respose = httpRequest.params.isLive ? 
		await calculateWeather({day: httpRequest.params.day})
		:
		await fetchWeather({day: httpRequest.params.day})

		return {
			headers,
			statusCode: 200,
			body: buildResponseBody('ok', respose, null, null)
		}
	}
	
}
