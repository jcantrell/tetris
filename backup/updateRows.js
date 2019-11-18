Game.prototype.updateRows = function() {
    var y;
    var x;
    var rowIsFull;
    for (y=19;y>=0;y--) {                   //for each row from bottom
        rowIsFull = true;
        for (x=0;x<10;x++) {                //check if row is full,
            if (this.arena[x][y] == 0) {
                rowIsFull = false;   
            }
        }
        if (rowIsFull) {                    //if so, move every row above it
            for (y2=y;y2>0;y2--) {         //down by one
                for (x2=0;x2<10;x2++) {
                    this.arena[x2][y2] = this.arena[x2][y2-1];
                    this.arena[x2][0]  = 0;
                }
            }
            y++;
        }
    }
}
