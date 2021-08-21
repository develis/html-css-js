function bgChange() {
    var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var color = `rgb(${r}, ${g}, ${b})`
    var background = document.getElementsByTagName('body')[0];
    
    return background.style.background = color;
}