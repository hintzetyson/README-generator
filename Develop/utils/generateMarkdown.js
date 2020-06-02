function generateMarkdown(data) {

//this takes away any spaces, the g means globally
var markdown = `# ${data.githubRepo.replace(/-/g, " ")}\n`

//Badge for the repo, this was found on the website how to get this
markdown += `\n[![repo size](https://img.shields.io/github/repo-size/${data.githubName}/${data.githubRepo})](https://github.com/${data.githubName}/${data.githubRepo})`;


//adding a table of contents

if (data.table) {
  string += '\n## Table of contents\n';

  string += '\n* [Installation](#installation)\n';
  string += '\n* [Usage](#usage)\n';

  //Only appears if this exists
  if (data.contributeTrueOrFalse) {
    string += '\n* [Contributing](#contributing)\n';
  }

  //Only appears if tests are wanted
  if (data.testsTrueorFalse) {
    string += '\n* [Tests](#tests)\n';
  }

  
  string += '\n* [Questions](#questions)\n'
  string += '\n* [License](#license)\n'
}

  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
