// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0
// Тоглогчийн цуглуулсан нийт оноог хадгалах хувьсагч
var scores  = [0, 0]
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0
// Шооны тоог хадгалах хувьсагч. /1-6/ Үүнийг санамсаргүйгээр үүсгэж өгнө.
var diceNumber = 0


// <div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent = "0"
document.getElementById('score-1').textContent = "0"

// <div class="player-current-score" id="current-0">11</div>
document.getElementById('current-0').textContent = "0"
document.getElementById('current-1').textContent = "0"

// <img src="dice-5.png" alt="Dice" class="dice">
var diceDom = document.querySelector(".dice")
diceDom.style.display = "none";

// <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
document.querySelector('.btn-roll').addEventListener('click', function(){
    diceNumber = (Math.floor(Math.random() * 6) + 1);
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png'
});







