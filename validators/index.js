const { object } = require('joi')
const Joi = require('joi')
const {buildResponseBody} = require('../utils')

module.exports = Object.freeze({

	weatherValidator: (req, res, next) => {
		let body = req.httpRequest.params
		let schema = Joi.object({
			day: Joi.number().min(0).required(),
			isLive: Joi.boolean().required()
		})

		let result = schema.validate(body)
				
		if(result.error){
			return res.status(400).send(buildResponseBody('bad request',null, result.error.message, null))
		}

		req.httpRequest.params = result.value

		next()
	},

	weatherTypeQuery: (req, res, next) => {
		let body = req.params
		let schema = Joi.object({
			type: Joi.string().valid('memory','live').required(),
		})

		let result = schema.validate(body)
				
		if(result.error){
			return res.status(400).send(buildResponseBody('bad request',null, result.error.message, null))
		}

		req.httpRequest.params = Object.assign(req.httpRequest.params,{isLive:body.type==='live'})

		next()
	},

	memoryValidator: (req, res, next) => {
		let body = {isLive: req.httpRequest.params.isLive}
		let schema = Joi.object({
			isLive: Joi.boolean().valid(false).required(),
		})

		let result = schema.validate(body)
				
		if(result.error){
			return res.status(400).send(buildResponseBody('bad request',null, result.error.message, null))
		}

		next()
	},

	simulateValidator: (req, res, next) => {
		let body = {days: req.httpRequest.params.days}
		let schema = Joi.object({
			days: Joi.number().min(1).max(100000).required(),
		})

		let result = schema.validate(body)
				
		if(result.error){
			return res.status(400).send(buildResponseBody('bad request',null, result.error.message, null))
		}

		next()
	}

})