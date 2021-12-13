video = "";
status1 = "";
objects = [];
object_name = ""

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(480,380);
}

function draw() {
    image(video, 0, 0, 480, 380);

    if (status1 !="")
    {
        detectorobjector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            if(objects[i].label == object_name)
            {
            document.getElementById("number_of_objects").innerHTML = "found ="+ object_name;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
    }
}

function start()
{
    detectorobjector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : identifying objects...";
    object_name=document.getElementById("kidzbop").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
}

function gotResult(error, results)
{
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}