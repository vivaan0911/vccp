x=0;
y=0;
draw_apple="";
to_number="";
screen_width=0;
screen_height=0;
speak_data="";

function preload(){
    apple= loadImage("apple.png");
}

var SpeecRecognition= window.webkitSpeechRecognition;
var recognition= new SpeecRecognition();

function start(){
    document.getElementById("status").innerHTML= "System is Listening. Please Speak";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    
    content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "The Speech Has Been Recognised: " + content;
    to_number=Number(content);
    
    if (Number.isInteger(to_number)){
        document.getElementById("status").innerHTML= "Started Drawing Apple";
        draw_apple="set";
    } else{
        document.getElementById("status").innerHTML= "Speech Not Recognised As Number"
    }
}

function setup(){
    screen_width= window.innerWidth;
    screen_height= window.innerHeight;
    createCanvas(screen_width, screen_height-150);
}

function draw(){
    if(draw_apple == "set"){
        for(var i=1; i <=to_number; i++){
            x=  Math.floor(Math.random()*700);
            y= Math.floor(Math.random()*400);
            image(apple,x,y,50,50)
        }
        document.getElementById("status").innerHTML= "Apples Drawn";
        draw_apple="";
    }
}