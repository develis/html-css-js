var background = document.getElementById('background');
var moon = document.getElementById('moon');
var boreal = document.getElementById('boreal');
var road = document.getElementById('road');
var title = document.getElementById('h1');

window.addEventListener('scroll', function (){
    var mov = window.scrollY;

    background.style.top = mov * 0.5 + 'px';
    moon.style.left = -mov * 0.6 + 'px';
    boreal.style.left = mov * 0.3 + 'px';
    road.style.top = mov * 0.3 + 'px';
    title.style.top = mov * 1 + 'px';
})