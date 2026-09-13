const globe = document.querySelector("#globe");
const kindnessBtn = document.querySelector("#shake-kindness");
const fortuneBtn = document.querySelector("#shake-fortune");
const message = document.querySelector("#message");

const kindnessMessages = [
  "you are someone's favourite person to sit next to.",
  "the thing you are building counts, even half finished.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate tastes better after a hard day. you've earned one.",
  "you ask good questions. that is the whole skill.",
];

const fortuneMessages = [
  "An unexpected piece of creative clarity will reach you soon.",
  "A bug you've been fighting will suddenly make complete sense.",
  "A warm drink and a breakthrough are in your near future.",
  "You will soon find the exact tool or inspiration you've been looking for.",
  "An old idea will resurface with an exciting new twist.",
  "Good news is quietly making its way toward you."
];

function triggerShake(messagePool) {
  globe.classList.add("shaking");
  
  setTimeout(() => {
    globe.classList.remove("shaking");
    const pick = Math.floor(Math.random() * messagePool.length);
    message.textContent = messagePool[pick];
  }, 600);
}

kindnessBtn.addEventListener("click", () => triggerShake(kindnessMessages));
fortuneBtn.addEventListener("click", () => triggerShake(fortuneMessages));