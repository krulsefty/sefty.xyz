var audio = document.getElementById("music");
audio.volume = 0.4;

var player = document.getElementById('music')

if (player) {
window.addEventListener('keydown', function (event) {
    var key = event.which || event.keyCode
    if (key === 32) {
    event.preventDefault();
    player.paused ? player.play() : player.pause()
    } else if (key == 37) {
    event.preventDefault();
    player.currentTime = player.currentTime - 10;
    } else if (key == 39) {
    event.preventDefault();
    player.currentTime = player.currentTime + 10;
    }
});

if (window.location.search) {
    var duration = window.location.search.substr(1);
    player.currentTime = simpleDurationParsing(duration);
    player.play();
}
}

function simpleDurationParsing(duration) {
duration = duration.toLowerCase();

var seconds = 0;
var index = 0;

if ((index = duration.indexOf('m')) > -1) {
    seconds += parseInt(duration.substring(0, index)) * 60;
    duration = duration.substr(index + 1);
}

if ((index = duration.indexOf('s')) > -1)
    duration = duration.substring(0, index);

if (duration.length)
    seconds += parseInt(duration);

return seconds;
}