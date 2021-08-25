var timer = 0;
var click_counter = 0;
var trigger = 0;
function start() {
    click_counter++;
    trigger++;
    if (trigger == 1) {
        var interval_10sec = window.setInterval(function () {
            timer++;
            document.getElementById('stopwatch').innerHTML = timer;
            if (timer == 10) {
                clearInterval(interval_10sec);
                return document.getElementById('result').innerHTML = `You clicked ${click_counter} times in 10 seconds. Wow! Refresh the page to try again.`;
            }
        }, 1000);
    }
}