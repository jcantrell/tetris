function Game() {
    this.arena = [ 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ];
    this.current = new Shape(Math.floor(Math.random()*7));
    this.next = new Shape(Math.floor(Math.random()*7));
    var i = 0;
    var j = 0;
    for (i=0;i<10;i++) { for (j=0;j<20;j++) {
        document.write("<div id=\"");
        document.write(i+','+j);
        document.write("\" style=\"height:20px;width:20px;position:fixed;top:");
        document.write(20*j);
        document.write("px;left:");
        document.write(20*i);
        document.write("px;background-color:aliceblue;\"></div>");
    }}
    

this.pieceFits = function(piece) {
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
this.render = function() {
    var i = 0;
    var j = 0;
    var myElement;
    for (i=0;i<10;i++) { for (j=0;j<20;j++) {
        myElement=document.getElementById(i+','+j);
        myElement.style.background=codeToColor(this.arena[i][j]);
    }}
    var x = 0;
    var y = 0;
    for (i=0;i<4;i++) {
        x = this.current.upL.x+this.current.ptList[i].x ;
        y = this.current.upL.y+this.current.ptList[i].y ;
        myElement = document.getElementById(x+','+y);
        myElement.style.background=codeToColor(this.current.color);
    }
}
this.update = function(derKeyCoden) {
    clearTimeout(t);
    //check if move is possible; if it is, execute move
    this.handleKeyCodes(derKeyCoden);
    //check if current piece touched bottom; if so, update erruh-thang
    this.touchBottom();
    //render the updates
    this.render();
    t=setTimeout("myGame.update(40)",1000);
}
this.touchBottom = function() {
    this.current.upL.y++;
    if (!this.pieceFits(this.current)) { //if current touched bottom
        this.current.upL.y--;
        //place current in arena
        var i=0;
        var x;
        var y;
        for (i=0;i<4;i++) {
            x = this.current.upL.x + this.current.ptList[i].x;
            y = this.current.upL.y + this.current.ptList[i].y;
            this.arena[x][y] = this.current.color;
        }
        //switch current piece
        this.current = myGame.next;
        //choose new next piece
        this.next = new Shape(Math.floor(Math.random()*7));
        //check for full rows
        this.updateRows();
        //update score
    } else {
        this.current.upL.y--;
    }
}
this.updateRows = function() {
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
this.handleKeyCodes = function(n) {
    //check if move is possible; if it is, execute move
    switch(n) {
    case 37: //left
        this.current.upL.x--;
        if (!this.pieceFits(this.current)) 
            {this.current.upL.x++;}
        break;
    case 39: //right
        this.current.upL.x++;
        if (!this.pieceFits(this.current)) 
            {this.current.upL.x--;}
        break;
    case 38: //up
        this.current.rotateRight();
        if (!this.pieceFits(this.current)) 
            {this.current.rotateLeft();}
        break;
    case 40: //down
        this.current.upL.y++;
        if (!this.pieceFits(this.current)) 
            {this.current.upL.y--;}
        break;
    default:
        break;
    }
}
}
