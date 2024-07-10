// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badgeURL = "";
  switch (license) {
    case "MIT":
      badgeURL = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache 2.0":
      badgeURL = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPLv3":
      badgeURL = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3-Clause":
      badgeURL = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    default:
      badgeURL = "";
      break;
  }

  return badgeURL;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const licenseLink = `[License](https://opensource.org/licenses/${license})`;

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  switch (license) {
    case "MIT":
      licenseSection = `
## License

This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.
`;
      break;
    case "Apache 2.0":
      licenseSection = `
## License

This project is licensed under the Apache 2.0 License. See the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0) for details.
`;
      break;
    case "GPLv3":
      licenseSection = `
## License

This project is licensed under the GPL v3 License. See the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0) for details.
`;
      break;
    case "BSD 3-Clause":
      licenseSection = `
## License

This project is licensed under the BSD 3-Clause License. See the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause) for details.
`;
      break;
    default:
      licenseSection = "";
      break;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

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

${licenseSection}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can also find me on GitHub: [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
