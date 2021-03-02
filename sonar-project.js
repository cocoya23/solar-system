require('dotenv').config()
const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner(
	{
		serverUrl: process.env.SONAR_HOST,
		token : process.env.SONAR_TOKEN,

		options: {
			'sonar.projectKey': 'solar-system',
			'sonar.projectName': 'solar-system',
			'sonar.language': 'javascript',
			'sonar.sources': '.',
			'sonar.exclusions': 'node_modules',
			'sonar.javascript.lcov.reportPaths': '/nyc_output/processinfo/index.json'
		}
	}
)
