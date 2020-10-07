class Player {
    constructor(name, gameOperatorID) {		
        this.name = name; 									
        this.gameOperatorID = gameOperatorID;
        this.boxSelectionsHistory = [];
        this.winner = false;
    }
};