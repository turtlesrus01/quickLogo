const fs = require('fs');
const inquirer = require('inquirer');
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

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
  //prompt for color keyword or hex code 
  {
    type: 'list',
    message: 'Please select a color:',
    name: 'color',
    choices: [

    ]
  },
])
.then((response) => {
console.log(response)

})
.catch((err) => console.log(err));


//prompt for which shape (circle, triangle, and square)
//function for SVG generation 
//output file called logo.svg
//largest size is a 300x300 image

