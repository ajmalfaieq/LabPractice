$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7809573900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to MyAccount",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 830303800,
  "status": "passed"
});
});