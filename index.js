// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md has been generated");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can also find me on GitHub: [${data.github}](https://github.com/${data.github}).
`;
}
