const toggleButton = document.getElementById("toggle-projects");
const icon = toggleButton.querySelector("i");
const extraProjects = document.querySelectorAll(".extra-project");
let visible = false;

toggleButton.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
        extraProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.remove("hidden");
                project.classList.add("show");
            }, index * 100);
        });
        toggleButton.firstChild.textContent = "Ver menos proyectos ";
        icon.className = "fas fa-chevron-up";
    } else {
        extraProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add("hidden");
                project.classList.remove("show");
            }, index * 50);
        });
        toggleButton.firstChild.textContent = "Ver más proyectos ";
        icon.className = "fas fa-chevron-down";
    }
});
