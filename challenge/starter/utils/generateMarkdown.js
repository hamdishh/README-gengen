// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Challenge Instructions
${data.challenge}

## Usage
- Clone the repository USING SSH key.
- Run the command \`npm install\` to install dependencies.
- Run the command \`node index.js\` to generate the READ

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact [${data.username}](https://github.com/${data.username}) or email at ${data.email}.

`;
}

module.exports = generateMarkdown;
