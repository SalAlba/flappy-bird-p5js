function Pipe() {
    // fields ...
    this.x = width;
    this.y = 0;
    this.w = 20;
    this.spacing = random(32*2, height/2);
    this.center = random(this.spacing, height - this.spacing);
    this.top = this.center  -  this.spacing/2;
    this.bottom = height - (this.center + this.spacing/2);
    this.speed =1;
    this.finish = false;

    // methods ...
    this.show = function(){
        fill(color(0,100,0));
        rect(this.x, this.y, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function(){
        this.x -= this.speed;
    }

    this.offScreen = function(){
        return this.x <0 ? true : false;
    }

    this.hits = function(bird){
        if(bird.y < this.top || bird.y > height-this.bottom) {
            if( bird.x > this.x && bird.x < this.x + this.w){
                this.finish = true;
                return true;
            }
        
        }

        this.finish = false;
        return false;
    }
}