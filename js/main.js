console.log("JS linked");

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

//This will determine if a box is open and allow user to select it
function confirmBoxSelection (currBox) {
    if (currBox.classList.contains('x') || currBox.classList.contains('o')) {
        console.log('Box alreday selected');
    } else {
        currBox.classList.add('x');
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
                confirmBoxSelection (currItem);
            }
      })
    }
  });

 const p1 = new Player ('Paul','X');