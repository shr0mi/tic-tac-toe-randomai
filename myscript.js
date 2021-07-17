//The main game board array.
var board = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

//Counts the number of steps
step = 0;

//The winner. 1 means cross and -1 means golla
var winner = null

//Row-Column Input
var row = null;
var column = null;

//Button Click fires this function
function buttonToImageSwap(row, column) {
	if(winner == null){
		document.getElementById('button' + 'Row' + row + 'Col' + column).remove();
  		
  		document.getElementById('cross' + 'Row' + row + 'Col' + column).style.display="block";
  		board[row][column] = 1;
  		
  		checkRow();
  		checkColumn();
  		checkCorners();
  		checkWinner();

  		//If winner is null, let ai play
  		if(winner == null){
  			aiMove();
  		}
  		
  		
	}
}

//Checks Row
function checkRow(){
	for(var i=0; i<3; i++){
		if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] == 1) {
			winner = 1;
		}
		else if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] == -1) {
			winner = -1;
		}
	}
}

//Check Column
function checkColumn(){
	for(var i=0; i<3; i++){
		if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[2][i] == 1) {
			winner = 1;
		}
		else if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[2][i] == -1) {
			winner = -1;
		}
	}
}

//Check Corners
function checkCorners(){
	
	if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != 0) {
		winner = board[0][0];
	}
	else if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[0][2] != 0) {
		winner = board[2][0];
	}

}

//Check Winner
function checkWinner(){
	if(winner != null){
		if(winner == 1){
			document.getElementById('result').innerHTML = "Cross Wins!";
		}
		else if(winner == -1){
			document.getElementById('result').innerHTML = "Golla Wins!";
		}
		else{
			document.getElementById('result').innerHTML = "Draw!";
		}
	}
}

var movesAvailable = [];

//AI Plays (Randomly)
function aiMove(){

	//Check What moves are available
	for(var i=0; i<3; i++){
		for(var j=0; j<3; j++){
			if(board[i][j] == 0){
				movesAvailable.push([i, j]);
			}
		}
	}

	//console.log(movesAvailable.length);

	//Draw Check
	if(movesAvailable.length == 0){
		winner = 0;
		checkWinner();
	}
	else{
	var move = Math.floor(Math.random() * movesAvailable.length);

  	document.getElementById('button' + 'Row' + movesAvailable[move][0] + 'Col' + movesAvailable[move][1]).remove();
  	document.getElementById('golla' + 'Row' + movesAvailable[move][0] + 'Col' + movesAvailable[move][1]).style.display="block";
  	board[movesAvailable[move][0]][movesAvailable[move][1]] = -1;
	
	//Empty the array
  	movesAvailable = [];
  	
  	checkRow();
  	checkColumn();
  	checkCorners();
  	checkWinner();
	}
  	
  	
}






