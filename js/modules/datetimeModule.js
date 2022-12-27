document.querySelector("#today").valueAsDate = new Date();
function prev() {
  document.getElementById("today").stepUp(-1);
}
function next() {
  document.getElementById("today").stepUp(1);
}

document.querySelector("#tomorrow").valueAsDate = new Date();
function prev2() {
  document.getElementById("tomorrow").stepUp(-1);
}
function next2() {
  document.getElementById("tomorrow").stepUp(1);
}
