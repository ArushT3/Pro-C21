class Ground 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    rectMode(CENTER);

    fill(127);
    rect(this.x, this.y, this.w, this.h); 
  }
  
}


