// YouTube to Youtube TV
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("www.youtube.com/") >= 0) {
        chrome.pageAction.show(tabId);
    }
});
chrome.pageAction.onClicked.addListener(function(tab) {
    if (tab.url.indexOf("www.youtube.com/") >= 0) {
        var video_id = /v=([-\w]+)&?/.exec(tab.url);
        if (video_id != null) {
            var new_url = "https://www.youtube.com/tv#/watch/video/control?v=" + video_id[1] + "&resume";
            chrome.tabs.update(tab.id, {url: new_url});
        }
    }
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("www.youtube.com/tv#/") >= 0) {
        chrome.pageAction.show(tabId);
    }
});
chrome.pageAction.onClicked.addListener(function(tab) {
    if (tab.url.indexOf("www.youtube.com/tv#/") >= 0) {
        var video_id = /v=([-\w]+)&?/.exec(tab.url);
        if (video_id != null) {
            var new_url = "https://www.youtube.com/watch?v=" + video_id[1] ;
            chrome.tabs.update(tab.id, {url: new_url});
        }
    }
});
