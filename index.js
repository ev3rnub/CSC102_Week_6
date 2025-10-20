
// GET buttons, image and video source via element ID
const aStartButton = document.getElementById('startBtn');
const aStopButton = document.getElementById('stopBtn');
const img = document.getElementById('memeImage');
const aVid = document.getElementById('video');
const aVidBtn = document.getElementById('playBtn');

aVidBtn.addEventListener('click', () => {
  if (aVid.paused == true){
    aVid.play();
    aVidBtn.innerHTML = "Pause Video"
  }else{
    aVid.pause();
    aVidBtn.innerHTML = "Play Video"
  }
});



// start button functionality
function disableStartButton() {
    aStartButton.disabled = true;
    aStopButton.disabled = false;
}

// stop button functionality
function disableStopButton() {
    aStopButton.disabled = true;
    aStartButton.disabled = false;
}


/* ---------- PLAY Animation ---------- */
aStartButton.addEventListener('click', () => {
  // Remove the class (in case it was already there)
  img.classList.remove('animate');

  // Force re‑flow – guarantees a fresh start
  void img.offsetWidth;

  // Add the class → animation runs from the beginning
  img.classList.add('animate');
});

/* ---------- STOP Anination ---------- */
aStopButton.addEventListener('click', () => {
  img.classList.remove('animate');
});