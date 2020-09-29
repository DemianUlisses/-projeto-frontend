var progressBar = document.getElementById("progress-bar");
      
// Check to see if the browser supports the HTML5 <progress> tag.
var supportsHTML5Progress = (typeof (HTMLProgressElement) !== "undefined");

function setupProgress() {
  if (!supportsHTML5Progress) {
    // ARIA roles and states to the element.
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 100);
  }
}

function updateProgress(percentComplete) {
  if (!supportsHTML5Progress) {
    progressBar.setAttribute("aria-valuenow", percentComplete);
  } else {
    progressBar.setAttribute("value", percentComplete);
  }

  progressBar.textContent = percentComplete + "% complete";
}

function initDemo() {
  setupProgress();      

  document.getElementById("update-button").addEventListener("click", function (e) {
    updateProgress(75);
    e.preventDefault();
    window.location.href = "index.html";
  }, false);
}
initDemo();
