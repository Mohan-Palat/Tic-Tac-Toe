console.log("JS linked");

let round = 1; 
let currPlayer = '';






//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

// console.log(gameGrid);
// console.log(gameBox);



//Determine winner
function determineWinner() {
    gameBox.forEach(item)
}

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
                //confirmBoxSelection (currItem, currPlayer.gameOperatorID);
                if (boxAvailable(currItem)) {
                    currItem.classList.add(currPlayer.gameOperatorID.toLowerCase());
                    ttt.updateScore(currPlayer.gameOperatorID, selectedBox);
                }
                //keepScore(currPlayer.gameOperatorID, selectedBox);
            }
        })
    }
  });

 const p1 = new Player ('Paul','O');
 const ttt = new Game ('Tic Tac Toe');
 currPlayer = p1;

 console.log(ttt);