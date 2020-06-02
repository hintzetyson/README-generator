//Required installations
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

//This validates that they have something in the field when prompted
const inputValidation = async function(input) {
    if (input === '') {
        return "You must have text in this field"
    }

    return true
};
//This will check that there are numbers
const numberValidation = async function(input) {
    if (!input.match(/[0=9]/)) {
        return "This must be a number"
    }
    return true
};

//List of Questions
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUsername',
        validate: inputValidation
    },
    {
        type: 'input',
        message: 'What is the name of your Github repo?',
        name: 'githubRepo',
        validate: inputValidation
    },
    {
        type: 'confirm',
        message: 'Would you like to use your real name on the README?',
        name: 'realName'
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
        validate: inputValidation
    },
    {
        type: 'confirm',
        message: 'Would you like a table of contents?',
        name: 'table',
    },
    {
        type: 'input',
        message: 'What command does the user need to run to install dependencies?',
        name: 'install',
        default: 'npm i',
        validate: inputValidation
        
    },
    
    {
        type: 'input',
        message: 'How does one use your product?',
        name: 'usage',
        validate: inputValidation
    },
    {
        type: 'list',
        message: 'What type of licensing do you need?',
        name: 'license',
        default: 'Use arrow key to navigate',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'No license']
    },
    {
        type: 'confirm',
        message: 'Would you like a list on how to contribute?',
        name: 'contributeTrueOrFalse'
    }, {
        //This occurs if the above is true
        when: function (response) {
          return response.contributeTrueOrFalse;
        },
        type: 'input',
        message: 'How many steps would you like to list?',
        name: 'contributeSteps',
        validate: numberValidation
    },
    {
        type: 'confirm',
        message: 'Would you like to include a Tests section?',
        name: 'testsTrueorFalse'
    }, {
        when: function (response) {
          return response.testsTrueorFalse;
        },
        type: 'input',
        message: 'What command does the user need to test your program?',
        name: 'testsContent',
        default: 'npm test',
        validate: fieldValidation
    },
];

function writeToFile(fileName, data) {
    let generated = generateMarkdown(data);
    fs.writeFile(fileName, generated, function() {
        console.log(`${fileName} has been generated!`)
    });
}

function init() {
    inquirer.prompt(question).then(function (answers) {
        if (answers.contributeTrueOrFalse) {

            function contributeFunction() {
                number++;

                inquirer.prompt([
                    {
                        type:"input",
                        message: `What should Step ${number} say?`
                    }
                ])
            }
        }
    })
}

init();
