var video = document.getElementById('ahmad_stop_motion')
var replay_btn = document.getElementsByClassName('replay_btn')


// when video ends event
video.onended = function() {
    replay_btn[0].style.opacity = '0.9'
    replay_btn[0].style.transform = 'rotate(-360deg)'
};

// play the video again
function play_again() {
    if (video.paused) {
        video.play()
        replay_btn[0].style.opacity = '0'
    }

}