const {ResourceNotFoundError} = require('../errors')
const {buildResponseBody} = require('../utils')
module.exports = async function notFound(req) {
	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body: buildResponseBody('not found', null, 'Resource not found', null),
		statusCode: 404
	}
}
