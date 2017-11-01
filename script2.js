/*var userHealth = 40;
var enemyHealth = 10;
var playing = true;
var wins = 0;

startGame();

function startGame () {
  var yesOrNo = prompt("Would you like to play?");
if (yesOrNo !== "no") {
var name = prompt("Please enter your name.");
  startBattle(name);

} else {
  console.log("bye bye");
  playing = false;
} 
}

function startBattle(name){
    while (playing) {
    if (wins === 3) {
      console.log("You win.");
      break;
      }
    var playOrQuit = prompt("Do you want to attack or quit?");
    if (playOrQuit == "attack") {
      userHealth -= getDamage();
      enemyHealth -= getDamage();
      console.log("Ouch! " + name + " gets hit health is " + userHealth);
      console.log("You attacked Grant, his health is now " + enemyHealth); 
      
    } else {
     console.log("byebye, sucker");
      break;
    } if (enemyHealth <= 0) {
      wins++
      enemyHealth = 10;
      console.log("You won the battle");
      } 
      if (userHealth <= 0 ) {
      console.log("The game is over. You lose");
         break; 
        }
  }
}
function getDamage() {
  return Math.floor(Math.random()*5)+1;
}*/



var user = {
  wins: 0,
  health: 40,
  healsRemaining: 2,
  name: 0,
  generateAttackDamage: function () {
    return Math.floor(Math.random()*3)+1;
}
}
startGame();
var enemy = {
health: 10,
name: Grant,
generateAttackDamage: function () {
  return Math.floor(Math.random()*3)+1;
}
}

function getDamage() {
  return Math.floor(Math.random()*3)+1;
}

function startGame(){
  var yesOrNo = prompt("Would you like to play?");
if (yesOrNo !== "no"){
    user.name = prompt("please enter your name");
    startBattle();
}
}
  function startBattle(){
    while (user.wins < 6) {
    if (user.wins === 5) {
      console.log("You win.");
      break;
      }
    var choice = prompt("Do you want to attack, quit or heal?");
    if (choice === "attack") {
      user.health -= user.generateAttackDamage();
      enemy.health -= enemy.generateAttackDamage();
      console.log("Ouch! " + name + " gets hit health is " + user.health);
      console.log("You attacked Grant, his health is now " + enemy.health); 
    } 
    if (choice == "heal") {
      while(user.healsRemaining > 0) {
       Math.floor(Math.random()*10)+1;
      --user.healsRemaining;
      user.heath -= generateAttackDamage();
    }

    } if (choice === "quit") {
     console.log("byebye, sucker");
      break;

    } if (enemyHealth <= 0) {
      user.wins++
      enemyHealth = 10;
      console.log("You won the battle");
      } 
      if (userHealth <= 0 ) {
      console.log("The game is over. You lose");
         break;
        }
  }
  }