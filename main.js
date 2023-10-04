const url = "https://api.adviceslip.com/advice";
let diceBtn = document.getElementById("diceBtn"),
  adviceId = document.getElementById("adviceId"),
  adviceContent = document.getElementById("adviceContent");

diceBtn.onclick = () => {
  fetch(url).then(response => response.json()).then(advice => {
    adviceId.innerHTML = advice.slip.id;
    adviceContent.innerHTML = advice.slip.advice;
    return adviceId, adviceContent;
  })
};

window.onload = () => {
  diceBtn.click()
}
