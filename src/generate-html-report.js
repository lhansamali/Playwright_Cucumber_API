const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "API Automation",
    "Platform": "Windows",
    "Executed": "Local"
  }
};

reporter.generate(options);
