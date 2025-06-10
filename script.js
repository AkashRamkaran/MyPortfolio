let button = document.querySelector("#togglebutton");
let label = document.querySelector("#toggleLabel");

button.addEventListener("change", function () {
  if (button.checked) {
    label.innerText = "Dark Mode";
    document.body.classList.add("dark-mode");
  } else {
    label.innerText = "Light Mode";
    document.body.classList.remove("dark-mode");
  }
});