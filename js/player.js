class Player {
    constructor(name, gameOperatorID) {		
        this.name = name; 									
        this.gameOperatorID = gameOperatorID;
        this.customOperatorID;
    }

    updateName (newName) {
        this.name = newName;
    }

    updateCustOperID (newCustOperID) {
        this.customOperatorID = newCustOperID.toUpperCase();
    }
};