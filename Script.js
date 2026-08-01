
// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// Auto Photo Slider
const photos = ["photo1.jpg", "photo2.jpg"];
let current = 0;

setInterval(() => {
  const img = document.getElementById("slider");
  if (img) {
    current = (current + 1) % photos.length;
    img.src = photos[current];
  }
}, 3000);

// Surprise Button
function openGift() {
  alert("💖 Happy Friendship Day Nabiha!\n\nThank you for always being there.\nForever Friends! ❤️");
}

// Music Button
const musicBtn = document.getElementById("musicBtn");
if (musicBtn) {
  musicBtn.onclick = function () {
    window.open("https://www.youtube.com/watch?v=Jkj8c3kvpBo", "_blank");
  };
}

// Countdown
const countdown = document.getElementById("countdown");

if (countdown) {
  const target = new Date("August 3, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      countdown.innerHTML = "💖 Happy Friendship Day 💖";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
  }, 1000);
}
