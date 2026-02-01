let noCount = 0;
const noText = document.getElementById("noText");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const gif = document.getElementById("celebrateGif");

// NO button runs away + shows messages
noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noText.style.display = "block";

  if (noCount === 1) {
    noText.innerText = "Are you sure? 🥺";
  } else if (noCount === 2) {
    noText.innerText = "Please think once more 💖";
  } else if (noCount === 3) {
    noText.innerText = "Okay okay… last chance 😭";
  } else {
    noText.innerText = "You know you want to say YES 😏💘";
  }
});

// YES button clicked
yesBtn.addEventListener("click", () => {
  result.style.display = "block";
  gif.style.display = "block";
});
