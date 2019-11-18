function Point(x,y) {
    this.x = x;
    this.y = y;
}

function Shape(type) {
    this.ptList = new Array(4);
    switch (type) {
        case 0: //O
            this.upL = new Point(4,0);
            this.ptList[0] = new Point(0,0);
            this.ptList[1] = new Point(1,0);
            this.ptList[2] = new Point(0,1);
            this.ptList[3] = new Point(1,1);
            this.sizeM1 = 1;
            this.color = 1;
            break;
        case 1: //L
            this.upL = new Point(4,-1);
            this.ptList[0] = new Point(0,1);
            this.ptList[1] = new Point(0,2);
            this.ptList[2] = new Point(1,1);
            this.ptList[3] = new Point(2,1);
            this.sizeM1 = 2;
            this.color = 2;
            break;
        case 2: //bL
            this.upL = new Point(4,0);
            this.ptList[0] = new Point(0,0);
            this.ptList[1] = new Point(0,1);
            this.ptList[2] = new Point(1,1);
            this.ptList[3] = new Point(2,1);
            this.sizeM1 = 2;
            this.color = 3;
            break;
        case 3: //S
            this.upL = new Point(4,-1);
            this.ptList[0] = new Point(0,2);
            this.ptList[1] = new Point(1,2);
            this.ptList[2] = new Point(1,1);
            this.ptList[3] = new Point(2,1);
            this.sizeM1 = 2;
            this.color = 4;
            break;
        case 4: //Z
            this.upL = new Point(4,-1);
            this.ptList[0] = new Point(0,1);
            this.ptList[1] = new Point(1,1);
            this.ptList[2] = new Point(1,2);
            this.ptList[3] = new Point(2,2);
            this.sizeM1 = 2;
            this.color = 5;
            break;
        case 5: //T
            this.upL = new Point(4,0);
            this.ptList[0] = new Point(1,0);
            this.ptList[1] = new Point(0,1);
            this.ptList[2] = new Point(1,1);
            this.ptList[3] = new Point(2,1);
            this.sizeM1 = 2;
            this.color = 6;
            break;
        case 6://I
            this.upL = new Point(4,-2);
            this.ptList[0] = new Point(1,2);
            this.ptList[1] = new Point(2,2);
            this.ptList[2] = new Point(3,2);
            this.ptList[3] = new Point(4,2);
            this.sizeM1 = 4;
            this.color = 7;
            break;
    }
}      

Shape.prototype.rotateRight = function() {
    var i = 0;
    temp = new Point(0,0);
    for (i=0;i<4;i++) {
        temp.x = this.sizeM1 - this.ptList[i].y;
        temp.y = this.ptList[i].x ;
        this.ptList[i].x = temp.x;
        this.ptList[i].y = temp.y;
    }
}

Shape.prototype.rotateLeft = function() {
    var i = 0;
    temp = new Point(0,0);
    for (i=0;i<4;i++) {
        temp.x = this.ptList[i].y;
        temp.y = this.sizeM1 - this.ptList[i].x;
        this.ptList[i].x = temp.x;
        this.ptList[i].y = temp.y;
    }
}
