class Game {
    constructor(name) {		
        this.name = name; 									
        this.players = [];
        this.winner = '';
        this.turn = 0;
        this.gameOn = false;
        this.rowAndColTracker = [0,0,0,0,0,0];
        this.diagonalTracker = ['', '', '', '', ''];
    }

    resetGame () {
        this.winner = '';
        this.turn = 0;
        this.rowAndColTracker = [0,0,0,0,0,0];
        this.diagonalTracker = ['', '', '', '', ''];
    }

    //This will add a player to the game
    addPlayer (player) {
        this.players.push(player);
    }

    startNewGame () {
        this.gameOn = true;
        this.resetGame();
    }

    //This will determine the winner
    determineWinner () {
        
        //Convert the diagonalTracker array into a string so it can be easily "inspected" for a winning pattern
        const diagonalTrackerStr = this.diagonalTracker.join('|');
        console.log(diagonalTrackerStr);

        //Winner has either a full row, column, or diagonal.  Game over
        if (this.rowAndColTracker.includes(3) || diagonalTrackerStr.includes('X|X|X')) {
            this.winner = "Player 1";
            this.gameOn = false;
            
        } else if (this.rowAndColTracker.includes(-3) || diagonalTrackerStr.includes('O|O|O')) {
            this.winner = "Player 2";
            this.gameOn = false;
        
        //Game is a draw if no winner at the end
        } else if (this.turn === 9) {
            this.winner = "Draw";
            this.gameOn = false;

        }

        console.log("Winner is " + this.winner);

    }

    updateScore (playerID, box) {
        console.log(`${playerID} ${box}`);
        switch (box) {
            case 1:
                if (playerID === 'X') {
                    this.rowAndColTracker[0]+=1;
                    this.rowAndColTracker[3]+=1;
                    this.diagonalTracker[0]='X';
                } else {
                    this.rowAndColTracker[0]-=1;
                    this.rowAndColTracker[3]-=1;
                    this.diagonalTracker[0]='O';
                }
                break;
    
            case 2:
                if (playerID === 'X') {
                    this.rowAndColTracker[1]+=1;
                    this.rowAndColTracker[3]+=1;
                } else {
                    this.rowAndColTracker[1]-=1
                    this.rowAndColTracker[3]-=1;
                }   
                break;
        
            case 3:
                if (playerID === 'X') {
                    this.rowAndColTracker[2]+=1;
                    this.rowAndColTracker[3]+=1;
                    this.diagonalTracker[3]='X';
                } else {
                    this.rowAndColTracker[2]-=1
                    this.rowAndColTracker[3]-=1;
                    this.diagonalTracker[3]='O';
                }   
                break;
    
            //====================================================

            case 4:
                if (playerID === 'X') {
                    this.rowAndColTracker[0]+=1;
                    this.rowAndColTracker[4]+=1;
                } else {
                    this.rowAndColTracker[0]-=1;
                    this.rowAndColTracker[4]-=1;
                }
                break;
    
            case 5:
                if (playerID === 'X') {
                    this.rowAndColTracker[1]+=1;
                    this.rowAndColTracker[4]+=1;
                    this.diagonalTracker[2]='X';
                } else {
                    this.rowAndColTracker[1]-=1;
                    this.rowAndColTracker[4]-=1;
                    this.diagonalTracker[2]='O';
                }   
                break;
        
            case 6:
                if (playerID === 'X') {
                    this.rowAndColTracker[2]+=1;
                    this.rowAndColTracker[4]+=1;
                } else {
                    this.rowAndColTracker[2]-=1;
                    this.rowAndColTracker[4]-=1;
                }   
                break;
    
            //====================================================
    
            case 7:
                if (playerID === 'X') {
                    this.rowAndColTracker[0]+=1;
                    this.rowAndColTracker[5]+=1;
                    this.diagonalTracker[4]='X';
                } else {
                    this.rowAndColTracker[0]-=1;
                    this.rowAndColTracker[5]-=1;
                    this.diagonalTracker[4]='O';
                }
                break;
    
            case 8:
                if (playerID === 'X') {
                    this.rowAndColTracker[1]+=1;
                    this.rowAndColTracker[5]+=1;
                } else {
                    this.rowAndColTracker[1]-=1;
                    this.rowAndColTracker[5]-=1;
                }   
                break;
        
            case 9:
                if (playerID === 'X') {
                    this.rowAndColTracker[2]+=1;
                    this.rowAndColTracker[5]+=1;
                    this.diagonalTracker[1]='X';
                } else {
                    this.rowAndColTracker[2]-=1;
                    this.rowAndColTracker[5]-=1;
                    this.diagonalTracker[1]='O';
                }   
                break;
    
    
            default:
                break;
        }
        
        // console.log(this.rowAndColTracker);
        // console.log(this.diagonalTracker);

        this.turn++;

        //Determine winner if 
        if (this.turn >= 5) {
            this.determineWinner();
        }
        
    }
    
     
    
    
};