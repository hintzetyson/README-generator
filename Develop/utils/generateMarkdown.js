function generateMarkdown(data) {

//this takes away any spaces, the g means globally
var markdown = `# ${data.githubRepo.replace(/-/g, " ")}\n`

//Badge for the repo, this was found on the website how to get this
markdown += `\n[![repo size](https://img.shields.io/github/repo-size/${data.githubName}/${data.githubRepo})](https://github.com/${data.githubName}/${data.githubRepo})`;




  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
