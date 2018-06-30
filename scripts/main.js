var myImage = document.querySelector('img');
var x = 1;

myImage.onclick = function() {
    if(x === 1) {
        myImage.setAttribute ('src','images/t2.jpg');
        x = x + 1;
    } else if (x === 2) {
        myImage.setAttribute ('src','images/t3.jpg');
        x = x + 1;
    } else if (x === 3) {
        myImage.setAttribute ('src','images/t4.jpg');
        x = 1;
    }
}