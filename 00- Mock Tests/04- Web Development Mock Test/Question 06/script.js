var openModalBtn = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
