// we also can add handler for input on "Enter" to stop/continue timer 
let enterPressCount = 0;
let abort = false;

inputEl.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    if(enterPressCount%2 !== 0){
      abort = !abort
    } else{
    const seconds = Number(inputEl.value.replace(/[^0-9]/g, ''));

    animateTimer(seconds);

    inputEl.value = '';
    return enterPressCount++}
  }
});
