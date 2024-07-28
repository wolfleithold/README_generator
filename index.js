// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const licenses = require("./utils/licenses");

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md has been generated");
  });
}

// Function to generate LICENSE file
function generateLicense(license, year, fullname) {
  if (license !== "None") {
    const licenseText = licenses[license]
      .replace("[year]", year)
      .replace("[fullname]", fullname);
    writeToFile("LICENSE", licenseText);
  }
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
    if (answers.license !== "None") {
      generateLicense(
        answers.license,
        new Date().getFullYear(),
        answers.github
      );
    }
  });
}

// Function call to initialize app
init();
