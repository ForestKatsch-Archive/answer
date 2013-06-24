
sources["test"]={
    "name":"Testing 123",
    "author":"Forest Ka",
    "func":{
	"qualify":"false",
	"search":"null"
    }
};

var searcher;

function search(query,callback) {
    return;
    if(searcher)
	searcher.stop();
    searcher=new Search(query,callback);
    searcher.go();
}

chrome.app.runtime.onLaunched.addListener(function() {
    window.open("index.html");
});
