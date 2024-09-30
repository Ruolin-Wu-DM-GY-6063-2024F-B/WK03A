function setup() {
  createCanvas(windowWidth, windowHeight);
  background(233,212,0)
}

function draw() {
  for (let x = 0; x < windowWidth; x += 50) {
    for (let y = 0; y < windowHeight; y += 50) {
      
      if ((x + y) % 100 === 0) {  
        fill(0);
        noStroke();
        ellipse(x, y, 25); 
      } else {
        fill(0);
        noStroke();
        ellipse(x, y, 10); 
      }
    }
  }
}