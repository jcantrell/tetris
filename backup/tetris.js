function handler(e) {
    e=e||event;
    switch(e.which||e.keyCode) {
    case 37 : //left
        myGame.current.upL.x--;
        if (!myGame.pieceFits(myGame.current)) 
            {myGame.current.upL.x++;}
        break;
    case 39: //right
        myGame.current.upL.x++;
        if (!myGame.pieceFits(myGame.current)) 
            {myGame.current.upL.x--;}
        break;
    case 38: //up
        myGame.current.rotateRight();
        if (!myGame.pieceFits(myGame.current)) 
            {myGame.current.rotateLeft();}
        break;
    case 40: //down
        myGame.current.upL.y++;
        if (!myGame.pieceFits(myGame.current)) 
            {myGame.current.upL.y--;}
        break;
    }
    myGame.current.upL.y++;
    if (!myGame.pieceFits(myGame.current)) { //if current touched bottom
        myGame.current.upL.y--;
        //place current in arena
        var i=0;
        var x;
        var y;
        for (i=0;i<4;i++) {
            x = myGame.current.upL.x + myGame.current.ptList[i].x;
            y = myGame.current.upL.y + myGame.current.ptList[i].y;
            myGame.arena[x][y] = myGame.current.color;
        }
        //switch current piece
        myGame.current = myGame.next;
        //choose new next piece
        myGame.next = new Shape(Math.floor(Math.random()*7));
        //check for full rows
        myGame.updateRows();
        //update score
    } else {
        myGame.current.upL.y--;
    }
    myGame.render();
}

//function main() {
    myGame = new Game;
    myGame.render();
    document.onkeydown = handler;
    
//}

//main();
