var wins = 0;
var losses = 0; 
var playernum = 0;
var min=1; 
var max=120;  
var random = 
Math.floor(Math.random() * (+max - +min)) + +min; 
$("#random-num").text("Random Number: " + random);
$("#player-num").text("Your total: " + playernum);
$("#winstext").text("Wins: " + wins);
$("#lossestext").text("Losses: " + losses);



//make weapval assign to a click event for each weap
//sword 0, lance 1, axe 2, bow 3
//add thingy that tells player on click the value of the weapon. make sure this resets each time 
//maybe make it look like damage numbers? smile 




var weapval = [
    Math.floor(3 + Math.random() * 12),
    Math.floor(3 + Math.random() * 11),
    Math.floor(3 + Math.random() * 10),
    Math.floor(3 + Math.random() * 9)
   ];
   console.log(weapval)

