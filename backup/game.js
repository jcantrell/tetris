function Game() {
    this.arena = [ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ];
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
}
