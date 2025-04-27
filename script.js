document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("grayscale-button");
  const images = document.querySelectorAll(".grid-container img");

  button.addEventListener("click", () => {
    // Remove grayscale from all images
    images.forEach((img) => {
      img.style.filter = "grayscale(0)";
    });

    // Change the background to dark mode
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff"; // Adjust text color for better contrast
  });
});
