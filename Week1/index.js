let buttonEl = document.getElementById("toggleButtonId");

buttonEl.addEventListener("click", () => {
    if (buttonEl.textContent === "Light") {
        buttonEl.textContent = "Dark";
        buttonEl.style.color = "#212121";           
        buttonEl.style.backgroundColor = "#ffffff"; 
    } else {
        buttonEl.textContent = "Light";
        buttonEl.style.color = "#ffffff";           
        buttonEl.style.backgroundColor = "#212121"; 
    }
    document.body.classList.toggle('theme-dark');
});