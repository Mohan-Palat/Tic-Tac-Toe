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


//Enable input fields and buttons so user can interact with UI
function enableFieldsAndButtons() {
    newGameBtn.disabled = false;
    p1CustomChar.disabled = false;
}

//Disable input fields and buttons
function disbaleFieldsAndButtons() {
    newGameBtn.disabled = true;
    p1CustomChar.disabled = true;
}

function populatePrevResults() {
    
    //Create a new li node
    const newResultsNode = document.createElement("li");
    
    //Value the contents of the li
    newResultsNode.innerHTML =  `Game ${ttt.gameCounter}:   ${ttt.players[0].customOperatorID} vs ${ttt.players[1].customOperatorID}  -> ${ttt.winner}`;

    //Set the class of the li
    newResultsNode.className = "result";
    
    //Append the most recent game results to the top of the list
    prevResults.insertBefore(newResultsNode, prevResults.firstChild);    
    
    //Only allow 10 previous game rows so remove the oldest
    if (prevResults.childElementCount >= 5) {    
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

                    currItem.classList.add('xFlicker');

                    //Update score
                    ttt.updateScore(ttt.currentPlayer.gameOperatorID, selectedBox);
                    
                    //If the game is over, show result and enable buttons and input fields
                    if (!ttt.gameOn) {
                        notificationBanner.innerHTML = ttt.winner;
                        populatePrevResults();
                        enableFieldsAndButtons();
                    } else {
                        //Otherwise, next player's turn
                        notificationBanner.innerHTML = `${ttt.currentPlayer.name}'s turn`;
                    
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
    
    if (p1Name !== undefined) {
        p1.updateName(p1Name.value);
    }
    if (p2Name !== undefined) {
        p2.updateName(p2Name.value);
    }
    
    //Reset game grid to initial state
    gameBox.forEach((currItem, index) => {
        currItem.innerHTML = '';
        currItem.classList.remove('x');
        currItem.classList.remove('o');
    });

    //"turn on" game grid by adding animation class
    gameGrid.classList.add('turned-on');
    
    //Reset notification section to initial state
    notificationBanner.innerHTML = `Press New Game to Start`;
    
    //Disable game buttons and input fields while game is running
    disbaleFieldsAndButtons();
});

const p1 = new Player ('Player 1', 'X');
const p2 = new Player ('Player 2', 'O');
const ttt = new Game ('Tic Tac Toe');
ttt.addPlayer(p1);
ttt.addPlayer(p2);


