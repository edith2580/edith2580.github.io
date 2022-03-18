const clock = document.querySelector("h2#clock");

function updateClock() {
  // 09:51:35 GMT+0900
  //const time = new Date().toTimeString().split(" ")[0];
  //clock.innerText = time;

  const date  = new Date();
  // padStart 를 이용해 0으로 채울수 있다.
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour} : ${min} : ${sec}`;
}

updateClock();
setInterval(updateClock, 1000);
