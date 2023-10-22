// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer

// Тоглогчийн цуглуулсан нийт оноог хадгалах хувьсагч
var scores  = [0, 0]

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0

// Шооны зургийг үзүүлэх элементийг DOM-c хайж олоож энд хадгалая
var diceDom1 = document.querySelector(".dice1")
var diceDom2 = document.querySelector(".dice2")

// Тоглоом дууссан эсэхийг шалгадаг хувьсагч
var isGameOver;

// Тоглоомыг эхлүүлэх үед
initGame()

// Тоглоомыг эхлүүлэх функц
function initGame(){
    activePlayer = 0;
    scores  = [0, 0]
    roundScore = 0
    isGameOver = false

        // <div class="player-score" id="score-0">43</div>
        document.getElementById("score-0").textContent = "0"
        document.getElementById('score-1').textContent = "0"
    
        // <div class="player-current-score" id="current-0">11</div>
        document.getElementById('current-0').textContent = "0"
        document.getElementById('current-1').textContent = "0"
    
        // Тоглогчдын нэрийг буцааж гаргах
        document.getElementById('name-0').textContent = 'Player 1'
        document.getElementById('name-1').textContent = 'Player 2'

        // Тоглогчдоос .winnder классыг авч хаях
        document.querySelector('.player-0-panel').classList.remove('winner')
        document.querySelector('.player-1-panel').classList.remove('winner')
 
        // Шоог түр алга болгоно
        diceDom1.style.display = "none";
        diceDom2.style.display = "none";
}


// <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (isGameOver === false) {
        // 1-6 дотор санамсаргүй нэг тоо гаргаж авна.
        var diceNumber1 = (Math.floor(Math.random() * 6) + 1);
        var diceNumber2 = (Math.floor(Math.random() * 6) + 1);

        // Шооны зургийг вэб дээр гаргаж ирнэ
        diceDom1.style.display = "block";
        diceDom2.style.display = "block";

        // Буусан тооны дагуу тохирох шооны зургийг вэб дээр гаргаж ирнэ.
        diceDom1.src = 'dice-' + diceNumber1 + '.png'
        diceDom2.src = 'dice-' + diceNumber2 + '.png'

    // Буусан тоо нь 1-с ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1){
        // 1-с ялгаатай тоо буулаа.
        roundScore = roundScore + diceNumber
        document.getElementById('current-' + activePlayer).textContent = roundScore
    } else {
        // 1 буусан тул тоглогчийн оноог 0 болгож ээлжийг солино.
        switchToNextPlayer();
    }
    } else {
        alert('Шинээр эхлүүлэх бол : New Game товчийг дарна уу!', );
    }

});


// <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (isGameOver === false) {
            // <div class="player-score" id="score-0">43</div>
    scores[activePlayer] = scores[activePlayer] + roundScore
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]
    
    if (scores[activePlayer] >= 10){
            // Тоглоомыг дууссан төлөвт шилжүүлнэ
            isGameOver = true;

            // Ялагч гэсэн текстийг нэрнийх нь оронд гаргая
            document.getElementById('name-' + activePlayer).textContent = 'Winner'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    } else {
        switchToNextPlayer();
    }
    } else {
        alert('Шинээр эхлүүлэх бол : New Game товчийг дарна уу!' );
    }

})


// <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
document.querySelector('.btn-new').addEventListener('click', initGame());


function switchToNextPlayer(){
    // Тоглогчийн ээлж солих функц
    roundScore = 0
    document.getElementById('current-' + activePlayer).textContent = roundScore
    // Идэвхтэй тоглогчийн байрыг солино
    activePlayer === 0 ? (activePlayer = 1 ) : (activePlayer = 0)
    document.querySelector('.player-0-panel').classList.toggle("active")
    document.querySelector('.player-1-panel').classList.toggle("active")
    // Шоог түр алга болгоно
    diceDom.style.display = "none";
}





