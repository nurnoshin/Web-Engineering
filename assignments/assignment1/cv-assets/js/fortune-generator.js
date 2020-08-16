function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFortune() {
  const fortunes = [
    "True wisdom comes not from knowledge but from understanding.",
    "It is best to act with confidence, no matter how little right you have to it.",
    "It is better to have a hen tomorrow than an egg today.",
    "A focused mind is one of the most powerful forces in the universe.",
    "To courageously shoulder the responsibility of one's mistake is character.",
  ];

  const div = document.querySelector(".fortune");

  const randomIndex = getRandomInt(0, fortunes.length - 1);

  div.innerHTML = fortunes[randomIndex];
}

window.addEventListener("load", generateFortune);
