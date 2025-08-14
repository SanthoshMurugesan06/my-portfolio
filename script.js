// Simple year auto-update
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Santhosh Murugesan`;
});
