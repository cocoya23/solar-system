const {buildResponseBody} = require('../utils')
module.exports = function ({fetchHistory}) {
	return async function (httpRequest) {
		const headers = {
			'Content-Type': 'application/json'
		}

		const historical = await fetchHistory()

		return {
			headers,
			statusCode: 200,
			body: buildResponseBody('ok', historical, null, null)
		}
	}
	
}
