// Chad Verbus
// CSC102
// 10/26/2025
// GET buttons, image and video source via element ID
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