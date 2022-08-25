nx=0;
ny=0;
wlx=0;
wrx=0;
d=0;
r='halllllooooooooooooooooooooooooooooooooooooooooooooooooooooooo'

function preload(){
    g=loadImage('1.png');
}
function setup(){
    video=createCapture(VIDEO);
    video.size(570,515);
    video.position(1250,175);

    canvas=createCanvas(570,515);
    canvas.position(200, 175);
    
    posenet=ml5.poseNet(video, ln);
    posenet.on('pose',nl);
}
function draw(){
    background('azure');

    image('1.png',200,200,0,0);
    console.log("left wrist X - "+wlx);
    console.log("right wrist X - "+wrx);
    console.log("Nose X - "+nx);
    console.log("Nose Y - "+ny);
    console.log("Difference - "+d);
    text(r,10,10,70,80);
}
function ln(){
    console.log('◊');
}
function nl(results){
    if(results.length>0){
    console.log('◊ 2.0');
    console.log(results);

    wlx=results[0].pose.leftWrist.x;
    wrx=results[0].pose.rightWrist.x;
    nx=results[0].pose.nose.x;
    ny=results[0].pose.nose.y;
    d=floor(wlx-wrx);
    tex=document.getElementById("lare");
text=document.getElementById("flare").innerHTML="The size of the text is "+d;
    }

}