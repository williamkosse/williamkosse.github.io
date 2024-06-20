function toggleContent(projectId) {
  var projectItems = document.querySelectorAll(".project-item");
  var projectContents = document.querySelectorAll(".project-content");
  var clickedContent = document.getElementById(projectId);

  // Toggle display of clicked project content
  if (clickedContent.style.display === "block") {
    clickedContent.style.display = "none";
    // Remove 'active' class from clicked project item
    document.querySelector(".project-item.active").classList.remove("active");
  } else {
    // Hide all project contents
    projectContents.forEach((content) => {
      content.style.display = "none";
    });
    // Show clicked project content
    clickedContent.style.display = "block";
    // Remove 'active' class from all project items
    projectItems.forEach((item) => {
      item.classList.remove("active");
    });
    // Add 'active' class to clicked project item
    event.target.classList.add("active");
  }
}
