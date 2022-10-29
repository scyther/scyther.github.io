const toggleDarkMode = () => {
  document.body.classList.toggle("dark-theme");
};

window.onload = function () {
  let button = document.getElementById("darkMode");
  button.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
  });
};
