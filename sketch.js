function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(255);
  translate(200, 200);

  let h = hour();
  let m = minute();
  let s = second();


//numerical clock
  //   fill(255,0,0);
  //   text(h + ":" + m + ":" + s , - 50,  + 185);
  //   textSize(30);

  rotate(-90);

//seconds circle
  strokeWeight(3);
  stroke(255, 0, 0);
  noFill();
  let ends = map(s, 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, ends);

//minutes circle
  strokeWeight(12);
  stroke(255, 240, 100);
  noFill();
  let endm = map(m, 0, 60, 0, 360)
  arc(0, 0, 240, 240, 0, endm);

//hour circle
  strokeWeight(20);
  stroke(100, 235, 255);
  noFill();
  let endh = map(h % 12, 0, 12, 0, 360)
  arc(0, 0, 150, 150, 0, endh);


//seconds hand  
  push();
  rotate(ends);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 130, 0);
  pop();


//minute hand  
  push();
  rotate(endm);
  stroke(255, 240, 100);
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();


//hour hand  
  push();
  rotate(endh);
  stroke(100, 235, 255);
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  strokeWeight(4);
  point(0, 0);
}