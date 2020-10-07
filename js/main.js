console.log("JS linked");

let round = 1; 
let currPlayer = '';

const gameTracker = {
    col1: 0,
    col2: 0,
    col3: 0,
    row1: 0,
    row2: 0,
    row3: 0,
} 


class Player {
    constructor(name, gameOperatorID) {		
        this.name = name; 									
        this.gameOperatorID = gameOperatorID;
        this.boxSelectionsHistory = [];
        this.winner = false;
    }
};

//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

// console.log(gameGrid);
// console.log(gameBox);

function updateScore(playerID, box) {
    console.log(`${playerID} ${box}`);
    switch (box) {
        case 1:
            if (playerID === 'X') {
                gameTracker.col1+=1;
                gameTracker.row1+=1;
            } else {
                gameTracker.col1-=1;
                gameTracker.row1-=1;
            }
            break;

        case 2:
            if (playerID === 'X') {
                gameTracker.col2+=1;
                gameTracker.row1+=1;
            } else {
                gameTracker.col2-=1;
                gameTracker.row1-=1;
            }   
            break;
    
        case 3:
            if (playerID === 'X') {
                gameTracker.col3+=1;
                gameTracker.row1+=1;
            } else {
                gameTracker.col3-=1;
                gameTracker.row1-=1;
            }   
            break;


        case 4:
            if (playerID === 'X') {
                gameTracker.col1+=1;
                gameTracker.row2+=1;
            } else {
                gameTracker.col1-=1;
                gameTracker.row2-=1;
            }
            break;

        case 5:
            if (playerID === 'X') {
                gameTracker.col2+=1;
                gameTracker.row2+=1;
            } else {
                gameTracker.col2-=1;
                gameTracker.row2-=1;
            }   
            break;
    
        case 6:
            if (playerID === 'X') {
                gameTracker.col3+=1;
                gameTracker.row2+=1;
            } else {
                gameTracker.col3-=1;
                gameTracker.row2-=1;
            }   
            break;



        case 7:
            if (playerID === 'X') {
                gameTracker.col1+=1;
                gameTracker.row3+=1;
            } else {
                gameTracker.col1-=1;
                gameTracker.row3-=1;
            }
            break;

        case 8:
            if (playerID === 'X') {
                gameTracker.col2+=1;
                gameTracker.row3+=1;
            } else {
                gameTracker.col2-=1;
                gameTracker.row3-=1;
            }   
            break;
    
        case 9:
            if (playerID === 'X') {
                gameTracker.col3+=1;
                gameTracker.row3+=1;
            } else {
                gameTracker.col3-=1;
                gameTracker.row3-=1;
            }   
            break;


        default:
            break;
    }
    console.log(gameTracker);


}



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

/* DELETE IF NO LONGER NEEDED
//This will determine if a box is open and allow user to select it
function confirmBoxSelection (currBox, selectedBox, player) {
    if (currBox.classList.contains('x') || currBox.classList.contains('o')) {
        console.log('Box alreday selected.  Choose another');
    } else {
        currBox.classList.add(p1.gameOperatorID.toLowerCase());
    }
    
}
*/

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
                    updateScore(currPlayer.gameOperatorID, selectedBox);
                }
                //keepScore(currPlayer.gameOperatorID, selectedBox);
            }
        })
    }
  });

 const p1 = new Player ('Paul','O');
 currPlayer = p1;