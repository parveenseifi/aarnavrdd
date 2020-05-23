class Heart
{
    constructor(x,y)
    {
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height=50;
        World.add(world,this.body);
        this.image - loadImage("horse.png")
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}