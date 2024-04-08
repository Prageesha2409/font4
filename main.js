function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
      
    canvas=createCanvas(550,150);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modalLoaded() {
    console.log('PoseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
        noseX=resutls[0].pose.nose.x;
        noseY=resutls[0].pose.nose.Y;
        console.log("noseX="+noseX+"noseY="+noseY);
      
    leftWristX=resutls[0].pose.leftWrist.X;
    rightWristX=resutls[0].pose.leftWrist.X;
    difference=floor(leftWristX-rightWristX);

    console.log("leftWristX="+ leftWristX+"rightWristX=" + rightWristX+"differnce="+difference);

    }

}

