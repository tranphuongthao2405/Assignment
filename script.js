const dateText = document.getElementById("date");
const timeText = document.getElementById("time");
const confirmButton = document.getElementById("confirmButton");
const confirmModal = document.getElementById("confirmModal");
const startBox = document.getElementById("startBox");
const okayButton = document.getElementById("okayButton");
const declineButton = document.getElementById("declineButton");
const confessModal = document.getElementById("confessModal");
const acceptButton = document.getElementById("acceptButton");
const refuseButton = document.getElementById("refuseButton");
const imageContainer = document.getElementsByClassName("imageContainer")[0];
const cuteImage = document.getElementById("cuteImage");

const date = new Date().toLocaleDateString();
dateText.innerHTML = `Chào cậu, hôm nay là ngày ${date}`;
const hour =
  new Date().getHours() < 10
    ? `0${new Date().getHours()}`
    : new Date().getHours();
const minutes =
  new Date().getMinutes() < 10
    ? `0${new Date().getMinutes()}`
    : new Date().getMinutes();
const time = `${hour}:${minutes}`;
timeText.innerHTML = `Chính xác bây giờ là ${time}`;

startBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "confirmButton") {
    startBox.style.display = "none";
    confirmModal.style.display = "block";
  }
});

okayButton.addEventListener("click", (e) => {
  e.preventDefault();
  confirmModal.style.display = "none";
  confessModal.style.display = "block";
});

declineButton.addEventListener("mouseover", () => {
  let offsetLeft = Math.floor(Math.random() * 640) + 1;
  let offsetTop = Math.floor(Math.random() * 480) + 1;
  confirmModal.style.left = `${offsetLeft}px`;
  confirmModal.style.top = `${offsetTop}px`;
});

refuseButton.addEventListener("mouseover", () => {
  let offsetLeft = Math.floor(Math.random() * 640) + 1;
  let offsetTop = Math.floor(Math.random() * 480) + 1;
  confessModal.style.left = `${offsetLeft}px`;
  confessModal.style.top = `${offsetTop}px`;
});

acceptButton.addEventListener("click", (e) => {
  e.preventDefault();
  confessModal.style.display = "none";
  imageContainer.style.display = "block";
  cuteImage.src = "./loveyou.jpg";
});
