// PASSWORD SCREEN

var enter = document.getElementById("EnterText");

if(enter){
enter.addEventListener("click",function(){
document.getElementById("passwordBox").style.display="block";
});
}

function checkPassword(){

var pass=document.getElementById("password").value;

if(pass==="billikimausimeow"){

window.location.href="main.html";

}else{

document.getElementById("error").innerText="Wrong password ❌";

}

}



// TYPING MESSAGE (MAIN PAGE)

var text="";


var i=0;

function typeEffect(){

var box=document.getElementById("typingText");

if(box && i<text.length){

box.innerHTML+=text.charAt(i);

i++;

setTimeout(typeEffect,40);

}

}

typeEffect();



// CONFETTI EFFECT

var canvas=document.getElementById("confetti");

if(canvas){

var ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

var pieces=[];

for(var j=0;j<100;j++){

pieces.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*3+1

});

}

function update(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(function(p){

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";

ctx.fillRect(p.x,p.y,p.size,p.size);

p.y+=p.speed;

if(p.y>canvas.height){

p.y=0;

}

});

requestAnimationFrame(update);

}

update();

}



// LOVE LETTER SYSTEM

var letterText = "Dear Bhaijaan ❤️\n\nAap meri life ke bahut special insaan ho. Aapko birthday ki bahut bahut wishes. Allah aapko hamesha khush rakhe. Happy Birthday! 🎉";

var letterIndex = 0;

function openLetter(){

document.getElementById("envelope").style.display="block";

typeLetter();

}

function typeLetter(){

var box=document.getElementById("typingLetter");

if(letterIndex < letterText.length){

box.innerHTML += letterText.charAt(letterIndex);

letterIndex++;

setTimeout(typeLetter,40);

}

}