var fortunes = [
  "Change the world by being yourself",
  "Every moment is a fresh beginning",
  "Love For All, Hatred For None",
  "Die with memories, not dreams",
  "Never regret anything that made you smile",
  "All limitations are self-imposed",
  "Whatever you do, do it well",
  "Oh, the things you can find, if you don’t stay behind",
];

var color = "red";

var container = document.getElementById("fortuneShow");

function newFortune() {
  var random = Math.floor(Math.random() * fortunes.length);

  container.innerHTML = fortunes[random];
}

setInterval(function () {
  container.style.border = "2px solid " + color;

  if (color === "red") {
    color = "blue";
  } else {
    color = "red";
  }
}, 1000);

setTimeout(function () {
  window.location.reload();
}, 5000);
