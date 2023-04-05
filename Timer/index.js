"use strict"
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (inputSeconds) => {
  let hours = Math.floor(inputSeconds/3600);
  let minutes = Math.floor((inputSeconds - hours*3600)/60);
  let seconds = inputSeconds%100%60;
  const decremetSeconds = () => {
    if(hours <= 0){
      hours = 0
    }
    
    if(minutes <= 0){
      if(hours <= 0 && minutes <= 0){
        hours = 0
        minutes = 0
      } else{

        minutes = 60
        hours--
      }
    }

    if(seconds <= 0 ) {
      if(hours <= 0 && minutes <= 0 && seconds <= 0){
        hours = 0
        minutes = 0
        seconds = 0
      } else{
        seconds = 60
        minutes--
      } 
    }
    seconds--;
    
    return timerEl.innerHTML = `${hours} : ${minutes} : ${seconds}`
  }
  const timer = setInterval(decremetSeconds, 1000)
  setTimeout(() => { clearInterval(timer); alert('time is out!'); }, inputSeconds*1000);

}
}

const animateTimer = createTimerAnimator();

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value.replace(/[^0-9]/g, ''));

  animateTimer(seconds);

  inputEl.value = '';
});






















