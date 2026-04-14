let buttonEl = document.getElementById("toggleButtonId");

buttonEl.addEventListener("click", () => {
   document.documentElement.classList.toggle('dark');
    
    // Just update the button text so the user knows what happened
    const isDark = document.documentElement.classList.contains('dark');
    buttonEl.textContent = isDark ? "Dark" : "Light";
});