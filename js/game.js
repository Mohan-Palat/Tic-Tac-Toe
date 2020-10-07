class Game {
    constructor(name) {		
        this.name = name; 									
        this.players = [];
        this.winner = '';
        this.scoreTracker = {
            col1: 0,
            col2: 0,
            col3: 0,
            row1: 0,
            row2: 0,
            row3: 0,
        }
    }



    updateScore (playerID, box) {
        console.log(`${playerID} ${box}`);
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

    }
    
};