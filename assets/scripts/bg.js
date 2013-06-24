
sources["test"]={
    "name":"Testing 123",
    "author":"Forest Ka",
    "func":{
	"qualify":function(query) {
	    return null;
	},
	"search":function(query) {

	}
    }
};

var searcher;

function search(query,callback) {
    if(searcher)
	searcher.stop();
    searcher=new Search(query,callback);
    searcher.go();
}

chrome.app.runtime.onLaunched.addListener(function() {
    window.open("index.html");
});
