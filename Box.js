class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.image=loadImage("sprites/wood1.png");

  
   
    
  }

 /* display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }*/
}
