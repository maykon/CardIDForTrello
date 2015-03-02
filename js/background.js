const TRELLO_URL = "https://trello.com/*";

var filters = {
  urls: [TRELLO_URL]
};

function onCardShowLoaded(details){
  const TRELLO_REGEX = /trello\.com\/\w+\/boards\/\w+\/cards/g;
  var url = details.url;
  var trello_card = TRELLO_REGEX.test(url);

  if ((details.method == "GET") && trello_card){
    chrome.tabs.executeScript(null, { file: "js/jquery.min.js" }, function(){
      chrome.tabs.executeScript(details.tabId, {file: "js/content.js"});
    });
  }
};

if (chrome.webRequest && chrome.webRequest.onCompleted) {
  chrome.webRequest.onCompleted.addListener(onCardShowLoaded, filters);
} else {
  if (chrome.tabs && chrome.tabs.onUpdated){
    chrome.tabs.onUpdated.addListener(function(_, details) {
      onCardShowLoaded(details);
    });
  }
}

