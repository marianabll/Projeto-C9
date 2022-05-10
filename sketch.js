
const Engine = Matter.Engine; // cria e atualiza o motor
const World = Matter.World; // cria e adicionar corpos ao mundo
const Bodies = Matter.Bodies; // criar corpos
const Body = Matter.Body; // modifica corpos

var engine, world, ball, ground, lamina
var botao, botao2
var direita, esquerda, topo

var angulo = 60


function setup() {
  createCanvas(400,400);

  botao = createImg("up.png")
  botao.position(300,50)
  botao.size(50,50)
  botao.mouseClicked(vForce)

  botao2 = createImg("left.png")
  botao2.position(100,50)
  botao2.size(50,50)
  botao2.mouseClicked(hForce)


  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
   
   var ground_options = {
     isStatic: true
   };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);

  direita = Bodies.rectangle(390,200,20,400,ground_options);
  World.add(world, direita);

  esquerda = Bodies.rectangle(10,200,20,400,ground_options);
  World.add(world, esquerda);

  topo = Bodies.rectangle(200,10,400,20,ground_options);
  World.add(world, topo);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world, ball);
  
  lamina = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world, lamina);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  fill("brown")
  Engine.update(engine);

  Body.rotate(lamina, angulo)

  push()
  translate(lamina.position.x, lamina.position.y)
  rotate(angulo)
  rect(0,0,100,20)
  pop()

  angulo = angulo + 0.1
  
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 400, 20);
  rect(topo.position.x, topo.position.y, 400, 20);
  rect(direita.position.x, direita.position.y, 20, 400)
  rect(esquerda.position.x, esquerda.position.y, 20, 400)
}


function vForce() {
  Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}

function hForce() {
  Body.applyForce(ball, {x:0, y:0}, {x:-0.05, y:0})
}