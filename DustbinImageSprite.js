class DustbinImageSprite{
    constructor(x,y,width,height){
        var options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/dustbin.png");
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("turquoise");
        pop();
    }
}