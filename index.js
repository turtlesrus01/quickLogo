import fs from "fs";
import inquirer from "inquirer";
import { JSDOM } from "jsdom";
import * as d3 from "d3";
import {
  SVG,
  extend as SVGextend,
  Element as SVGElement,
} from "@svgdotjs/svg.js";

//function for inquirer prompts
inquirer
  .prompt([
    //prompt for Logo text (up to 3 chars)
    {
      type: "input",
      message: "What characters will be included in you logo? (Up to 3)",
      name: "logoText",
      //validate method to check if entry complies with limitation
      validate: (logoText) => {
        if (logoText.length > 3) {
          return "Please enter up to three characters only.";
        }
        return true;
      },
    },
    //prompt for color keyword or hex code for text
    {
      type: "input",
      message: "Please type a color for the text:",
      name: "textColor",
      //validate method to check if entry is a valid hex code
      validate: (textColor) => {
        //Regular expression to validate hex code entry
        const hex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
        if (!hex.test(textColor)) {
          return false;
        }
        return true;
      },
    },
    //prompt for which shape (circle, triangle, and square)
    {
      type: "list",
      message: "What shape do you want to use in your logo?",
      name: "shapes",
      choices: ["circle", "triangle", "square"],
    },
    //prompt for color keyword or hex code for shape
    {
      type: "input",
      message: "Please type a color for the shape:",
      name: "shapeColor",
      //validate method to check if entry is a valid hex code
      validate: (shapeColor) => {
        //Regular expression to validate hex code entry
        const hex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
        if (!hex.test(shapeColor)) {
          return false;
        }
        return true;
      },
    },
  ])
  .then((response) => {
    console.log(response);
    svgBuilder(response);
  })
  .catch((err) => console.log(err));

//init dom from jsdom
const Dom = new JSDOM(`<!DOCTYPE html><body></body>`);

//function for SVG generation
//output file called logo.svg
//largest size is a 300x300 image
function svgBuilder(response) {
  //init variables
  const prompts = response;
  const body = d3.select(Dom.window.document.querySelector("body"));
  let draw = SVG().addTo(body);
  const logoBatch = draw.group();
  //call for creating the document
  logoBatch.size("300px", "300px").fill("white");
  //svg call for shape selection and shape color selection
  switch (prompts.shapes) {
    case "square":
      logoBatch.rect(100, 100).move(100, 50).fill(prompts.textColor);
      break;
    case "triangle":
      logoBatch.rect().move(100, 50).fill(prompts.textColor);
      break;
    case "circle":
      logoBatch.circle(100).move(100, 50).fill(prompts.textColor);
      break;
  }

  //svg call for text and text color selection
  logoBatch
    .text(prompts.logoText)
    .font({ size: 80, anchor: "middle", leading: 1.2 })
    .fill(prompts.textColor)
    .move(150, 140);

  //Send batch text to draw element
  draw.append(logoBatch);
  //filesystem call for svg file creation
  const svgStr = draw.svg();
  fs.writeFileSync("logo.svg", svgStr);
}
