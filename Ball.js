class Ball{
constructor(x,y,radius){

    

    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':5
        
    }

    this.image=loadImage("paper.png");
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    

    World.add(world,this.body);
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
//fill("#C724B1");
rect(this.image,0,0,this.radius);
pop();

}
}