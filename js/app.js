var img;
var bird;
var pipes=[];

function setup(){
    createCanvas(windowWidth, windowHeight);    
    img = loadImage("img/bg.gif");
    bird = new Bird();
    pipes.push( new Pipe());

}

function draw(){
    background(img);

    for(var i=pipes.length-1; i>0; i--){

        if( pipes[i].hits(bird)){
            console.log('1');
        }

        pipes[i].show();
        pipes[i].update();
        if(pipes[i].offScreen()) pipes.splice(i, 1);
    }


    bird.show();
    bird.update();

    if(frameCount % 100 === 0) pipes.push( new Pipe());

}

function keyPressed(){
    if(key == ' ')  bird.moveUp();
}