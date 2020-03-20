# TeamDirectoryGenerator
A node program that will get user defined information for team members and generate a HTML document containing information on all members.

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About the Project
TeamDirectoryGenerator is a application that can be utilized to quickly build a HTML page for a development team. The user will run the program, answer some basic questions about their team and the end product will be a HTML page with a "card" for every employee that was defined. The user will need to know the office number for managers, GitHub user name for Engineers and the school for Interns. All emloyees will have a name, ID and e-mail address attributed to them regardless of title.

## Getting Started
    Pre-requisites:
        This project requires node modules, if these are not present, you will need to use `npm init` to retrieve them. Required modules include `fs`, `inquirer` and `express`. The app.js file must be run in order for the project to start. Open takeNotes in your favorite code editor or terminal/console and make sure your commands will be associated with the correct file location.
    Installation:
        If you do not have node_modules included in your download, type the following into the terminal...
            `npm init`
        If you do not have the necessary modules installed, type the following into the terminal...
            `npm install fs inquirer express`
    Launch:
        Once all the pre-requisites have been satisfied, type the following into the terminal...
            `node app.js`
!*!*!*! DO NOT USE: `nodemon app.js`, as it does not play well with inqiurer. !*!*!*!


## Usage
Once the program has been initialized, the first prompt will confirm that you would like to add an employee. If `no` is selected, the program will end and must be reinitialized when it is needed. If `Yes` is selected, the next question will appear and ask what type of employee is to be added.
![alt text](https://github.com/cswitzer85/TeamDirectoryGenerator/blob/master/Assets/TeamDirectoryGeneratorStart.png?raw=true)

Once the user selects an employee type, the questions will cycle through for that employee type and at the end, a HTML card will be added to the queue of employee cards to be used in the final HTML document. The final question for each employee will be the same as the first question asked, `Would you like to add an employee?`.

Once all emloyees have been defined and the user selects `no more, I'm done` for the final response, the program will automatically generate a HTML document which can be found in the `output` folder.

## Contributing
This project is an ongoing an assignment for SMU Coding Boot Camp, and as such is not subject to any regular update or maintenance. However, if you would like to extend advise, inquire about the project or otherwise communicate about this project, please use any of the means in the contact section below.


## Contact
GitHub user name:   [cswitzer85](https://github.com/cswitzer85 "cswitzer85's GitHub")  
Cody Switzer on:    [Linked In](https://www.linkedin.com/in/cody-switzer-1429593a/ "cody-switzer-1429593a's Linked In")  
e-mail:             cswitzer85@gmail.com  

## Acknowledgements
* All .test.js documents were provided by SMU Coding Boot Camp to simulate a colaborative project in which certain aspects are to be worked around and with.