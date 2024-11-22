document.querySelector("h1").textContent = "Refresh Me";
var random1=Math.floor(Math.random()*6+1);
var imgName="dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgName);


var random2=Math.floor(Math.random()*6+1);
var imgName2="dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgName2);


if(random1>random2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="draw!";
}