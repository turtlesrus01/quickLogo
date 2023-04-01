const fs = require('fs');
const inquirer = require('inquirer');

//function for inquirer prompts 
inquirer.prompt([
  //prompt for Logo text (up to 3 chars)
  {
    type: 'input',
    message: 'What characters will be included in you logo? (Up to 3)',
    name: 'logoText',
    validate: (logoText) => {
      if (logoText.length > 3) {
        return 'Please enter up to three characters only.';
      }
      return true;
    }
  },
])
.then((response) => {
console.log(response)

})
.catch((err) => console.log(err));

//prompt for color keyword or hex code 
//prompt for which shape (circle, triangle, and square)
//function for SVG generation 
//output file called logo.svg
//largest size is a 300x300 image

