# Module 11 Challenge: Professional README Generator

## Description
This weeks project was centered around a vital element to any successful project in the world of front end web development, the README file!
A high quality README is essential for providing information on an applications code, functionality and purpose to teachers and students worldwide. 

Using Node.js and ES6 syntax I was successfully able to produce a command-line application that dynamically generates a README.md file containing input on this project. The generated README.md is within the output/hamdishh folder.

## Code highlights/ What i learned during the challenge
When calling the generateMarkdown function to provide the answers to the questions when running node index.js i was struggling to figure out how to store my output which would be the answers within the README.md once its generated. After some googling i figured out a method that was best for me, 'const outputDir = path.resolve(__dirname, 'output', 'hamdishh');'. In this line of code i specified my output directory by just requesting to put my output in a folder named hamdishh so it could be in a different directly to my script/index.js file. 'const outputFileName = path.join(outputDir, 'README.md');', here i joined the output directory with my README.md file which will provide a path to the output file within the output directory.

## Sample Images
![Alt text](<Screenshot 2024-01-25 at 18.53.40.png>)



## Walkthrough Link


## Link to Github Pages




### Walkthrough Video: 27%
[Title](<../Screen Recording 2024-01-24 at 18.17.19.mov>)

