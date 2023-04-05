"use strict"
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (inputSeconds) => {
  let hours = Math.floor(inputSeconds/3600);
  console.log(hours)
  let minutes = Math.floor((inputSeconds - hours*3600)/60);
  console.log(minutes)
  let seconds = inputSeconds%100%60;
  console.log(seconds)
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
    // console.log(seconds)
    
    return timerEl.innerHTML = `${hours} : ${minutes} : ${seconds}`
  }
  const timer = setInterval(decremetSeconds, 1000)
  setTimeout(() => { clearInterval(timer); alert('stop'); }, inputSeconds*1000);

}
}

const animateTimer = createTimerAnimator();

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value.replace(/[^0-9]/g, ''));

  animateTimer(seconds);

  inputEl.value = '';
});



















