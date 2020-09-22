console.log('working');
window.addEventListener('keydown', function (e){
    // for audio have an audio tag & play it,
    // & also set currentTime = 0 before playing it
    // e.g.
    // audio.currentTime = 0;
    // audio.play();
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!key) return false;
    key.classList.add('playing');
});
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', function(e){
        if(e.propertyName !== 'transform') return false;
        this.classList.remove('playing');
    });
});