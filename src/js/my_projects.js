document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("btn_my_project_first");
  const projectsPerClick = 3;

  if (!loadMoreButton) {
    console.error("Кнопка з ID 'btn_my_project_first' не знайдена!");
    return;
  }


  const allProjects = Array.from(document.querySelectorAll(".list_my_project"));
  let hiddenProjects = allProjects.filter((project) => project.classList.contains("hidden"));


  function loadMoreProjects() {
    const remainingProjects = hiddenProjects.length;

    hiddenProjects.slice(0, projectsPerClick).forEach((project) => {
      project.style.display = "block";
      project.classList.remove("hidden");
      project.classList.add("show");
    });


    hiddenProjects = hiddenProjects.slice(projectsPerClick);


    if (!hiddenProjects.length) {
      loadMoreButton.style.display = "none";
      loadMoreButton.setAttribute("aria-hidden", "true");
    }
  }


  loadMoreButton.addEventListener("click", loadMoreProjects);
})
