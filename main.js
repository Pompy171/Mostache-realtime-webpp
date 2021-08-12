noseX=0;
noseY=0;

function preload() {
    mostache_nose=loadImage('https://i.postimg.cc/pXjk2Qt7/m.png');
}

//

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    //webcam
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    //loading posenet
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", gotposes);
}

function model_loaded() {
    console.log("poseNet is loaded.");
}

function draw() {
    image(video, 0, 0, 300, 300);
    //circle(noseX,noseY,50,50);
    image(mostache_nose,noseX,noseY,100,50);
}

function take_snapshot() {
    save("filter.png");
    
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        noseX= results[0].pose.nose.x-50;
        noseY= results[0].pose.nose.y-10;

        console.log("nose x position - " + noseX);
        console.log("nose y position - " + noseY);
    }
}