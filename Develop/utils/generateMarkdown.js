function generateMarkdown(data) {

//this takes away any spaces, the g means globally
var markdown = `# ${data.githubRepo.replace(/-/g, " ")}\n`

//Badge for the repo, this was found on the website how to get this
markdown += `\n[![repo size](https://img.shields.io/github/repo-size/${data.githubName}/${data.githubRepo})](https://github.com/${data.githubName}/${data.githubRepo})`;

//Shows if a license exists next to the Repo badge
if (license) {
  markdown += ` [![Github license](https://img.shields.io/badge/license-${data.license.replace(/\b \b/g, "%20")}-blue.svg)](https://opensource.org/licenses/${licenseLink})`;
}

markdown += `\n\n## Title\n\n${data.title}\n`;

//add the Description data
markdown += `\n\n## Description\n\n${data.description}\n`;

//adding a table of contents

if (data.table) {
  markdown += '\n## Table of contents\n';

  markdown += '\n* [Installation](#installation)\n';
  markdown += '\n* [Usage](#usage)\n';

  if (data.contributeTrueOrFalse) {
    markdown += '\n* [Contributing](#contributing)\n';
  }

  if (data.testsTrueorFalse) {
    markdown += '\n* [Tests](#tests)\n';
  }

  markdown += '\n* [Questions](#questions)\n'
  markdown += '\n* [License](#license)\n'
}

//Instructions for dependencies
markdown += `\n## Installation\n\n>To install the needed dependencies, run this command:\n\n\`\`\`\n${data.install}\n\`\`\`\n`;

//Instructions for usage
markdown += `\n## Usage\n\n${data.usage}\n`;

 // Licensing switching between cases
 switch (data.license) {
  case 'MIT':
    var licenseLink = 'mit-license.php';
    break;
  case 'GPL 3.0':
    var licenseLink = 'GPL-3.0';
    break;
  case 'APACHE 2.0':
    var licenseLink = 'Apache-2.0';
    break;
  case 'BSD 3':
    var licenseLink = 'BSD-3-Clause';
    break;
  default:
    license = false;
}

//add the license
if (license) {
  markdown += `\nLicensed under the [${data.license}](https://opensource.org/licenses/${licenseLink}) license.`
}

//if they wanted a contribute section
if (data.contributeTrueOrFalse) {
  markdown += '\n## Contributing\n';
  
  // If the user only has one step then it will just be a bullet point.
  if (data.contributeSteps === 1) {
    markdown += `\n* ${data['step1']}`;
  } 
  
  // Otherwise this will loop over and add the different steps
  else {
    for (let i = 0; i < data.contributeSteps; i++) {
      markdown += `\n### Step ${i + 1}\n* ${data[`step${i + 1}`]}\n`
    }
  }
}

// If the user wants a tests section
if (data.testsTrueorFalse) {
  markdown += `\n## Tests\n\n>To run tests, run this command:\n\n\`\`\`\n${data.testsContent}\n\`\`\`\n`;
}

markdown += `\n## Questions\n\nIf you have any questions, please open an issue or contact [${name}](https://github.com/${data.githubUserame}).\n`;



  return `
`;
}

module.exports = generateMarkdown;
