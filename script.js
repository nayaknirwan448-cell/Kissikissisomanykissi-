const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const gif = document.getElementById("celebrateGif");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button clicked
yesBtn.addEventListener("click", () => {
  result.style.display = "block";
  gif.style.display = "block";
});
