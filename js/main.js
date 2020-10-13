console.log("JS linked");


//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

//Find 'new game' button
const newGameBtn = document.querySelector('#new-game');

//Find notification section 
const notificationBanner = document.querySelector('#notification');

//Find previous results list
const prevResults = document.querySelector('.previous-results');

//Find player customized inputs
const p1CustomChar = document.querySelector('#p1-char');
const p1Name = document.querySelector('#p1-name');
const p2CustomChar = document.querySelector('#p2-char');
const p2Name = document.querySelector('#p2-name');

//Find sounds
const ggZapSound = document.querySelector('#gg-zap-sound');
const xoSound = document.querySelector('#xo-sound');

function updateNotificationBtn () {
    newGameBtn.innerHTML = ttt.winner;
    // const resetPlayBtn = setInterval(function(){ newGameBtn.innerHTML = 'Press to Play'; }, 3000);
    // clearInterval(resetPlayBtn);
    setTimeout(function(){ newGameBtn.innerHTML = 'Press to Play'; }, 3000);   
};

//Enable input fields and buttons so user can interact with UI
function enableFieldsAndButtons() {
    newGameBtn.disabled = false;
    newGameBtn.classList.remove("disableHover");
    p1CustomChar.disabled = false;
    p2CustomChar.disabled = false;
}

//Disable input fields and buttons
function disbaleFieldsAndButtons() {
    newGameBtn.disabled = true;
    newGameBtn.classList.add("disableHover");
    p1CustomChar.disabled = true;
    p2CustomChar.disabled = true;

}

//This will "turn off" all other X and Os to highlight the winning move.
function highlightWinPattern (x, y, z) {
    gameBox.forEach((currItem, index) => {
        if (index !== x  && index !== y && index !== z) {
            currItem.classList.add("fade");
        }
    });

    //Turn off game grid too
    gameGrid.classList.remove('turn-on');
};

//Show the pattern that won
function showWinningMove () {
    
    //If winning pattern is either a row or column
    if (ttt.rowAndColTracker.includes(3) || ttt.rowAndColTracker.includes(-3)) {
        
        let winPatternNotFound = true;
        let index = 0;

        //Spin throught the row/col array to determine which one was the winning pattern.  Once found, call function to highlight pattern.
        while (winPatternNotFound) {
            if (Math.abs(ttt.rowAndColTracker[index]) === 3) {
                
                switch (index) {
                    case 0: 
                        highlightWinPattern (0, 3, 6);
                        break;
                    
                    case 1:
                        highlightWinPattern (1, 4, 7);
                        break;
                    
                    case 2:
                        highlightWinPattern (2, 5, 8);
                        break;
        
                    case 3:
                        highlightWinPattern (0, 1, 2);
                        break;
        
                    case 4:
                        highlightWinPattern (3, 4, 5);
                        break;
        
                    case 5:
                        highlightWinPattern (6, 7, 8);
                        break;
                
                    default:
                        break;
                }
                winPatternNotFound = false;
            } else {
                index++;
            }
        }
    //Winning pattern is diagonal
    } else {

        //Convert the diagonalTracker array into a string so it can be easily "inspected" for a winning pattern
        const diagonalTrackerStr = ttt.diagonalTracker.join('|');

        //Get the first half of the string
        const diagLeftToRight = diagonalTrackerStr.substring (0, 5);

        //Get the last half of the string
        const diagRightToLeft = diagonalTrackerStr.substring (diagonalTrackerStr.length, diagonalTrackerStr.length-5);

        if (diagLeftToRight === 'X|X|X' || diagLeftToRight === 'O|O|O') {
            highlightWinPattern (0, 4, 8);
        } else if (diagRightToLeft === 'X|X|X' || diagRightToLeft === 'O|O|O') {
            highlightWinPattern (2, 4, 6);
        
        //Otherwise, it's a draw so turn off the entire board
        } else {
            
            gameBox.forEach((currItem, index) => {
                currItem.classList.add("fade");
            });
        
            //Turn off game grid too
            gameGrid.classList.remove('turn-on');

        }

    }
};

//This will keep track of previous game results
function populatePrevResults() {
    
    //Create a new li node
    const newResultsNode = document.createElement("li");
    
    //Value the contents of the li
    newResultsNode.innerHTML =  `Game ${ttt.gameCounter}:   ${ttt.players[0].customOperatorID} vs ${ttt.players[1].customOperatorID}  -> ${ttt.winner}`;

    //Set the class of the li
    newResultsNode.className = "result";
    
    //Append the most recent game results to the top of the list
    prevResults.insertBefore(newResultsNode, prevResults.firstChild);    
    
    //Limit previous game rows so remove the oldest
    if (prevResults.childElementCount >= 6) {    
        console.log("in remove logic" + prevResults.lastChild);
        prevResults.removeChild(prevResults.lastChild);
    };
}


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
                    if (ttt.currentPlayer.customOperatorID !== undefined) {
                        currItem.innerHTML = ttt.currentPlayer.customOperatorID;
                    } else {
                        currItem.innerHTML = ttt.currentPlayer.gameOperatorID;
                    }
                    
                    //Add a class to the box of either x or o 
                    currItem.classList.add(ttt.currentPlayer.gameOperatorID.toLowerCase());

                    currItem.classList.add('xFlicker');  //THIS CAN BE REMOVED ALSO REMOVE FROM CSS
                    xoSound.play();


                    //Update score
                    ttt.updateScore(ttt.currentPlayer.gameOperatorID, selectedBox);
                    
                    //If the game is over, show result and enable buttons and input fields
                    if (!ttt.gameOn) {
                        updateNotificationBtn ();
                        populatePrevResults();
                        enableFieldsAndButtons();
                        showWinningMove();
                    } else {
                        //Otherwise, next player's turn
                        newGameBtn.innerHTML = `${ttt.currentPlayer.name}'s turn`;
                    
                    }
                }
            }
        })
    }
});


//Begin a new game
newGameBtn.addEventListener('click', () => {
    
    //Initialize current game instance 
    ttt.startNewGame();  
    
    if (p1CustomChar !== undefined) {
        p1.updateCustOperID(p1CustomChar.value);
    }
    if (p2CustomChar !== undefined) {
        p2.updateCustOperID(p2CustomChar.value);
    }
    
    // if (p1Name !== undefined) {
    //     p1.updateName(p1Name.value);
    // }
    // if (p2Name !== undefined) {
    //     p2.updateName(p2Name.value);
    // }
    
    //Reset game grid to initial state
    gameBox.forEach((currItem, index) => {
        currItem.innerHTML = '';
        currItem.classList.remove('x');
        currItem.classList.remove('o');
        currItem.classList.remove('fade');
    });

    //"turn on" game grid by adding animation and sound
    ggZapSound.play();
    gameGrid.classList.add('turn-on');
    
    //Reset notification to first player's turn
    newGameBtn.innerHTML = `${ttt.currentPlayer.name}'s turn`;
    
    //Disable game buttons and input fields while game is running
    disbaleFieldsAndButtons();
});

const p1 = new Player ('Player 1', 'X');
const p2 = new Player ('Player 2', 'O');
const ttt = new Game ('Tic Tac Toe');
ttt.addPlayer(p1);
ttt.addPlayer(p2);


