module.exports = async (req, res) => {
	const httpRequest = {
		requestId: req.requestId,
		method: req.method,
		path: req.originalUrl,
		body: req.body,
		params: Object.assign(req.params, req.query),
		locale: req.locale,
		ip: req.ip,
		headers: req.headers,
	}
	
	req.httpRequest = httpRequest
}