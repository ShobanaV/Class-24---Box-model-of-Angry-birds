class Log {
    constructor(x, y, width, angle ) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, 20, options);
      this.width = width;
      this.height = 20;
      
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  