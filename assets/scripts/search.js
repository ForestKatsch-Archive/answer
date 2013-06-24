
var Search=function(query,callback) {
    this.query=query;
    this.callback=callback;
    this.stop=function() {
	
    };
    this.go=function() {
	
    };
};

function search_init() {
    loaded("search");
}

var s;

function search(query,callback) {
    if(s)
	s.stop();
    s=new Search(query,callback);
    s.go();
}