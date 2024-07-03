function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const bodyColor = document.querySelector('body');
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timerId = null;
  
  stopBtn.disabled = true;
  
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  
    timerId = setInterval(() => {
      bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
  
    clearInterval(timerId);
  });
  
// =========================DRAFT======================================

//start > randomColor; stop > btn.setAttribute("disabled", true); 
//start > function getRandomHexColor; stop > btn.setAttribute("disabled", true); > clear.
//setInterval => 1s = 1000ms
//start disabled > stop disabled...
//startBtn.addEventListenr pe start & stop disableed on click
//stpBtn.addEventListenr pe statr & stop => disabled on click
//const timerId = setInterval(callback, delay, arg1, arg2, ...);
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;
//btn.setAttribute("disabled", true);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => { !!!!!!!!!!!!!!!!!!!!!!!
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId); !!!!!!!!!!!!!!!!!!!!!!
//   console.log(`Interval with id ${timerId} has stopped!`);
// });