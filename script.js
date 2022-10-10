const theater = document.getElementById('theatre');
const jema = document.getElementById('jema');
let jiplaAudio = new Audio('audio/jipla.mp3');
theater.onmouseover = () => {
  jema.style.animation = 'fadeIn 10s';
  jiplaAudio.play();
};
