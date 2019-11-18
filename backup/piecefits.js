Game.prototype.pieceFits = function(piece) {
    var i = 0;
    var x;
    var y;
    var arenaPtVal;
    var flag = true;
    for (i=0;i<4;i++) {
        x = piece.ptList[i].x+piece.upL.x;
        y = piece.ptList[i].y+piece.upL.y;
        if (x>=0 && x<=9 && y>=0 && y<=19) {
            arenaPtVal = this.arena[x][y];
            if (arenaPtVal != 0) {
                flag = false;
            }
        } else {
            flag = false;
        }
    }
    return flag;
}
