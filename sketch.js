// var bgimg;
// var shooterimg1;
// var shootingimg;
// var bg;
// var shooter;
// var hrt1, hrt2, hrt3;
// var heart;
// var heart2;
// var heart3;
// var zomb;
// var zombie;
// var zombgrp;
// var bullet;
// var bulletgrp;
// var bulletl = 30;
// var gameState = "fight";
// var life = 3;
// var losemp3;
// var explodmp3;
// var winmp3;

// function preload() {
//     bgimg = loadImage("assets/bg.jpeg");
//     shooterimg1 = loadImage("assets/shooter_2.png");
//     shootingimg = loadImage("assets/shooter_3.png");
//     hrt1 = loadImage("assets/heart_1.png");
//     hrt2 = loadImage("assets/heart_2.png");
//     hrt3 = loadImage("assets/heart_3.png");
//     zomb = loadImage("assets/zombie.png");
//     losemp3 = loadSound("assets/lose.mp3");
//     winmp3 = loadSound("assets/win.mp3");
//     explodmp3 = loadSound("assets/explosion.mp3");
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 50, 50);
//     bg.addImage(bgimg)
//     bg.scale = 1.1;


//     shooter = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
//     shooter.addImage(shooterimg1)
//     shooter.scale = 0.3;

//     shooter.debug = true;
//     shooter.setCollider("rectangle", 0, 0, 300, 350);

//     heart = createSprite(displayWidth - 150, displayHeight - 700, 20, 20);
//     heart.addImage(hrt1);
//     heart.scale = 0.4;


//     heart2 = createSprite(displayWidth - 150, displayHeight - 800, 20, 20);
//     heart2.addImage(hrt2);
//     heart2.scale = 0.4;
//     heart2.visible = false;

//     heart3 = createSprite(displayWidth - 150, displayHeight - 700, 20, 20);
//     heart3.addImage(hrt3);
//     heart3.scale = 0.4;
//     heart3.visible = false;


//     zombgrp = new Group();
//     bulletgrp = new Group();
// }

// function draw() {
//     background("white");

//     if(gameState === "fight"){

//         if (keyDown("UP_ARROW")) {
//             shooter.y = shooter.y - 10;
//         }

//         if (keyDown("DOWN_ARROW")) {
//             shooter.y = shooter.y + 10;
//         }
//         if(life===3){
//           heart.visible=false;
//           heart2.visible=false;
//           heart3.visible=true;
//         }else if(life===2){
//             heart.visible=false;
//             heart2.visible=true;
//             heart3.visible=false;
//         }else{
//             heart.visible=true;
//             heart2.visible=false;
//             heart3.visible=false;
//         }


//     }
//         if (keyWentDown("space")) {
//             shooter.addImage(shootingimg);
//             bullets();
//             bulletl-1;
//             shooter.depth = bullet.depth;
//             shooter.depth = shooter.depth+1;
//         } else
//             if (keyWentUp("space")) {
//                 shooter.addImage(shooterimg1);
//             };

//          if(bulletl === 0){
//              gameState = "bullet";
//          }

//         fill("white")
//         text("bullet :"+bulletl ,windowWidth-100,windowHeight-600);




//     zombcollideshooter();
//     bulletCollide();
//     zombmove();
//     drawSprites();

//     if(gameState === "bullet"){
//         text("You ran out of bullets!!",400,400);
//         bulletgrp.destoryEach();
//         zombgrp.destroyEach();
//         shooter.destroy();

//      }else if(gameState === "lost"){
//        text("You LOst!!",400,400);
//        shooter.destroy();
//        zombgrp.destroyEach();
//        bulletgrp.destoryEach();
//      }else if(gameState === "won"){
//          text("Congratulations!!,  YOu have won",400,400);
//          shooter.destroy();
//          zombgrp.destroyEach();
//          bulletgrp.destroyEach();
//      }

// }

// function zombmove() {


//     if (frameCount % 60 === 0) {
//         zombie = createSprite(random(500, 2000), random(100, 500), 50, 50);
//         zombie.addImage(zomb);
//         zombie.scale = 0.15;
//         zombie.velocityX = -5;

//         zombie.debug = true;
//         zombie.setCollider("rectangle", 0, 0, 400, 400);
//         zombie.lifetime = 420;
//         zombgrp.add(zombie);

//     }

// }

// function zombcollideshooter() {
//     // if (shooter.isTouching(zombgrp)) {
//     for (var i = 0; i < zombgrp.length; i++) {
//         if (zombgrp[i].isTouching(shooter)) {
//             zombgrp[i].destroy();
//             life=life-1;
//         }
//     }
//     // }

// }

// function bullets(){
//     bullet = createSprite(displayWidth-1000,shooter.y-25,15,10);
//     bullet.velocityX=10;
//     bulletgrp.add(bullet);


// }
// function bulletCollide(){
//     for (var i = 0; i < zombgrp.length; i++) {
//         if (zombgrp[i].isTouching(bullet)) {
//             zombgrp[i].destroy();
//             bulletgrp.destroyEach();
//         }

//     }

// }





var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var bullets = 70;

var gameState = "fight"

var life = 3;

var losemp3;
var explodmp3;
var winmp3;

var score =0;

function preload() {

    heart1Img = loadImage("assets/heart_1.png")
    heart2Img = loadImage("assets/heart_2.png")
    heart3Img = loadImage("assets/heart_3.png")

    shooterImg = loadImage("assets/shooter_2.png")
    shooter_shooting = loadImage("assets/shooter_3.png")

    zombieImg = loadImage("assets/zombie.png")

    bgImg = loadImage("assets/bg.jpeg")


    losemp3 = loadSound("assets/lose.mp3");
        winmp3 = loadSound("assets/win.mp3");
        explodmp3 = loadSound("assets/explosion.mp3");
}

function setup() {


    createCanvas(windowWidth, windowHeight);

    //adding the background image
    bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
    bg.addImage(bgImg)
    bg.scale = 1.1


    //creating the player sprite
    player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
    player.addImage(shooterImg)
    player.scale = 0.3
    player.debug = true
    player.setCollider("rectangle", 0, 0, 300, 300)


    //creating sprites to depict lives remaining
    heart = createSprite(displayWidth - 150, 40, 20, 20)
    heart.visible = false
    heart.addImage("heart", heart1Img)
    heart.scale = 0.4

    heart2 = createSprite(displayWidth - 100, 40, 20, 20)
    heart2.visible = false
    heart2.addImage("heart2", heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth - 150, 40, 20, 20)
    heart3.addImage("heart3", heart3Img)
    heart3.scale = 0.4


    //creating groups for zombies and bullets
    bulletGroup = new Group()
    zombieGroup = new Group()



}

function draw() {
    background(0);


    if (gameState === "fight") {

        //moving the player up and down and making the game mobile compatible using touches
        if (keyDown("UP_ARROW") || touches.length > 0) {
            player.y = player.y - 30
        }
        if (keyDown("DOWN_ARROW") || touches.length > 0) {
            player.y = player.y + 30

        }


        //release bullets and change the image of shooter to shooting position when space is pressed
        if (keyWentDown("space")) {
            bullet = createSprite(displayWidth - 1150, player.y - 30, 20, 10)
            bullet.velocityX = 20

            bulletGroup.add(bullet)
            player.depth = bullet.depth
            player.depth = player.depth + 2
            player.addImage(shooter_shooting)
            bullets = bullets - 1
        }

        //player goes back to original standing image once we stop pressing the space bar
        else if (keyWentUp("space")) {
            player.addImage(shooterImg)
        }

        //go to gameState "bullet" when player runs out of bullets
        if (bullets == 0) {
            gameState = "bullet"

        }

        //destroy the zombie when bullet touches it
        if (zombieGroup.isTouching(bulletGroup)) {
            for (var i = 0; i < zombieGroup.length; i++) {

                if (zombieGroup[i].isTouching(bulletGroup)) {
                    zombieGroup[i].destroy()
                    bulletGroup.destroyEach()
                    score=score+10;
                    explodmp3.play();
                }

            }
        }
        
        //destroy zombie when player touches it
        if (zombieGroup.isTouching(player)) {

            for (var i = 0; i < zombieGroup.length; i++) {

                if (zombieGroup[i].isTouching(player)) {
                    zombieGroup[i].destroy()
                    life = life - 1;
                }

            }
        }

        //calling the function to spawn zombies
        enemy();
        if(life===3){
                      heart.visible=false;
                      heart2.visible=false;
                      heart3.visible=true;
                    }else if(life===2){
                        heart.visible=false;
                        heart2.visible=true;
                        heart3.visible=false;
                    }else{
                        heart.visible=true;
                        heart2.visible=false;
                        heart3.visible=false;
                        
                    }
                 
    if(score ===200){
        gameState = "won";
        winmp3.play();
    }
    if(life===0){
        gameState = "lost";
        losemp3.play();

    }   
    }

    

    drawSprites();


    //destroy zombie and player and display a message in gameState "lost"
    if (gameState == "lost") {
        
        textSize(100)
        fill("red")
        text("You Lost ", 400, 400)
        zombieGroup.destroyEach();
        player.destroy();
    }

    //destroy zombie and player and display a message in gameState "won"
    else if (gameState == "won") {
      
        textSize(100)
        fill("yellow")
        text("You Won ", 400, 400)
        zombieGroup.destroyEach();
        player.destroy();

    }

    //destroy zombie, player and bullets and display a message in gameState "bullet"
    else if (gameState == "bullet") {

        textSize(50)
        fill("yellow")
        text("You ran out of bullets!!!", 470, 410)
        zombieGroup.destroyEach();
        player.destroy();
        bulletGroup.destroyEach();

    }
    textSize(26);
    fill("white");
    text("Bullets :"+ bullets,displayWidth-210,displayHeight/2-250);
    text("Score :" + score,displayWidth-200,displayHeight/2-220);
}


//creating function to spawn zombies
function enemy() {
    if (frameCount % 50 === 0) {

        //giving random x and y positions for zombie to appear
        zombie = createSprite(random(500, 1100), random(100, 500), 40, 40)

        zombie.addImage(zombieImg)
        zombie.scale = 0.15
        zombie.velocityX = -3
        zombie.debug = true
        zombie.setCollider("rectangle", 0, 0, 400, 400)

        zombie.lifetime = 400

        zombieGroup.add(zombie)
    }

}


