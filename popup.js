document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('toggleHotKeys');
  checkPageButton.addEventListener('click', function() {
    console.log('chrome.tabs', chrome.tabs)
    chrome.tabs.query({}, data => {
      console.log('data', data)
    })
    chrome.tabs.getSelected(null, function(tab) {
      alert("Hello..! It's my first chrome extension.");
    });
  }, false);
}, false);