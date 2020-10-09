console.log("JS linked");


//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

//Find 'new game' button
const newGameBtn = document.querySelector('#newGame');

//Find notification section 
const notificationBanner = document.querySelector('#notification')


function boxAvailable(currBox) {
    if (currBox.classList.contains('x') || currBox.classList.contains('o')) {
        // console.log('Box alreday selected.  Choose another');
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
                
                selectedBox = index+1;

                //If user selected an open box and the game is still "on"
                if (boxAvailable(currItem) && (ttt.gameOn)) {
                    
                    //Update the box with X, O, or whatever they choose as their ID icon
                    currItem.innerHTML = ttt.currentPlayer.gameOperatorID;
                    
                    //Add a class to the box of either x or o 
                    currItem.classList.add(ttt.currentPlayer.gameOperatorID.toLowerCase());

                    //Update score
                    ttt.updateScore(ttt.currentPlayer.gameOperatorID, selectedBox);
                    
                    //If the game is over, show result and enable new game button
                    if (!ttt.gameOn) {
                        notificationBanner.innerHTML = ttt.winner;
                        newGameBtn.disabled = false;
                    } else {
                        //Otherwise, next player's turn
                        notificationBanner.innerHTML = `${ttt.currentPlayer.name}'s turn`;
                    
                    }
                }
            }
        })
    }
});


  
const p1 = new Player ('Player 1','X');
const p2 = new Player ('Player 2','O');
const ttt = new Game ('Tic Tac Toe');
ttt.addPlayer(p1);
ttt.addPlayer(p2);
console.log(ttt);



//Begin a new game
newGameBtn.addEventListener('click', () => {
    
    //Initialize current game instance 
    ttt.startNewGame();  
    
    //Reset game grid to initial state
    gameBox.forEach((currItem, index) => {
        currItem.innerHTML = '';
        currItem.classList.remove('x');
        currItem.classList.remove('o');
    });

    //Reset notification section to initial state
    notificationBanner.innerHTML = `${ttt.currentPlayer.name}'s turn`;

    //Disable new game button
    newGameBtn.disabled = true;
});



