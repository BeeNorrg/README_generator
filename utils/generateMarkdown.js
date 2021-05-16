// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    default:
      badge = "";
    break;

    case "Apache":
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    break;

    case "GNU":
      badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    break;

    case "MIT":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    break;

    case "BSD":
      badge ="![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    default:
      link = "";
    break;

    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
    break;

    case "GNU":
      link = "https://www.gnu.org/licenses/gpl-3.0";
    break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
    break;

    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
    break;

    case "Unlicense":
      link = "http://unlicense.org/";
    break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
    break;

    case "GNU":
      link = "https://www.gnu.org/licenses/gpl-3.0";
    break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
    break;

    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
    break;

    case "Unlicense":
      link = "http://unlicense.org/";
    break;

    default:
      link = "";
    break;
  }
  return link;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

`;
}

module.exports = generateMarkdown;
