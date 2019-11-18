function handler(e) {
    e=e||event;
    //myGame.handleKeyCodes(e.which||e.keycode);
    //myGame.touchBottom();
    //yGame.render();
    e=e.which||e.keycode;
    myGame.update(e);
}

function codeToColor(n) {
    switch (n) {
    case 0:
        return "aliceblue";
        break;
    case 1:
        return "red";
        break;
    case 2:
        return "blue";
        break;
    case 3:
        return "orange";
        break;
    case 4:
        return "green";
        break;
    case 5:
        return "cyan";
        break;
    case 6:
        return "yellow";
        break;
    case 7:
        return "purple";
        break;
    default:
        return "black";
    }
}

//function main() {
    myGame = new Game;
    myGame.render();
    var t=setTimeout("myGame.update(40)",1000);
    document.onkeydown = handler;
//}

//main();
