function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function modelLoaded() {
   console.log("Posenet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
          console.log(results);
          console.log("nose x = " + results[0].pose.nose.x);
          console.log("nose y = " + results[0].pose.nose.y);
    }
}