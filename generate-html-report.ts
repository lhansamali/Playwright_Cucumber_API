import reporter, { Options } from 'cucumber-html-reporter';

const options: Options = {
  theme: "bootstrap", 
  jsonFile: "reports/cucumber_report.json",
  output: "reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Platform": "Windows 10",
    "Executed": "Local",
    "Tool": "Playwright + Cucumber"
  }
};

reporter.generate(options);
