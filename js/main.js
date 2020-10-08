console.log("JS linked");


//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

//Find 'new game' button
const newGameBtn = document.querySelector('#newGame');

//Find notification section 
const notificationBanner = document.querySelector('#notification')

//TEMPORARY to toggle between players
const player1 = document.querySelector('#p1');
const player2 = document.querySelector('#p2');

// console.log(gameGrid);
// console.log(gameBox);


function boxAvailable(currBox) {
    if (currBox.classList.contains('x') || currBox.classList.contains('o')) {
        console.log('Box alreday selected.  Choose another');
        return false;
    } else {
        return true;
    }
}


//Add an event listner to the game grid parent and take advantage of propagation 
gameGrid.addEventListener('click', (event) => {
    
    //If the user clicked a game box 
    if (event.target.classList[0] === 'box') {
        
        //Find out which one was clicked by spinning through box list
        gameBox.forEach((currItem, index) => {
            if (currItem === event.target) {
                // console.log (event);
                // console.log (currItem);
                // console.log("Box that was clicked "+ (index + 1));
                // currItem.classList.add('x');
                selectedBox = index+1;
                if (boxAvailable(currItem) && (ttt.gameOn)) {
                    // console.log (currPlayer);
                    currItem.classList.add(currPlayer.gameOperatorID.toLowerCase());
                    ttt.updateScore(currPlayer.gameOperatorID, selectedBox);
                    
                    //If the game is over, show result and enable new game button
                    if (!ttt.gameOn) {
                        notificationBanner.innerHTML = ttt.winner;
                        newGameBtn.disabled = false;
                    }
                }
            }
        })
    }
});


  
const p1 = new Player ('me','X');
const p2 = new Player ('him','O');
const ttt = new Game ('Tic Tac Toe');
ttt.addPlayer(p1);
ttt.addPlayer(p2);
console.log(ttt);

let currPlayer = p1;


//TEMPORARY
player1.addEventListener('click', () => {
    currPlayer = p1;
    console.log('Current player is p1' + currPlayer);
});

//TEMPORARY
player2.addEventListener('click', () => {
    currPlayer = p2;
    console.log('Current player is p2' + currPlayer);
});

//Begin a new game
newGameBtn.addEventListener('click', () => {
    
    //Initialize current game instance 
    ttt.startNewGame();  
    
    //Reset game grid to initial state
    gameBox.forEach((currItem, index) => {
        currItem.classList.remove('x');
        currItem.classList.remove('o');
    });

    //Disable new game button
    newGameBtn.disabled = true;
});



