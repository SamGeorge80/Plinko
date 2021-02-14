const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var gameState = 0;
var score = 0;
var particle;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    createCanvas(660,800);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
    ground = new Ground(240,800,480,10);
    
    for(i = 0;i<=width;i = i+80){
        divisions.push(new Division(i, height-divisionHeight/2,10,divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,75)); 
    }
    for (var j = 50; j <=width-10; j=j+50) { 
        plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) { 
         plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50) { 
        plinkos.push(new Plinko(j,375)); 
    }
}
    
function draw(){
    background(0);
    fill('white')
    text("Score  " + score, width-300, 50)
    textSize(25);
    text(" 500 ",15,500);
    text(" 500 ",95,500);
    text(" 500 ",175,500);
    text(" 100 ",255,500);
    text(" 100 ",335,500);
    text(" 200 ",415,500);
    text(" 200 ",495,500);
    text(" 200 ",575,500);
    console.log(score);
    Engine.update(engine);
    ground.display();
    for(i = 0;i<divisions.length;i++){
        divisions[i].display();
    }
    if(frameCount%90===0){
        particles.push(new Particle(random(width/2-10, width/2+10),10,10))
    }
    for (var j = 0; j<particles.length; j++){
        particles[j].display();
    }
    for (var i = 0; i < plinkos.length; i++) { 
        plinkos[i].display(); 
    }

    if(particle!= null){
        particle.display();
        if(particle.body.position.y>760){
            if(particle.body.position.x<400){
                score = score+500;
                console.log(score);
                particle=null;
            }
            else if(particle.body.x>400 && particle.body.position.x<500){
                score = score+100;
                console.log(score);
                particle = null;
            }
            else if(particle.body.x>500 && particle.body.position.x<600){
                score = score+200;
                console.log(score);
                particle = null;
            }
        }
    }

   
    
  
}
function mousePressed()
{
    if(gameState!=="end")
    {
        count++;
        particle=new Particle(mouseX, 10, 10, 10);
    }
}

