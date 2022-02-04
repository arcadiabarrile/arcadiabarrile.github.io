let img;
let cnv;
function preload() {
  img = loadImage('assets/1a.jpg');
}
function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col< img.width; col+=5){
    for(let row = 0; row <img.height; row+=1){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(75)));
      noFill();
      stroke(color(c));
      strokeWeight(random(2));
      point(sin(xPos), cos(yPos));
      strokeWeight(random(4));
      curve(xPos, yPos, sin(xPos) * random(10), cos(xPos) * sin(xPos) * random(30), 0, 42, cos(yPos) * sin(yPos) *random(10), cos(yPos) * sin(xPos) * 50)
      pop();
    }
  }
}

