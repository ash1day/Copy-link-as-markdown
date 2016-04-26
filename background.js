chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.executeScript(null, { file: 'bower_components/jquery/dist/jquery.min.js' }, function() {
    chrome.tabs.executeScript(null, { file: 'main.js' })
  })
})
