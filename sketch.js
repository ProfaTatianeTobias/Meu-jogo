

var fundo;
var player;
var paredeEsquerda, paredeDireita, solo;
var colidiu = false;
var right = 0;
var left = 1;
var direcaoPulo = right;
var personagem1, personagem2, personagem3, personagem4, personagem5;

function preload()
{
 fundo = loadImage("imagem fundo.jpg");
 personagemComeco = loadImage("sprite_0.png");
 personagemPulandoDireita = loadImage("sprite_1.png");
 personagemPulandoEsquerda = loadImage("sprite_2.png");
 personagemParedeDireita = loadImage("sprite_3.png");
 personagemParedeEsquerda = loadImage("sprite_4.png");
}

function setup()
{
  createCanvas(400, 600);

  paredeEsquerda = createSprite(15, 300, 30, 600);
  paredeEsquerda.visible = true;
  
  paredeDireita = createSprite(385, 300, 30, 600);
  paredeDireita.visible = true;

  solo = createSprite(200, 599, 400, 1);
  solo.visible = true;

  player = createSprite(185, 70, 50, 50);
  player.scale = 0.2;
  player.addImage("inicio", personagemComeco);
  player.addImage("puloE", personagemPulandoEsquerda);
  player.addImage("puloD", personagemPulandoDireita);
  player.addImage("paredeE", personagemParedeEsquerda);
  player.addImage("paredeD", personagemParedeDireita);

  player.changeImage("inicio", personagemComeco);

  player.velocityY = 10;

}

function draw()
{
  background("black");

  //image(fundo, 0, 0, width, height);

  if(player.y > 550)
  {
  player.changeImage("inicio", personagemComeco);
  }

  movimentacao();

  colisao(paredeEsquerda);
  colisao(paredeDireita);

  console.log(player.x);
  console.log(player.y);

  //camera.x = width/2;
  //camera.y = player.y;

  player.collide(solo);

  drawSprites();

}

function movimentacao()
{
  if(keyDown("space") && direcaoPulo === right)
  {
    player.setVelocity(10,-5); 
  }

  if(keyDown("space") && direcaoPulo === left)
  {
    player.setVelocity(-10,-5); 
  }

  if(player.position.y < 550 && direcaoPulo === left && player.position.x < 320)
  {
    player.changeImage("puloE", personagemPulandoEsquerda);
  }

  if(player.position.y < 550 && direcaoPulo === right && player.position.x > 70) 
  {
    player.changeImage("puloD", personagemPulandoDireita);
  }
}

function colisao(p)
{   
  
  if(player.collide(p))
  {
    
    colidiu = true;

    if(colidiu = true){
      
      player.setVelocity(0,-0.2);
      setTimeout(() => {
        player.setVelocity(0,2);
      }, 2500)
    }

    if(p === paredeEsquerda)
    {
      direcaoPulo = right;
      player.changeImage("paredeE", personagemParedeEsquerda);
    }
    if(p === paredeDireita)
    {
      direcaoPulo = left;
      player.changeImage("paredeD", personagemParedeDireita);
    }
  }

}








