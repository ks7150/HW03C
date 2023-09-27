

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200,200,200)
  
  randomSeed(99)
  for (let i = 0; i < 25; i++) {
    let x1= random(100)
    let x2= random(600)
    let y1= random (600)
    let y2= random (600)

stroke(0,0,0)    
line(x1,y1,x2,y2)
  }
}


  