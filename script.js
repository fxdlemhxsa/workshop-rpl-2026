document.addEventListener("DOMContentLoaded", () => {
  console.log("Warmup script loaded successfully!");

  // Optional: simple interactive logic for testing
  const button = document.getElementById("warmup-btn");
  if (button) {
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      alert("JavaScript & Tailwind CSS v4 are working correctly!");
    });
  }
});
