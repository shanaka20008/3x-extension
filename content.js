function setVideoSpeed() {
    let videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.playbackRate = 3.0;
    });
  }
  
  // Run immediately when the script loads
  setVideoSpeed();
  
  // Re-run when new videos are added to the page (for sites with dynamically loaded content)
  const observer = new MutationObserver(setVideoSpeed);
  observer.observe(document.body, { childList: true, subtree: true });
  