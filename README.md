# Cypress - AutoFi


An automation testing challenge in Cypress for AutoFi.

---

## Software Requirements

This test automation project is written in JavaScript using the following sofware versions: 

- node (18.16.0)
- npm (9.5.1)
- cypress (12.14.0)
- chrome (114.0.5735.134)

There are no additional external libraries.

## Getting Started

You can clone this repo using SSH:
```
git clone git@github.com:543N2/cypress-autofi.git
```
or using HTTPS:
```
git clone https://github.com/543N2/cypress-autofi.git
```
Once cloned, please get into the directory:
```
cd cypress-autofi
```

Let's get all the required dependencies using npm.
Please type:
``` 
npm i
```
You're all set to start!

## Business Requirements
Let's review the user story:

>Create an interaction with a website where the URL https://tutorialspoint.com/html/html_iframes.htm is loaded and the program navigates into the page below “Document content goes here…“, interacts with the “About us” link, then returns the URL of the new page, a list of all URLs on the page, a list of all buttons on the page, a list of all text input fields on the page, then creates an account and logs into the site. The output should be both via console and output to the appended file.

Based on the provided information, an E2E workflow is considered appropriate, since every step occurs inside the IFrame section.

The workflow below demonstrates the usage of Gherkin syntax written in the first person perspective, representing the program's actions and assertions:

```gherkin
Given I am in "the website"
And "The website" is loaded
And I have "Valid credentials"
When I navigate into the "iframe section"
And I interact with "About us button"
Then I am in "About us page"

When I capture the "About us page" URL
Then The "About us page" URL matches a reference

When I get all "The links"
Then "The links" count is greater than a "Links reference"

When I get all "The buttons"
Then "The buttons" count is greater than a "Buttons reference"

When I get all "The text inputs"
Then "The text inputs" count equals a "Text inputs reference"

When I click the "Login option"
And I enter "Valid credentials"
Then I see the "Student Dashboard page"

```
The following elements will be captured:
- The relative URL of "About us page".
- The list of all "The links" in "About us page".
- The list of all "The buttons" in "About us page".
- The list of all "The Text inputs" in "About us page".

The log outputs will be shown in Cypress Graphic Interface log, the browser Dev Tools Console and an external log.txt file (cypress/fixtures/log.txt).

## Running the test suite

### Graphic Interface
To run the application you might want to try better the Cypress graphic interface since it allows you to explore and interact with each step both using the logger and the browser DevTools Console.

To open Cypress Graphic Interface, please type:
```
npx cypress open
```
A window should pop up. Please click `E2E Testing`.

Then, select the browser. The tests were perfomed in Chrome. You can select `Chrome` and `Start E2E Testing in Chrome`.

A new window will show the test files directory. Please select `spec.cy.js`.

The test suite will automatically start.

### Headless mode
To run Cypress in the terminal using Chrome, you can use:
```
npx cypress run --browser chrome
```
Headless mode will create a video of the test execution but won't allow interaction with results.


## Considerations
- The website throws an uncaught exception on load. A script was develop to ignore it.
- The 'load' state required to start running the test steps takes around 2 minutes, due to a high number of webpage requests.
- The Cypress Graphic Interface log gets clogged with numerous XHR/Fetch requests output. A script was developed to hide them.
- The required log.txt file is populated by a modification of cy.log() method. File contents should be deleted after each run, since they appended.
- The log.txt outputs file doesn´t show detailed information of captured Web Elements. You'd rather use the Cypress Graphic Interface with the browser Dev Tools Console.

## Results
In order to review in detail the captured Web Elements, please look in the `Cypress Graphic Interface Log`, with the browser Dev Tools Console enabled (type `F12` key to enable it and click `Console`).

To check the "About us page" captured URL, please look for the following log entry:

```
log /html/menu.htm
```

To check all "The links", look for the first log entry and click the second one:
```
log Getting all links...
log Array[87]
```

To check all "The buttons", look for the first log entry and click the second one:
```
log Getting all buttons...
log Array[7]
```

To check all "The Text inputs", look for the first log entry and click the second one:
```
log Getting all inputs...
log Array[1]
```

## Missing something?
Feel free to [reach out](mailto:jfsaenzs@gmail.com) for any suggestion!

---
Developed by Juan Saenz (543n2) 😁