var video = document.getElementById('ahmad_stop_motion')
var replay_btn = document.getElementsByClassName('replay_btn')


// when video ends event
video.onended = function() {
    replay_btn[0].style.visibility = 'visible'
};