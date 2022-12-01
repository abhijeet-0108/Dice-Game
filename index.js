let randomNumber1 = parseInt(Math.random()*6)+1
let randomDiceImage = "dice"+randomNumber1+".png" ;
let randomImagesource = "images/"+randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource)

let randomNumber2 = parseInt(Math.random()*6)+1

let randomImagesource2 = "images/dice"+randomNumber2+".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("🚩Player 1 Wins");
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=("🚩Player 2 Wins");
}else{
    document.querySelector("h1").innerHTML=("🚩DRAW");
}