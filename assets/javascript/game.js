var wordBank = ["andesite", "diorite", "rhyolite", "basalt", "gabbro", "granite", "obsidian", "conglomerate", "diamictite", "scoria", "epidote", "tourmaline", "olivine", "plagioclase", "muscovite", "quartz", "gneiss", "spinel"];
console.log(wordBank);
var currentWord = 0;
function randWord(){
	currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
}

randWord();
console.log(currentWord);
console.log(currentWord.length);
var targetDiv = document.getElementById("underScores");

for (var i = 0; i < currentWord.length; i++) {
    
      /*var newDiv = document.createElement("div");
      console.log(newDiv);
      newDiv.innerHTML = "hello";
      targetDiv.appendChild(newDiv);*/

    }
var letterPositions = [];
var misses = 0;
window.addEventListener('keyup',
          function(event) {
          	var guess = event.key;

          	
          	for (var i = 0; i < currentWord.length; i++) {
          		if (guess === currentWord.charAt(i)) {
          			letterPositions.push(i);
          			console.log(letterPositions);
          			console.log(i);
          		}
          		else{
          			misses++;
          			if(misses === currentWord.length){

          			}
          		}

          	var check = $("<div>");
          }
          console.log(letterPositions[0]);
          		console.log(letterPositions[1]);


}, true);