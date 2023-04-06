//class for 
class SvgBuilder {
  constructor(prompts) {
    const prompts = response;
    const body = d3.select(Dom.window.document.querySelector("body"));
    let svg = body.append('svg')
      .attr('width', 300)
      .attr('height', 200)
      .attr('xmlns', 'http://www.w3.org/2000/svg');
  }
}

//function for SVG generation
//output file called logo.svg
//largest size is a 300x300 image
function svgBuilder(response) {
  //init variables


  //call for creating the document
  //svg call for shape selection and shape color selection
  switch (prompts.shapes) {
    case "square":
      svg.append('rect')
      .attr("x", '0')
      .attr("y", '0')
      .attr('width', 300)
      .attr('height', 200)
      .style('fill', prompts.shapeColor);
      break;
    case "triangle":
      svg.append('polygon')
      .attr("x", '0')
      .attr("y", '0')
      .attr('width', 300)
      .attr('height', 300)
      .attr('points', '150,0 0,200 300,200')
      .style('fill', prompts.shapeColor);
      break;
    case "circle":
      svg.append('circle')
      .attr("cx", '150')
      .attr("cy", '100')
      .attr('r', 75)
      .style('fill', prompts.shapeColor);
      break;
  };

  //svg call for text and text color selection
  svg.append('text')
    .text(prompts.logoText)
    .attr("x", '50%')
    .attr("y", '52%')
    .attr('width', 80)
    .attr('height', 80)
    .attr('font-size', '4em')
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "middle")
    .style('font-family', 'sans-serif')
    .style('fill', prompts.textColor);

  //filesystem call for svg file creation
  fs.writeFileSync("logo.svg", body.html());
}
