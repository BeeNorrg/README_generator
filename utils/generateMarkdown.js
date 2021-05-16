function markdownMaker(answers) {
  let license = answers.license;
  console.log(license);
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
  ## How to Contribute:
  ${answers.contributions}
  ## Testing:
  ${answers.testing} 
  
  ## Questions:
  Do you have any questions?  Check out my Github Site:
  www.github.com/${answers.githubUserName}
  Reach out via email:
  <a class="link" href="mailto:${answers.email}">${answers.email}</a>
  
  ## License:
  Distributed under the ${answers.license} license.  Full license information:
  Licensed under the ${answers.license} License; you may not use this file except in compliance with the License. You may obtain a copy of the License at:
  ${renderLicenseLink()}
  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.
  `;
};

module.exports = markdownMaker();
