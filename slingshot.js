class Slingshot {
    constructor(bodya, bodyb){
        var options = {
            bodyA: bodya, bodyB:bodyb, stiffness:0.04, length: 10
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    display(){
        var pointa = this.sling.bodyA.position;
        var pointb= this.sling.bodyB.position;
        push ();
        strokeWeight(3);
        line (pointa.x,pointa.y,pointb.x,pointb.y);
        pop ();

        
    }
}