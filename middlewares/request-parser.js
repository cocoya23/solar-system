module.exports = async (req, res) => {
	const httpRequest = {
		requestId: req.requestId,
		method: req.method,
		path: req.originalUrl,
		body: req.body,
		query: req.query,
		params: req.params,
		locale: req.locale,
		ip: req.ip,
		headers: req.headers,
	}
	
	req.httpRequest = httpRequest
}