noseX = "";
noseY = "";

function preload() {
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();

    coin_collect = loadSound("coin.wav");
    game_over = loadSound("gameover.wav");
    mario_jump = loadSound("jump.wav");
    mario_kick = loadSound("kick.wav");
    mario_die = loadSound("mariodie.wav");
}

function setup() {
    canvas = createCanvas(1240, 336);
    instializeInSetup(mario);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    //video.hide();
    video.size(800, 400);

    video.parent("gameConsole");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model is initialized");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    game()
}