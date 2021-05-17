function markdownMaker(answers) {
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
  return `# ${answers.title}
  ##  ${renderLicenseBadge()}
    
  ## Table of Contents:
  <ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#testing">Testing</a></li>
  <li><a href="#questions">Questions</a></li>
  <li><a href="#license">License</a></li>
  </ol>
  
  ## Project Description:
  ${answers.description}
  ## Installation Instructions:
  ${answers.installation}
  ## Usage Instructions: 
  ${answers.usage}
  ## How you can Contribute:
  ${answers.contributions}
  ## Testing:
  ${answers.testing} 
  
  ## Questions:
  Do you have any questions?  Check out my Github!:
  www.github.com/${answers.githubUserName}
  Contact me via email at ${answers.email}
  
  ## License:
  Licensed unde the ${answers.license} license.
  ${renderLicenseLink()}
  `;
};

module.exports = markdownMaker;
