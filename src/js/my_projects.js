document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("btn_my_project_first");
  const projectsPerClick = 3;

  if (!loadMoreButton) {
    console.error("Кнопка з ID 'btn_my_project_first' не знайдена!");
    return;
  }

  const allProjects = Array.from(document.querySelectorAll(".list_my_project"));
  let hiddenProjects = allProjects.filter((project) => project.classList.contains("hidden"));

  function applyMarginBeforeButton() {
    const visibleItems = Array.from(document.querySelectorAll(".list_my_project:not(.hidden)"));
    
    visibleItems.forEach(item => item.style.marginBottom = '0');
    
    if (visibleItems.length > 0 && loadMoreButton && loadMoreButton.offsetParent !== null) {

      const lastVisible = visibleItems[visibleItems.length - 1];
      
      const marginBottom = getComputedStyle(document.documentElement).getPropertyValue('--margin-bottom');
      
      lastVisible.style.marginBottom = marginBottom;
    }
  }

  function loadMoreProjects() {
    const remainingProjects = hiddenProjects.length;

    hiddenProjects.slice(0, projectsPerClick).forEach((project) => {
      project.style.display = "block";
      project.classList.remove("hidden");
    });

    hiddenProjects = hiddenProjects.slice(projectsPerClick);

    if (!hiddenProjects.length) {
      loadMoreButton.style.display = "none";
      loadMoreButton.setAttribute("aria-hidden", "true");
    }

    applyMarginBeforeButton();
  }

  loadMoreButton.addEventListener("click", loadMoreProjects);

  applyMarginBeforeButton();

  window.addEventListener("resize", applyMarginBeforeButton);
});
