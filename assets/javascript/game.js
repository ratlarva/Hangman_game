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
    
      var newDiv = document.createElement("div");
      console.log(newDiv);
      newDiv.innerHTML = "hello";
      targetDiv.appendChild(newDiv);

    }

document.onkeyup = function(){

}