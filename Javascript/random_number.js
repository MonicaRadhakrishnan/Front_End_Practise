
let rollDice;

document.getElementById("btn").onclick = function(){
    rollDice = Math.floor(Math.random() * 6) + 1 ;
    document.getElementById("dice").innerHTML = rollDice;
}