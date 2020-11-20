class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        density:0.04,
        friction:0.1,
        restitution:0.3
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("Img/box2.png");
    this.width = width;
    this.height = height;
    this.Visibility=255;
    World.add(world, this.body);
  }
  display(){
if(this.body.speed<3){
  var pos =this.body.position;
  push()
  translate(pos.x,pos.y);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.width,this.height);
  pop()
}else{
  World.remove(world,this.body);
  push()
  this.Visibility = this.Visibility -5;
  tint(255,this.Visibility);
  pop();
}

    
  }
};