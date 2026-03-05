const randomColor = function(){
  const HEX = '0123456789abcdefABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += HEX[Math.floor(Math.random() * 16)];
  }
  return color;
}

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.body;
const colorCode = document.getElementById('colorCode');

let interval;

start.addEventListener('click', function () {
  interval = setInterval(() => {
    body.style.background = randomColor();
    colorCode.textContent = body.style.background;
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(interval);
});