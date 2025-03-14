function setVideoSpeed() {
    let videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.playbackRate = 3.0;
    });
  }
  
  // Run immediately
  setVideoSpeed();
  
  // Observe changes in the DOM to detect new videos
  const observer = new MutationObserver(setVideoSpeed);
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also, reapply speed when the page is loaded
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      setVideoSpeed();
    }
  });
  