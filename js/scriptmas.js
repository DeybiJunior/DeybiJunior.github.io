const toggleButton = document.getElementById("toggle-projects");
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
        toggleButton.textContent = "Ver menos proyectos";
    } else {
        extraProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add("hidden");
                project.classList.remove("show");
            }, index * 50);
        });
        toggleButton.textContent = "Ver más proyectos";
    }
});