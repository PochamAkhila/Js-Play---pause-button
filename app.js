const myAudio = document.getElementById("myAudio");
const myAudio2 = document.getElementById("myAudio2");
const myAudio3 = document.getElementById("myAudio3");

function playB1() {
  myAudio.play();
}
function pauseB1() {
  myAudio.pause();
}

function playB2() {
  myAudio2.play();
}
function pauseB2() {
  myAudio2.pause();
}

function playB3() {
  myAudio3.play();
}
function pauseB3() {
  myAudio3.pause();
}


// const plBtn = document.getElementById("pl_btn");
// const pauseBtn = document.getElementById("pau_btn");

// plBtn.addEventListener("click", playPause);

// function playPause() {
//   if (myAudio.paused) {
//     myAudio.play();
//     plBtn.innerHTML = "Pause"
//   } else {
//     myAudio.pause();
//     pauseBtn.innerHTML = "Play"
//   }
// }