Game.prototype.render = function() {
    var i = 0;
    var j = 0;
    var myElement;
    for (i=0;i<10;i++) { for (j=0;j<20;j++) {
        myElement=document.getElementById(i+','+j);
        switch (this.arena[i][j]) {
        case 0:
            myElement.style.background="aliceblue";
            break;
        case 1:
            myElement.style.background="red";
            break;
        case 2:
            myElement.style.background="blue";
            break;
        case 3:
            myElement.style.background="orange";
            break;
        case 4:
            myElement.style.background="green";
            break;
        case 5:
            myElement.style.background="cyan";
            break;
        case 6:
            myElement.style.background="yellow";
            break;
        case 7:
            myElement.style.background="purple";
            break;
        default:
            myElement.style.background="black";
        }
    }}
    var x = 0;
    var y = 0;
    for (i=0;i<4;i++) {
        x = this.current.upL.x+this.current.ptList[i].x ;
        y = this.current.upL.y+this.current.ptList[i].y ;
        myElement = document.getElementById(x+','+y);
        switch (this.current.color) {
        case 0:
            myElement.style.background="aliceblue";
            break;
        case 1:
            myElement.style.background="red";
            break;
        case 2:
            myElement.style.background="blue";
            break;
        case 3:
            myElement.style.background="orange";
            break;
        case 4:
            myElement.style.background="green";
            break;
        case 5:
            myElement.style.background="cyan";
            break;
        case 6:
            myElement.style.background="yellow";
            break;
        case 7:
            myElement.style.background="purple";
            break;
        default:
            myElement.style.background="black";
        }
    }
}
