class Drops{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            friction:0.1
        }
        this.drop=Bodies.circle(x,y,radius,options)
        
        World.add(world,this.drop);

        this.radius=radius;

    }
    display(){
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);

    }
}