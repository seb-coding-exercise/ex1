# SebList

This is exercise for SEB technical interview process.

Project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

This exercise uses fakeData to generate questions and answers "src/shared/data/testData.ts";

To start the project run `npm run showme` in the console (terminal) and navigate to `http://localhost:4200/`.
To run tests run `npm run test`;

What does this project do?
* Questions and options are generated dynamically from test data
* Possible products for user are returned from service with simulated delay
* Basic form validation (required fields)
* Radio component is reusable
* It uses reactive forms
* Some cases of product filtering are tested

What is missing?
* Test coverage might be better
* Mock server to test http requests (This was not in exercise description)
* Some style splitting into variable files, responsive view, etc. (This was not in exercise description)
