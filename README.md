# "My Team" Profile Generator
# 
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description
In this project, I created a CLI application to display a webpage that provides the user with their team members basic information, giving access to email and GitHub profiles.

## Table of Contents

  * [User Story](#userstory)
  * [Acceptance Criteria](#acceptance)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Links](#links)
  * [Mockup](#mockup)
  * [License](#license)


## User Story
  <a name="userstory"></a>
AS A manager<br />
I WANT to generate a webpage that displays my team's basic info<br />
SO THAT I have quick access to their emails and GitHub profiles<br />


## Acceptance Criteria
  <a name="acceptance"></a>
GIVEN a command-line application that accepts user input<br />
WHEN I am prompted for my team members and their information<br />
WHEN I start the application<br />
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br />
WHEN I enter the team manager’s name, employee ID, email address, and office number<br />
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br />
WHEN I select the engineer option<br />
THEN I am prompted to enter the engineer’s name, employee ID, email, and GitHub username, and I am taken back to the menu<br />
WHEN I select the intern option<br />
THEN I am prompted to enter the intern’s name, employee ID, email, and school, and I am taken back to the menu<br />
WHEN I decide to finish building my team<br />
THEN I exit the application, and the HTML is generated<br />
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br />
WHEN I click on an email address in the HTML<br />
THEN my default email program opens and populates the TO field of the email with the address<br />
WHEN I click on the GitHub username<br />
THEN that GitHub profile opens in a new tab<br />


## Installation 
  <a name="installation"></a>
1) Copy and clone the repo [team-profile-gen-jk10](https://github.com/jckutch/team-profile-gen-jk10). <br />
2) Then install the package.json by running `npm init -y`. <br />
3) Then install `npm i inquirer@8.2.4` to insure the correct version of inquirer. <br />
4) Then run the CLI application by opening the index.js file in the terminal.
5) Then run the program: `node index`.
6) Then open the `index.html` file in a browser to output the results.



## Usage
  <a name="usage"></a>
Following the command line prompts, you can generate your teams profiles, which includes professional title, name, employee ID, email, GitHub profile and school.  The user can access information via the outputted webpage.


## Tests
  <a name="tests"></a>
User should test `Employee`, `Manager`, `Engineer`, and `Intern` classes.
To run test enter `npm run test` in command line.


## Links
  <a name="links"></a>
Repository Link:  https://github.com/jckutch/team-profile-gen-jk10


## Mockup
  <a name="mockup"></a>
Link to Mockup Video: 


## License 
  <a name="license"></a> License
Licensed under <br /> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/).
