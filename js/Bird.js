function Bird(){
    // fields ...
    const  AIRE_FOREC = 0.9;
    this.x = 50;
    this.y = height/2;
    this.diametr = 32;

    this.gravity = 0.65;
    this.velocity = 0;
    this.lift = -15;

    // methods ...
    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, this.diametr, this.diametr);
        //
        // stroke(color(255, 0, 0));
        // line(this.x, this.y, this.x, this.y+this.diametr/2);
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= AIRE_FOREC;
        this.y += this.velocity;
        
        if(this.y > height ) {
            this.y = height;
            this.velocity =0 ;
        }

        if(this.y < 0 ){
            this.y=0;
            this.velocity =0;
        }
    }

    this.moveUp = function(){
        this.velocity += this.lift;
    }
}