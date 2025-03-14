document.getElementById("speedButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          document.querySelectorAll("video").forEach(video => {
            video.playbackRate = 3.0;
          });
        }
      });
    });
  });
  