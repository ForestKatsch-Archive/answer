
function search_init() {
    loaded("search");
}

function search(query,callback) {
    chrome.runtime.getBackgroundPage(function(bg) {
	bg.search(query,callback);
    });
}