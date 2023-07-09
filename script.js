window.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".content section");

  // Hide all sections except the first one
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Add click event listeners to navigation links
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Hide all sections
      for (let j = 0; j < sections.length; j++) {
        sections[j].style.display = "none";
      }

      // Show the target section
      targetElement.style.display = "block";

      // Remove the 'selected' class from all links
      for (let k = 0; k < navbarLinks.length; k++) {
        navbarLinks[k].classList.remove("selected");
      }

      // Add the 'selected' class to the clicked link
      this.classList.add("selected");

      // Smoothly scroll to the target section
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  }
});
