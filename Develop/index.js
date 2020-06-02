const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const inputValidation = async function(input) {
    if (input === '') {
        return "You must have text in this field"
    }

    return true
};

const questions = [
    {
        type: 'input',
        message: 'What is your Github name?',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'What is the name of your Github repo?',
        name: 'githubRepo',
    },
    {
        type: 'confirm',
        message: 'Would you like to use your real name on the README?',
        name: 'realName'
    },
    {
        type: 'input',
        message: 'Please make a short description for your project',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Would like a table of contents?',
        name: 'table',
    },
    {
        type: 'input',
        message: 'What command does the user need to run to install needed dependencies?',
        name: 'install',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'How does one use your product?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What type of license would you like to use?',
        name: 'license',
        default: 'Use arrow key to navigate',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'No license']
    },
    {
        type: 'confirm',
        message: 'Would you like a list on how to contribute?',
        name: 'contributeTrueOrFalse'
    }, {
        when: function (response) {
          return response.contributeTrueOrFalse;
        },
        type: 'input',
        message: 'How many steps would you like to list?',
        name: 'contributeSteps',
        validate: numberValidation
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
