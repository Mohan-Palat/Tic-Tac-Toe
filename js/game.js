class Game {
    constructor(name) {		
        this.name = name; 									
        this.players = [];
        this.winner = '';
        this.round = 0;
        this.scoreTracker = {
            col1: 0,
            col2: 0,
            col3: 0,
            row1: 0,
            row2: 0,
            row3: 0,
        }
    }

    determineWinner () {

        if (this.scoreTracker.col1 === 3 || this.scoreTracker.col2 === 3 || this.scoreTracker.col3 === 3 ||
            this.scoreTracker.row1 === 3 || this.scoreTracker.row2 === 3 || this.scoreTracker.row3 === 3) {
                this.winner = "player1";
                console.log("Winner is " + this.winner);
                console.log(this.scoreTracker);
        } else if 
            (this.scoreTracker.col1 === -3 || this.scoreTracker.col2 === -3 || this.scoreTracker.col3 === -3 ||
            this.scoreTracker.row1 === -3 || this.scoreTracker.row2 === -3 || this.scoreTracker.row3 === -3) {
                this.winner = "player2";
                console.log("Winner is " + this.winner);
                console.log(this.scoreTracker);
        } else {
            this.winner = "a draw";
            console.log("Winner is " + this.winner);
            console.log(this.scoreTracker);
        }




        // if (this.scoreTracker.col1 === 3 || this.scoreTracker.col2 === 3 || this.scoreTracker.col3 === 3 ||
        //     this.scoreTracker.row1 === 3 || this.scoreTracker.row2 === 3 || this.scoreTracker.row3 === 3 ||) {
        //         this.winner = "player1";
        //     }


        //     (this.scoreTracker.col1 === 1 && this.scoreTracker.col2 === 1 && this.scoreTracker.col3 === 1 &&
        //     this.scoreTracker.row1 === 1 && this.scoreTracker.row2 === 1 && this.scoreTracker.row3 === 1)) {
            
                

        // } else if 
        //     (this.scoreTracker.col1 === -3 || this.scoreTracker.col2 === -3 || this.scoreTracker.col3 === -3 ||
        //     this.scoreTracker.row1 === -3 || this.scoreTracker.row2 === -3 || this.scoreTracker.row3 === -3 ||) {
        //         this.winner = "player2";
        //     }


        //     (this.scoreTracker.col1 === -1 && this.scoreTracker.col2 === -1 && this.scoreTracker.col3 === -1 &&
        //     this.scoreTracker.row1 === -1 && this.scoreTracker.row2 === -1 && this.scoreTracker.row3 === -1)) {
            
                
        // }
    }

    updateScore (playerID, box) {
        //console.log(`${playerID} ${box}`);
        switch (box) {
            case 1:
                if (playerID === 'X') {
                    this.scoreTracker.col1+=1;
                    this.scoreTracker.row1+=1;
                } else {
                    this.scoreTracker.col1-=1;
                    this.scoreTracker.row1-=1;
                }
                break;
    
            case 2:
                if (playerID === 'X') {
                    this.scoreTracker.col2+=1;
                    this.scoreTracker.row1+=1;
                } else {
                    this.scoreTracker.col2-=1;
                    this.scoreTracker.row1-=1;
                }   
                break;
        
            case 3:
                if (playerID === 'X') {
                    this.scoreTracker.col3+=1;
                    this.scoreTracker.row1+=1;
                } else {
                    this.scoreTracker.col3-=1;
                    this.scoreTracker.row1-=1;
                }   
                break;
    
            //====================================================

            case 4:
                if (playerID === 'X') {
                    this.scoreTracker.col1+=1;
                    this.scoreTracker.row2+=1;
                } else {
                    this.scoreTracker.col1-=1;
                    this.scoreTracker.row2-=1;
                }
                break;
    
            case 5:
                if (playerID === 'X') {
                    this.scoreTracker.col2+=1;
                    this.scoreTracker.row2+=1;
                } else {
                    this.scoreTracker.col2-=1;
                    this.scoreTracker.row2-=1;
                }   
                break;
        
            case 6:
                if (playerID === 'X') {
                    this.scoreTracker.col3+=1;
                    this.scoreTracker.row2+=1;
                } else {
                    this.scoreTracker.col3-=1;
                    this.scoreTracker.row2-=1;
                }   
                break;
    
            //====================================================
    
            case 7:
                if (playerID === 'X') {
                    this.scoreTracker.col1+=1;
                    this.scoreTracker.row3+=1;
                } else {
                    this.scoreTracker.col1-=1;
                    this.scoreTracker.row3-=1;
                }
                break;
    
            case 8:
                if (playerID === 'X') {
                    this.scoreTracker.col2+=1;
                    this.scoreTracker.row3+=1;
                } else {
                    this.scoreTracker.col2-=1;
                    this.scoreTracker.row3-=1;
                }   
                break;
        
            case 9:
                if (playerID === 'X') {
                    this.scoreTracker.col3+=1;
                    this.scoreTracker.row3+=1;
                } else {
                    this.scoreTracker.col3-=1;
                    this.scoreTracker.row3-=1;
                }   
                break;
    
    
            default:
                break;
        }
        
        this.round++;

        //Determine winner
        if (this.round >= 5) {
            this.determineWinner();
        }
        
    }
    
     
    
    
};