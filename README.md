# Dealls QA Challenge
This repository contains the submission for the Dealls QA Challenge.


## Challenge 1: Automation Testing 
The submission for Challenge 1 is in the file Challenge_1_test.md. This file contains my approach to test the new feature of Dealls.

## Challenge 2: UI Automation with Cypress with Mentee Scenario
This section details the UI automation implemented using Cypress for the Mentee scenario. The script is filed in "cypress/e2e/challenge2.cy.js".

Target Application Configuration:
The `baseUrl` for these tests is set within the `cypress.config.js` file and points to the dummy application:
`https://job-portal-user-dev-skx7zw44dq-et.a.run.app`

Test Credentials:
The following credentials are utilized within the test scripts for login scenarios:
* Email: `test_mentee@example.com`
* Password: `ValidPassword123` (This is hardcoded in the script for the purpose of this demonstration.)

Automated Test Scenarios (Mentee Perspective):
The `challenge2.cy.js` script covers the following key user interactions:
* Successful login to the application.
* Searching for a mentor by a specific keyword.
* Viewing a mentor's profile from the search results.
* Verification that an appropriate message is displayed when no mentors match a search keyword.
* Verification that a validation message is shown when attempting to search with an empty keyword.

How to run Challenge 2 (Cypress + JavaScript)
1. Install Node.js and npm if you haven't already.
2. Install Cypress by running the following command in your terminal: npm install cypress
3. Open the terminal and navigate to the root of your project.
4. Run the following command to open Cypress: npx cypress open
5. In the Cypress GUI, navigate to the "e2e" folder and select the "challenge2.cy.js"
6. Click the "Run" button to run the test.