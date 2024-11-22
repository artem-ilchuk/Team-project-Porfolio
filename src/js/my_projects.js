document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("btn_my_project_first");
  const projectsPerClick = 3;

  if (!loadMoreButton) {
    console.error("Кнопка з ID 'btn_my_project_first' не знайдена!");
    return;
  }

  loadMoreButton.addEventListener("click", () => {
    const hiddenProjects = document.querySelectorAll(".list_my_project.hidden");
    let shown = 0;

    hiddenProjects.forEach((project) => {
      if (shown < projectsPerClick && project.classList.contains("hidden")) {
        project.style.display = "block"; 
        setTimeout(() => {
          project.classList.remove("hidden");
          project.classList.add("show"); 
        }, 100); 
        shown++;
      }
    });

    if (document.querySelectorAll(".list_my_project.hidden").length === 0) {
      loadMoreButton.style.display = "none";
    }
  });
});
