// HEAD = 0, TAILS = 1
function playerHeads() {
    document.getElementById('tail_img').style.display = 'none';
    document.getElementById('head_img').style.display = 'none';
    var choice = document.getElementById('choice');
    var result = document.getElementById('result');
    choice.innerHTML = `The player chooses: <b>Heads</b> <br> The computer is: <b>Tails</b>`;
    var heads_or_tails = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    if (heads_or_tails == 0) {
        document.getElementById('landed').innerHTML = `And it landed on... <b>Heads!</b>`
        result.innerHTML = `<br> The player won! Congratulations! :)`
        result.style.color = `rgb(157, 248, 103)`;
        document.getElementById('head_img').style.display = 'inline'
    } else {
        document.getElementById('landed').innerHTML = `And it landed on... <b>Tails!</b>`
        result.innerHTML = `<br> The player lost. Sorry! :(`
        result.style.color = `rgb(245, 231, 108)`;
        document.getElementById('tail_img').style.display = 'inline'
    }
}
function playerTails() {
    document.getElementById('tail_img').style.display = 'none';
    document.getElementById('head_img').style.display = 'none';
    var choice = document.getElementById('choice');
    var result = document.getElementById('result');
    choice.innerHTML = `The player chooses: <b>Tails</b> <br> The computer is: <b>Heads</b>`;
    var heads_or_tails = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    if (heads_or_tails == 1) {
        document.getElementById('landed').innerHTML = `And it landed on... <b>Tails!</b>`
        result.innerHTML = `<br> The player won! Congratulations! :)`
        result.style.color = `rgb(245, 231, 108)`;
        document.getElementById('tail_img').style.display = 'inline'
    } else {
        document.getElementById('landed').innerHTML = `And it landed on... <b>Heads!</b>`
        result.innerHTML = `<br> The player lost. Sorry! :(`
        result.style.color = `rgb(157, 248, 103)`;
        document.getElementById('head_img').style.display = 'inline'
    }
}