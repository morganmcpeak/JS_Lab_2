var yesOrNo = prompt("Would you like to play?");
var userHealth = 40;
var enemyHealth = 10;
var playing = true;
var wins = 0;

startGame();
  var name = prompt("Please enter your name.");

startBattle();
attackOrQuit();


function startGame () {
  if (yesOrNo === "yes") {
  }
}
function startBattle() {
  while (playing === true) {
    if (wins === 3) {
      console.log("You win.");
      break;
    } 
      userHealth -= getDamage();
      enemyHealth -= getDamage();
     
      console.log("Ouch! " + name + " gets hit health is " + userHealth);
      console.log("You hit Grant, his health is now " + enemyHealth);
      
      if (userHealth <= 0 ) {
      console.log("The game is over. You lose");
         playing = false; 
    }
      if (enemyHealth <= 0) {
        enemyHealth = 10;
        console.log("You won the battle");
        wins++
    } 
  }
}
function getDamage () {
  return Math.floor(Math.random()*5)+1;
}
function attackOrQuit() {
  var playOrQuit = prompt("Do you want to attack or quit?");
  if (playOrQuit === "attack") {
    enemyHealth--;
    console.log("You attacked! Grant suffers! his health is now " + enemyHealth);
    } else {
      playing = false;
     console.log("byebye, sucker");
  }
}


