const fs = require('fs');
const inquirer = require('inquirer');

//function for inquirer prompts 
inquirer.prompt([
  //prompt for Logo text (up to 3 chars)
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
])
.then((response) => {

});

//prompt for color keyword or hex code 
//prompt for which shape (circle, triangle, and square)
//function for SVG generation 
//output file called logo.svg
//largest size is a 300x300 image

