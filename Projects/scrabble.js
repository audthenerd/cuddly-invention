//Tiles

// 2 blank tiles (scoring 0 points)
// 1 point: E ×12, A ×9, I ×9, O ×8, N ×6, R ×6, T ×6, L ×4, S ×4, U ×4.
// 2 points: D ×4, G ×3.
// 3 points: B ×2, C ×2, M ×2, P ×2.
// 4 points: F ×2, H ×2, V ×2, W ×2, Y ×2.
// 5 points: K ×1.
// 8 points: J ×1, X ×1
// 10 points: Q ×1, Z ×1
//alphabets[0].points + alphabets[1].points = 3 (number).




alphabets = [
    {
    letter: "A",
    points: 1,
    number: 9
    },
    {
    letter: "B",
    points: 2,
    number: 2
    },
    {
    letter: "C",
    points: 3,
    number: 2
    },
    {
    letter: "D",
    points: 2,
    number: 4
    },
    {
    letter: "E",
    points: 1,
    number: 12
    },
    {
    letter: "F",
    points: 4,
    number: 2
    },
    {
    letter: "G",
    points: 2,
    number: 3
    },
    {
    letter: "H",
    points: 4,
    number: 2
    },
    {
    letter: "I",
    points: 1,
    number: 9
    },
    {
    letter: "J",
    points: 8,
    number: 1
    },
    {
    letter: "K",
    points: 5,
    number: 1
    },
    {
    letter: "L",
    points: 1,
    number: 4
    },
    {
    letter: "M",
    points: 3,
    number: 2
    },
    {
    letter: "N",
    points: 1,
    number: 6
    },
    {
    letter: "O",
    points: 1,
    number: 8
    },
    {
    letter: "P",
    points: 3,
    number: 2
    },
    {
    letter: "Q",
    points: 10,
    number: 1
    },
    {
    letter: "R",
    points: 1,
    number: 6
    },
    {
    letter: "S",
    points: 1,
    number: 4
    },
    {
    letter: "T",
    points: 1,
    number: 6
    },
    {
    letter: "U",
    points: 1,
    number: 4
    },
    {
    letter: "V",
    points: 4,
    number: 2
    },
    {
    letter: "W",
    points: 4,
    number: 2
    },
    {
    letter: "X",
    points: 8,
    number: 1
    },
    {
    letter: "Y",
    points: 4,
    number: 2
    },
   {
    letter: "Z",
    points: 10,
    number: 1
    },
    {
    letter: " ",
    points: 0,
    number: 1
    },
    {
    letter: " ",
    points: 0,
    number:1
    }
];

//Points summation system (2 methods)
//Method 1: Initial sum = 2 because of the 2 blank tiles.
// var sum = 0;
// for (var i=0;i<alphabets.length;i++){
//     sum += alphabets[i].points * alphabets[i].number;}

//Method 2: Reduce function returns 187.
// var initialValue = 2;
// var sum = alphabets.reduce(function (accumulator, currentValue) {
//     return accumulator + (currentValue.points*currentValue.number);
// },initialValue);

//Tracking the items on the board.

//Each player has 7 tiles.
var playerOneAlphabets = [];
var playerOneTurns = 0;

var playerTwoAlphabets = [];
var playerTwoTurns = 0;

//Player Scores on the board
var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneBoardArray = [];
var playerTwoBoardArray = [];

//Sorting out 7 tiles for Player One.
var alphabets;


var deductAlph = function() {
for(j in alphabets){
    for(x in playerOneAlphabets){
        if (alphabets[j].letter === playerOneAlphabets[x]) {
            alphabets[j].number = alphabets[j].number--;
        }
    }
} console.log("After:",alphabets);
}

var pickTilesOne = function() {
    for (i in alphabets){

        var rand = parseInt(Math.ceil(Math.random()*alphabets.length-1))

        if (playerOneAlphabets.length < 7) {
        playerOneAlphabets.push(alphabets[rand].letter);
        var buttonsArrOne = document.querySelectorAll('#player-one div');
        buttonsArrOne[i].textContent = alphabets[rand].letter;
        buttonsArrOne[i].innerHTML = alphabets[rand].letter;

        deductAlph();
        }
    }
};

var pickTilesTwo = function() {
    for (i in alphabets){

        var rand = parseInt(Math.ceil(Math.random()*alphabets.length-1))

        if (playerTwoAlphabets.length < 7) {
        playerTwoAlphabets.push(alphabets[rand].letter);
        var buttonsArrTwo = document.querySelectorAll('#player-two div');
        buttonsArrTwo[i].textContent = alphabets[rand].letter;
        deductAlph();
        }
    }
};





// Player turn switch

var playerName;

if (playerOneTurns === 0 || playerTwoTurns === 0) {
    playerName = "Player One";
    pickTilesOne();
    playerOneTurns++;
} else if (playerOneTurns > playerTwoTurns) {
    playerName = "Player Two";
    pickTilesTwo();
    playerTwoTurns++;
} else if (playerOneTurns === playerTwoTurns){
    playerName = "Player One";
    pickTilesOne();
    playerOneTurns++;
}

 var sideBar = document.querySelector('#side-bar');
    var whooseTurn = document.createElement('div');
    whooseTurn.setAttribute('id', 'show-turn');
    sideBar.appendChild(whooseTurn);
    whooseTurn.innerHTML = `${playerName}'s Turn`;




//Gameplays
var playerInput = "Hello";
var playerNum = "77";

for (var i = 0; i < playerInput.length; i++) {
    var split = playerInput.charAt(i);
    if(playerName = "Player One") {
        playerOneBoardArray.push(split);
    }
    var playerNumP = parseInt(playerNum);

    for (var j=playerNumP; j<playerOneBoardArray.length; j++){
        var playerNumP;
        debugger;
        var boardArray = document.querySelectorAll('td');
        boardArray[j].textContent = playerOneBoardArray[i];
    }
};












