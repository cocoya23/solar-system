const {HTTPError} = require('../errors')
const buildResponseBody = require('./response-body')
module.exports = function makeExpressCallback(middleware) {
	return (req, res, next) => {
		middleware(req, res)
			.then(next)
			.catch(e => {
				console.error(e)
				if(e instanceof HTTPError){
					res.status(e.statusCode).send(buildResponseBody('exception', null, e.message, null))
				} else {
					bugsnag.notify(e)
					res.status(500).send(buildResponseBody('error', null, e.message, null))
				}	
				
			})
	}
}
