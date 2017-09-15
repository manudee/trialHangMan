//Variables needed for the game
var computerChoice;
var computerPicked = [];
var currentWord = [];
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;



var images = ['assets/images/asia.jpg', 'assets/images/australia.jpg','assets/images/America.jpg','assets/images/Antarctica.jpg' ,'assets/images/africa.jpg' ,'assets/images/europe.jpg'  ];



computerChoice = ['Asia','Australia','AMERICA','Antarctica','Africa','Europe'];
computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();


var snd = new Audio("assets/images/Victory Sound Effect.mp3"); // buffers automatically when created
var gameOn = false;



//function reset to reset the number of guesses, create new word for a new game
function reset(){
    computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();
    numberOfGuessesRemaining = 10;
    letterAlreadyGuessed = [];
    currentWord = [];
    console.log("In reset now");
    for(i=0; i<computerPicked.length; i++)
    {   
      currentWord[i] = "-";
      
    }

var currentWord_html = "<h2>currentWord: " + currentWord + "</h2>";
    document.querySelector("#current_word").innerHTML = currentWord_html;

var wins_html = "<h2>Wins: " + wins + "</h2>";
document.querySelector("#wins").innerHTML = wins_html;


var losses_html=  "<h2>Losses: " + losses + "</h2>";
document.querySelector("#losses").innerHTML = losses_html;

var letters_guessed_html=  "<h2>Letters Guessed: " + letterAlreadyGuessed + "</h2>";
document.querySelector("#letters_guessed").innerHTML = letters_guessed_html;

var guesses_remaining_html = "<h2>Guesses Remaining: " + numberOfGuessesRemaining + "</h2>";
document.querySelector("#numberOfGuessesRemaining").innerHTML = guesses_remaining_html;

    canvasReset();

}


//to reset the canvas area when user has lost or won the game
function canvasReset() {
   var c = document.getElementById("hangmanDrawing");
    console.log("In canvas reset  now");
       var ctx = c.getContext('2d');
       ctx.clearRect(0, 0, 400, 400);
       ctx.beginPath();
     console.log("After canvas reset  now");
  
}

//to draw the horizontal line on the canvas
function horizontalLine1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
            ctx.moveTo(200,400);
            ctx.lineTo(0,400);
            ctx.stroke();

  }

}

//to draw the vertical pole on the canvas

function verticalPole(){
   var c = document.getElementById("hangmanDrawing");

           if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(0,400);
           ctx.lineTo(0,0);
           ctx.stroke();
}
}

//to draw the upper horizontal line
function horizontalLine2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
            ctx.moveTo(0,0);
            ctx.lineTo(200,0);
            ctx.stroke();


  }

}

//to draw the small vertical line
function verticalLine(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,0);
           ctx.lineTo(200,80);
           ctx.stroke();

  }

}

//to draw hangman head
function head(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.beginPath();
           ctx.arc(200,120,40,0,2*Math.PI);
           ctx.stroke(); 
  }

}

//to draw hangman body vertical line
function verticalLine3(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,160);
           ctx.lineTo(200,350);
           ctx.stroke();

}

}

//to draw first lefthand
function leftHand1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,180);
           ctx.lineTo(150,220);
           ctx.stroke();

}

}

//to draw first righthand
function rightHand1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,180);
           ctx.lineTo(250,220);
           ctx.stroke();

}

}

//to draw second lefthand
function leftHand2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,300)
           ctx.lineTo(150,350);
           ctx.stroke();

}

}

//to draw second righthand
function rightHand2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
      //console.log("In right hand function");
            var ctx = c.getContext('2d');
           ctx.moveTo(200,300)
           ctx.lineTo(250,350);
           ctx.stroke();


}

}


function victoryImage(computerPicked){
   console.log(computerPicked);
   
   console.log(computerChoice[1].toLowerCase());

   var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
        var ctx = c.getContext('2d');

         for (var i = 0; i < computerChoice.length; i++) {
         if((computerPicked) === computerChoice[i].toLowerCase()){

                console.log("I am in comparison");
                      var img1 = new Image();
                      img1.src = images[i];
               
                 img1.onload = function () {
                    //draw background image
                    ctx.drawImage(img1, 0, 0);
                    img1.src = [];
                    console.log("Image reset done");
                }; 


           }


 }

 }
} 





function addParts(num){
  switch(num){
    case 9:
      horizontalLine1();
      break;
    case 8:
      verticalPole();
      break;
    case 7:
      horizontalLine2();
      break;
    case 6:
      verticalLine();
      break;
    case 5:
      head();
      break;
    case 4:
      verticalLine3();
      break;
    case 3:
      leftHand1();
      break;
    case 2:
      rightHand1();
      break;
    case 1:
      leftHand2();
      break;
    case 0:
      console.log("inCase " + numberOfGuessesRemaining);
      rightHand2();
      console.log("rIGHT HAND2 DRAWN " + numberOfGuessesRemaining);
      break;

   
   }
}


for(i=0; i<computerPicked.length; i++)
{   
    currentWord[i] = "-";
    
}






document.onkeyup = function(event){

    var userGuessed = event.key;
    userGuessed = userGuessed.toLowerCase();






    var ltrthere = computerPicked.includes(userGuessed);



if(numberOfGuessesRemaining!=0 || ((currentWord.join("")) != computerPicked)){
      if(ltrthere){
        for (var i = 0; i < computerPicked.length; i++) {
               if(computerPicked[i] === userGuessed )
                   currentWord[i] = currentWord[i].replace("-",userGuessed)  
           }


      }

else {
      if(!(letterAlreadyGuessed.includes(userGuessed)) && numberOfGuessesRemaining!=0  ){
           letterAlreadyGuessed.push(userGuessed); 
           console.log("Guesses remaining BEGINNING --" + numberOfGuessesRemaining);
           numberOfGuessesRemaining--;
           console.log("Guesses remaining BEFORE ADDING PARTS -- " + numberOfGuessesRemaining);
           addParts(numberOfGuessesRemaining);
           console.log("Guesses remaining after ADDING PARTS -- " + numberOfGuessesRemaining);
    }

}

if(numberOfGuessesRemaining === 0 ){
    console.log("Guesses are 0");
    addParts(numberOfGuessesRemaining);
    losses++;
    console.log("You Lost!");
   reset();
   
}

else if ((currentWord.join("")) === computerPicked) {
    console.log("You Won");
    wins++;
    console.log(wins);
    snd.play();

    victoryImage(computerPicked);
    
    console.log("I am done with comparison, calling reset now");
   
    reset()
 }



currentWord_html = "<h2>currentWord: " + currentWord + "</h2>";
document.querySelector("#current_word").innerHTML = currentWord_html;


wins_html = "<h2>Wins: " + wins + "</h2>";
document.querySelector("#wins").innerHTML = wins_html;


losses_html=  "<h2>Losses: " + losses + "</h2>";
document.querySelector("#losses").innerHTML = losses_html;

letters_guessed_html=  "<h2>Letters Guessed: " + letterAlreadyGuessed + "</h2>";
document.querySelector("#letters_guessed").innerHTML = letters_guessed_html;

guesses_remaining_html = "<h2>Guesses Remaining: " + numberOfGuessesRemaining + "</h2>";
document.querySelector("#numberOfGuessesRemaining").innerHTML = guesses_remaining_html;

}



}


