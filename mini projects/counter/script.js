var counter = 0;

function increase() {
    counter++;
    document.getElementById('number_counter').innerHTML = counter;
}

function decrease() {
    console.log(counter)
    counter--;
    if (counter < 0) {
        counter = 0;
    }
    document.getElementById('number_counter').innerHTML = counter;
}

function reset() {
    counter = 0;
    document.getElementById('number_counter').innerHTML = counter;
}