const fs = require('fs');
const inquirer = require('inquirer');
const { SVG, extend: SVGextend, Element : SVGElement} = require('@svgdotjs/svg.js');

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
  //prompt for color keyword or hex code for text
  {
    type: 'input',
    message: 'Please type a color for the text:',
    name: 'color',
    //validate method to check if entry is a valid hex code
    validate: (color) => {
      //Regular expression to validate hex code entry
      const hex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
      if (!hex.test(color)) {
        return false;
      } 
      return true;
    }
  },
  //prompt for which shape (circle, triangle, and square)
  {
    type: 'list',
    message: 'What characters will be included in you logo? (Up to 3)',
    name: 'shapes',
    choices: ['circle, triangle, and square'],
  },
])
.then((response) => {
console.log(response)
svgBuilder(response)
})
.catch((err) => console.log(err));

//function for SVG generation 
  //output file called logo.svg
  //largest size is a 300x300 image
function svgBuilder(response) {

}