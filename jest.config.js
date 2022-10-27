module.exports =  {
    preset: "jest-playwright-preset",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    reporters: [
        "default",
        "summary",
        "jest-silent-reporter",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report",
                outputPath: "./test-report.html",
                includeFailureMsg: true
            }
        ]
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    testTimeout: 120000,
    bail: true, // to stop execution of next test suite if one failed
    bail : 1, // how many test suite failure to stop the next execution .. default is 1..
    testEnvironmentOptions: {
		'jest-playwright': {
			browsers: ['chromium'],
			launchOptions: {
				headless: false
			},
			contextOptions: {
				recordVideo: {
					dir: 'videos/',
				}
			},
			viewport: {
				width: 1200,
				height: 700
			}
		}
	}
}