const {HTTPError} = require('../errors')
const buildResponseBody = require('./response-body')
module.exports = function makeExpressCallabck(controller) {
	return (req, res) => {
		req.httpRequest.params = req.params
		req.httpRequest.io = req.io
		logger.info(JSON.stringify(req.httpRequest.params))
		controller(req.httpRequest, bugsnag)
			.then(httpResponse => {
				if (httpResponse.headers) {
					res.set(httpResponse.headers)
				}
				res.type('json')
				res.status(httpResponse.statusCode).send(httpResponse.body)
			})
			.catch(e => {
				console.error(e)
				if(e instanceof HTTPError){
					res.status(e.statusCode).send(buildResponseBody('exception', null, e.message, null))
				} else {
					bugsnag.notify(e)
					res.status(500).send(buildResponseBody('error', null, 'Unexpected error', null))
				}	
				
			})
	}
}
