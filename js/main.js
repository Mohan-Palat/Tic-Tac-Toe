console.log("JS linked");

//Find the game grid and game boxes
const gameGrid = document.querySelector('.game-grid');
const gameBox = document.querySelectorAll('.box');

// console.log(gameGrid);
// console.log(gameBox);

//Add an event listner to the game grid parent and take advantage of propagation 
gameGrid.addEventListener('click', (event) => {
    
    //If the user clicked a game box 
    if (event.target.classList[0] === 'box') {
        
        //Find out which one was clicked by spinning through box list
        gameBox.forEach((currItem, index) => {
            if (currItem === event.target) {
                console.log (event);
                console.log (currItem);
                console.log("Box that was clicked "+ (index + 1));
                currItem.classList.add('x');
            }
      })
    }
  });