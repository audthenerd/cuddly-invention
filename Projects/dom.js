var createBoard = document.getElementById('board');
var tableHead = document.createElement('table');
createBoard.appendChild(tableHead);


for (var i=0; i<15; i++) {
    var row = document.createElement('tr');
    row.setAttribute('id', i);
    row.setAttribute('value', 'appendto')

    var table = document.querySelector('table');
    table.appendChild(row);
}

for (var i=0; i<15; i++){
var rows = document.querySelectorAll('tr')[i];
var iString = i.toString();

    for (var j=0; j<15; j++){
        var column = document.createElement('td');
         column.setAttribute('id', iString + j.toString());
        column.setAttribute('class', 'drop-zone');
       column.setAttribute('value', 'appendto');
       rows.appendChild(column);
    }
};


//Playing tiles
var playerTiles = document.getElementById('player-tiles');

//Player One
var playerOneTiles = document.createElement('div');
playerOneTiles.setAttribute('id', 'player-one');
playerTiles.appendChild(playerOneTiles);

for (var i=0; i<7; i++){
    var divButton = document.createElement('div');
    divButton.setAttribute('id', i);
    divButton.setAttribute('draggable', true);
    divButton.setAttribute('value', 'player');
    // divButton.setAttribute('type', 'button');
    playerOneTiles.appendChild(divButton);
};


var playerClick = function() {

}
//Player Two
var playerTwoTiles = document.createElement('div');
playerTwoTiles.setAttribute('id', 'player-two');
playerTiles.appendChild(playerTwoTiles);

for (var i=0; i<7; i++){
    var divButton2 = document.createElement('div');
    divButton2.setAttribute('class', i);
    divButton2.setAttribute('draggable', true);
    divButton2.setAttribute('data', 'player');
    divButton2.setAttribute('type', 'button');
    playerTwoTiles.appendChild(divButton2);
}



var holdingArea = [];

var dragButton = document.querySelectorAll('#player-one div');



document.body.appendChild(createBoard);
