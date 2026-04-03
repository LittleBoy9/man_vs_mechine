const current = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === current) {
    link.classList.add("active");
  }
});

// Video preview on hover in asset cards
document.querySelectorAll(".asset-video").forEach((videoContainer) => {
  const video = videoContainer.querySelector(".preview-video");

  if (video) {
    videoContainer.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    videoContainer.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});
