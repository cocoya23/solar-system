const {HTTPError} = require('../errors')
module.exports = function argsvalidation(args={}) {
	for (const key in args) {
		if(args[key] === undefined) throw new HTTPError(400, `"${key}" param must be provided`)
	}	
}