// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selector = document.getElementById('horn-select');
  let picture = document.querySelector('img');
  let audio = document.querySelector('audio');
  selector.addEventListener('change', function(){
    let val = selector.options[selector.selectedIndex].value;
    if (val == 'air-horn'){
      picture.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (val == 'car-horn') {
      picture.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (val == 'party-horn') {
      picture.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });
  let volume = document.getElementById('volume-controls');
  let inputVol = volume.querySelector('input');
  let inputImg = volume.querySelector('img');
  inputVol.addEventListener('input', function(){
    audio.volume = inputVol.value/100;
    if (inputVol.value > 66) {
      inputImg.src = 'assets/icons/volume-level-3.svg'
    } else if (inputVol.value > 32) {
      inputImg.src = 'assets/icons/volume-level-2.svg'
    } else if (inputVol.value > 0) {
      inputImg.src = 'assets/icons/volume-level-1.svg'
    } else {
      inputImg.src = 'assets/icons/volume-level-0.svg'
    }
  });
  let button = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  button.addEventListener('click', function(){
    audio.play();
    if(selector.options[selector.selectedIndex].value == 'party-horn') {
      if(inputVol.value > 0) {
        jsConfetti.addConfetti();
      }
    }
  })
}