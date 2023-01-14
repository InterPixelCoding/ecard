const vid = document.querySelector('video');

vid.play();
vid.muted = true;

function openLetter() {
    const button =  document.querySelector('.letter > .btn')
    document.querySelector('.letter-content').classList.toggle('open');
    
    if (button.innerHTML === "Open Letter") {
        button.innerHTML = "Close Letter";
    } else {
        button.innerHTML = "Open Letter";
    }
}

function unmute() {
    const text = document.querySelector('.mute')
    if (text.innerHTML === "Turn Sound on") {
        text.innerHTML = "Turn Sound off";
        vid.muted = false;
    } else {
        text.innerHTML = "Turn Sound on";
        vid.muted = true;
    }
}