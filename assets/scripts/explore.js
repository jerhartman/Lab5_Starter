// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let selectVoice = document.querySelector('select');
  let voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.setAttribute('name', voices[i].name);
    selectVoice.appendChild(option);
  } 
  let image = document.querySelector('img');
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    let text = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(text);
    let selected = selectVoice.selectedOptions[0].getAttribute('name');
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selected) {
      utterance.voice = voices[i];
      }
    }
    image.src = 'assets/images/smiling-open.png';
    utterance.addEventListener('end', () => {
      image.src = 'assets/images/smiling.png';
    });
    speechSynthesis.speak(utterance);
  });
}