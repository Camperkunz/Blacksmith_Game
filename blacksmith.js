// Here your variables
let $gold = 0;
let $stamina = 20;
//
let $wood = 0;
let $copperOre = 0;
let $ironOre = 0;
let $copperAxe = 0;
let $ironAxe = 0;
let $copperIngot = 0;
let $ironIngot = 0;
let $copperSword = 0;
let $ironSword = 0;
let $food = 0;
//fire status
let $fireStatus = false;
//molds
let $swordMold = 0;
let $axeMold = 0;
//mine status
let $inMine = false;

//End of variables


// Log the help() function
console.log(help());
//End of log help() 




// INVENTORY DISPLAY
function inventory() {
  console.log(`
    YOUR CURRENT STAMINA:
    Stamina: ${$stamina}

    FIRE STATUS:
    Fire: ${$fireStatus}

    ARE YOU IN MINE?
    ${$inMine}

    YOUR CURRENT INVENTORY:
    Gold: ${$gold}
    Food ${$food}
    Wood: ${$wood}
    Ores
      - Copper Ore: ${$copperOre}
      - Iron Ore: ${$ironOre}
    Ingots
      - Copper Ingot ${$copperIngot}
      - Iron Ingot ${$ironIngot}
    Molds
      - Sword Mold: ${$swordMold};
      - Axe Mold: ${$axeMold};
    Axes
      - Copper Axe: ${$copperAxe}
      - Iron Axe: ${$ironAxe}
    Swords
      - Copper Sword: ${$copperSword}
      - Iron Sword: ${$ironSword}
  `);
}
//END OF INVENTORY

//START OF FOREST 
function forest() {
  if ($stamina > 0 && $fireStatus == false && $inMine == false){
    let $woodCollected = Math.floor(Math.random() * 6) + 1;  //random
    $wood += $woodCollected;
    let $foodCollected = Math.floor(Math.random() * 9) + 1;
    $food += $foodCollected;
    $stamina -= 3; 
    return(`Good work! You collected ${$woodCollected} wood. You also did some hunting and gathered ${$foodCollected} food. But You tired and lost 3 stamina.`);
  }
  else if ($stamina <= 0){
    return('You too tired for that. You should eat first.');
  }
  else if ($fireStatus == true){
    return(`You must put out the fire first.`)
  }
  else if ($inMine == true){
    return("Maybe you want to leave mines first? :)")
  }
}
//END OF FOREST

//START OF MINES
function mines() {
  if ($stamina > 0 && $fireStatus == false && $inMine == false){
    $inMine = true;
    console.log (` 
    You have entered the mine. Which way do you want to go?

    Type goLeft(), goRight(), or goStraight() to explore the mine.
    "Or use leaveMine() to leave"`)
  }
  else if($stamina <= 0 ){
    return "You too teried for that. You should eat a bit first."
  }
  else if ($fireStatus == true){
    return(`You must put out the fire first.`)
  } 
}
function goLeft() {
  if (!$inMine) {
    return console.log("You need to enter the mine first! Type mines().");
  }

  if ($stamina <= 0) {
    return console.log("You are too tired now. You have to eat something.");
  }

  console.log("You take the left path...");
  let copper = Math.floor(Math.random() * 5) + 1; // 1-5 copper
  let iron = Math.floor(Math.random() * 4); // 0-3 iron
  let lostStamina = Math.floor(Math.random() * 4) + 1; // 1-3 stamina lost
  console.log(`You found ${copper} copper ore and ${iron} iron ore! But you lost ${lostStamina} stamina`);
  $stamina -= lostStamina;
  $copperOre += copper;
  $ironOre += iron;
}

function goRight() {
  if (!$inMine) {
    return console.log("You need to enter the mine first! Type mines().");
  }

  if ($stamina <= 0) {
    return console.log("You are too tired now. You have to eat something.");
  }

  console.log("You take the left path...");
  let copper = Math.floor(Math.random() * 8); 
  let iron = Math.floor(Math.random() * 5); 
  let lostStamina = Math.floor(Math.random() * 4) + 1; 
  console.log(`You found ${copper} copper ore and ${iron} iron ore! But you lost ${lostStamina} stamina`);
  $stamina -= lostStamina;
  $copperOre += copper;
  $ironOre += iron;
}

function goStraight() {
  if (!$inMine) {
    return ("You need to enter the mine first! Type mines().");
  }

  if ($stamina <= 0) {
    return ("You are too tired now. You have to eat something.");
  }

  console.log("You take the left path...");
  let copper = Math.floor(Math.random() * 6);
  let iron = Math.floor(Math.random() * 3); 
  let lostStamina = Math.floor(Math.random() * 4) + 1; 
  console.log(`You found ${copper} copper ore and ${iron} iron ore! But you lost ${lostStamina} stamina`);
  $stamina -= lostStamina;
  $copperOre += copper;
  $ironOre += iron;
}

function leaveMine() {
  if (!$inMine) return console.log("You are not in the mine to leave.");
  $inMine = false;
  return ("You have left the mine.");
}

//END OF MINES

//START OF FIRE
function fire() {
  if ($fireStatus == false && $wood > 0 && $stamina > 0 && $inMine == false) {
    $fireStatus = true;
    $wood--;
    $stamina--;
    return 'Now the fire is going! Do not forget about that! You lost 1 wood and 1 stamina.';
  }
  else if ($fireStatus == true) {
    $fireStatus = false;
    return "You stopped the fire.";
  }
  else if ($stamina <= 0) {
    return "You are too tired for that. Eat something first.";
  }
  else if ($wood <= 0) {
    return 'You do not have enough wood! You have to have at least 1 wood. Go to the forest or buy some wood first.';
  }
  else if ($inMine == true){
    return("Maybe you want to leave mines first? :)")
  }
}
//FIRE END

//START OF EAT
function eat() {
  if ($food > 0) {
    $food--;
    $stamina += 5;
    return "You ate some food. Your stamina increased by 5!";
  } else {
    return "You don't have any food to eat! Buy something or hunt!";
  }
}
//EAT ENDS

// MELTING STARTS
function melting() {
  if ($fireStatus == true && $inMine == false) {
    console.log (
    `What do you want to melt?
    Use meltCopper() or meltIron()

    5 Copper Ore = 1 Copper Ingot
    3 Iron Ore = 1 Iron Ingot`)
    
  }
  else if ($inMine == true) {
    return "You still in mines? Do you want to leaveMine() first?";
  }
  else if ($fireStatus == false) {
    return "You do not have fire() yet.";
  }
}

function meltCopper() {
  if ($copperOre >= 5 && $fireStatus == true && $inMine == false && $stamina >= 2) {
    $copperOre -= 5;
    $copperIngot++;
    $stamina -= 2;
    return "Nice! You melted 5 copper ore and got 1 copper ingot. Lost 2 stamina.";
  }
  else if ($copperOre < 5) {
    return "You do not have enough copper ore. You need at least 5.";
  }
  else if ($inMine == true) {
    return "You still in mines? Do you want to leaveMine() first?";
  }
  else if ($fireStatus == false) {
    return "You do not have fire() yet.";
  }
  else if ($stamina < 2){
    return "You are too tired for that. Eat something first.";
  }
}

function meltIron() {
  if ($ironOre >= 3 && $fireStatus == true && $inMine == false && $stamina >= 2) {
    $ironOre -= 3;
    $ironIngot++;
    $stamina -= 2;
    return "Nice! You melted 3 iron ore and got 1 iron ingot. Lost 2 stamina.";
  }
  else if ($ironOre < 3) {
    return "You do not have enough iron ore. You need at least 3.";
  }
  else if ($inMine == true) {
    return "You still in mines? Do you want to leaveMine() first?";
  }
  else if ($fireStatus == false) {
    return "You do not have fire() yet.";
  }
  else if ($stamina < 2){
    return "You are too tired for that. Eat something first.";
  }
}
//END OF MELTING

//START OF BUY
function buy(item){
  if (item === 'wood' && $gold >=1 && $fireStatus === false){
    $wood++;
    $gold -= 2;
    return "You bought 1 wood for 1 gold.";
  }
  else if (item === 'food' && $gold >=2 && $fireStatus === false){
    $food++;
    $gold -= 2;
    return "You bought 1 food for 2 gold";
  }
  else if (item === 'swordMold' && $gold >=5 && $fireStatus === false){
    $swordMold++;
    $gold -= 5;
    return "You bought 1 Sword Mold for 5 gold";
  }
  else if (item === 'axeMold' && $gold >=5 && $fireStatus === false){
    $axeMold++;
    $gold -= 4;
    return "You bought 1 Axe Mold for 4 gold";
  }
  else if($gold < 2 ){
    console.log(`
      BUY:
      1 Wood = 1 Gold
      1 Food = 2 Gold
      1 Sword Mold = 5 Gold
      1 Axe Mold = 4 Gold`)
    return "You don't have enough gold!";
  }
  else if ($fireStatus === true){
    return "You have to put out the fire first";
  }
  else{
    console.log(`
      BUY:
      1 Wood = 1 Gold
      1 Food = 2 Gold
      1 Sword Mold = 5 Gold
      1 Axe Mold = 4 Gold`)
    return "What do you want to buy? Use buy($item)";
  }
}
//END OF BUY

//START OF MAKE
function make(item){
  if (item === 'copperSword' && $fireStatus === true && $copperIngot >= 2 && $swordMold >= 1 && $wood >= 1 && $stamina > 0){
    $copperIngot -= 2;
    $swordMold--;
    $copperSword++;
    $wood--;
    $stamina -= 3;
    return "Good job! You made a Copper Sword! You used 2 Copper Ingots, 1 Sword Mold and 1 Wood. And you lost 3 Stamina.";

  }
  else if (item === 'ironSword' && $fireStatus === true && $ironIngot >= 2 && $swordMold >= 1 && $wood >= 1 && $stamina > 0){
    $ironIngot -= 2;
    $swordMold--;
    $ironSword++;
    $wood--;
    $stamina -= 5;
    return "Good job! You made an Iron Sword! You used 2 Iron Ingots, Sword Mold and 1 Wood. And you lost 5 Stamina.";;
  }
  else if (item === 'copperAxe' && $fireStatus === true && $copperIngot >= 1 && $axeMold >= 1 && $wood >= 2 && $stamina > 0){
    $copperIngot--;
    $axeMold--;
    $copperAxe++;
    $wood -= 2;
    $stamina -= 3;
    return "Good job! You made a Copper Axe! You used 1 Copper Ingot, 1 Axe Mold and 2 Woods. And you lost 3 Stamina.";
  }
  else if (item === 'ironAxe' && $fireStatus === true && $ironIngot >= 1 && $axeMold >= 1 && $wood >= 2 && $stamina > 0){
    $ironIngot--;
    $axeMold--;
    $ironAxe++;
    $wood -= 2;
    $stamina -= 5;
    return ("Good job! You made an Iron Axe! You used 1 Iron Ingot, 1 Axe Mold and 2 Woods. And you lost 5 Stamina.");
  
  }
  else if ($fireStatus === false){
    return "You do not have fire() yet.";
  }
  else if ($stamina <= 0){
    return "You are too tired for that. Eat something first.";
  }
  else if (($ironIngot < 2 && item === 'ironSword') || ($copperIngot < 2 && item === 'copperSword') ||
           ($ironIngot < 1 && item === 'ironAxe') || ($copperIngot < 1 && item === 'copperAxe')){
    return "You don't have enough Ingots. Maybe, try to make something else? Or melt more Ingots.";
  }
  else if (($swordMold < 1 && (item === 'ironSword' || item === 'copperSword')) ||
           ($axeMold < 1 && (item === 'ironAxe' || item === 'copperAxe'))){
    return "You don't have the required mold. Make sure you have the correct mold for the item you want to craft.";
  }
  else {
    console.log(`What do you want to make? Use make($item).
      Copper Sword = 2 Ingots + 1 Sword Mold + 1 Wood = 30 Gold
      Copper Axe = 1 Ingot + 1 Axe Mold + 2 Wood = 10 Gold
      
      Iron Sword = 2 Ingots + 1 Sword Mold + 1 Wood = 40 Gold
      Iron Axe = 1 Ingot + 1 Axe Mold + 2 Wood = 30 Gold`);
  }
}

//END OF MAKE 

//START OF SELL
function sell(item){
  if (item === 'copperSword' && $copperSword >= 1){
    $copperSword--;
    $gold += 20;
    return "Nice! You just sold a Copper Sword for 20 gold!";
  }
  else if (item === 'ironSword' && $ironSword >= 1){
    $ironSword--;
    $gold += 40;
    return "Nice! You just sold an Iron Sword for 40 gold!";
  }
  else if (item === 'copperAxe' && $copperAxe >= 1){
    $copperAxe--;
    $gold += 10;
    return "Nice! You just sold a Copper Axe for 10 gold!";
  }
  else if (item === 'ironAxe' && $ironAxe >= 1){
    $ironAxe--;
    $gold += 20;
    return "Nice! You just sold an Iron Axe for 30 gold!";
  }
  else if (item === 'wood' && $wood >= 1){
    $wood--;
    $gold++;
    return "Nice! You just sold a Wood for 1 gold!";
  }
  else if (item === 'food' && $food >= 2){
    $food--;
    $gold += 2;
    return "Nice! You just sold a Food for 2 gold!";
  }
  else if (item === 'copperIngot' && $copperIngot >= 1){
    $copperIngot--;
    $gold += 3;
    return "Nice! You just sold a Copper Ingot for 3 gold!";
  }
  else if (item === 'ironIngot' && $ironIngot >= 1){
    $ironIngot--;
    $gold += 4;
    return "Nice! You just sold a Copper Ingot for 4 gold!";
  }
  else if (
    (item === 'copperSword' && $copperSword < 1) || 
    (item === 'ironSword' && $ironSword < 1) || 
    (item === 'copperAxe' && $copperAxe < 1) || 
    (item === 'ironAxe' && $ironAxe < 1) ||
    (item === 'wood' && $wood < 1) ||
    (item === 'food' && $food < 1) ||
    (item === 'copperIngot' && $copperIngot < 1) ||
    (item === 'ironIngot' && $ironIngot < 1)
  ){
    return "You don't have enough of that item to sell!";
  }
  else {
    console.log (`SELL:
      1 Wood = 1 Gold
      1 Food = 2 Gold
      1 Copper Sword = 20 Gold
      1 Copper Axe = 10 Gold
      1 Iron Sword = 40 Gold
      1 Iron Axe = 30 Gold`);
    return "What do you want to sell? Use sell('item')"

  }
}


//END OF SELL

//START OF WIN
function checkVictory() {
  if ($gold >= 100) {
    console.log("Congratulations, you won! You have 100 gold! Good job :)");
    clearInterval(victoryCheckInterval);
  }
}
let victoryCheckInterval = setInterval(checkVictory, 1000);

//END OF WIN







/* HELP */
function help() {
  console.log(`
  Welcome, young blacksmith!

  Your task is to forge and sell weapons. 
  To do this, you will need wood, ingots smelted from ore, and special molds that you can buy.

  You must venture into the forest for wood and food, as well as explore mines in search of various ores. 
  You can smelt ore into ingots at a fire.

  Sword = Ingots + swordMold + 1 Wood
  Axe = Ingot + axeMold + 2 Wood

  Don't forget about food - it restores your stamina.

  You can win this game by collecting 100 gold!
  But you also can stuck and lose :(

  Good luck!
    

  Commands:
  - inventory(): View your inventory and stamina
  - eat(): Eat some food to restore some stamina
  - fire(): Start or stop the fire
  - forest(): Go to forest for wood and food.
  - mines(): Go to mines for ores: Copper and Iron.
  - melting(): Melt your ores and make Ingots.
  - make('item'): Make weapons (swords or axes)
  - buy('item'): Buy supplies (molds, wood, food)
  - sell('item'): Sell supplies (swords or axes)
  - help(): View game instructions
  `);
}