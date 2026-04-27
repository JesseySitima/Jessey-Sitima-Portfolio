function initVideoModal() {

  const videoBtns = document.querySelectorAll(".video-btn");
  const modal = document.getElementById("video-modal");
  const frame = document.getElementById("video-frame");
  const closeBtn = document.getElementById("close-video");

  if (!modal) return;

  // OPEN VIDEO
  videoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      const videoURL = btn.getAttribute("data-video");

      frame.src = videoURL;

      modal.classList.remove("hidden");
      modal.classList.add("flex");

    });

  });

  // CLOSE BUTTON
  closeBtn.addEventListener("click", () => {

    modal.classList.add("hidden");
    modal.classList.remove("flex");

    frame.src = ""; // stop video

  });

  // CLOSE BACKGROUND
  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.classList.add("hidden");
      modal.classList.remove("flex");

      frame.src = "";

    }

  });

}