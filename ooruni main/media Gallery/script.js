document.getElementById("filter-dropdown").addEventListener("change", function () {
  const filterValue = this.value;
  const images = document.querySelectorAll(".image");

  images.forEach((img) => {
      if (filterValue === "all") {
          img.style.display = "block"; // Show all images
      } else {
          if (img.classList.contains(filterValue)) {
              img.style.display = "block"; // Show only filtered category
          } else {
              img.style.display = "none"; // Hide non-matching categories
          }
      }
  });
});


