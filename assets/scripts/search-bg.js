
var sources={};

var Search=function(query,callback) {
    this.query=query;
    this.callback=callback;
    this.sources;
    this.stop=function() {
	
    };
    this.go=function() {
	var results=[];
	for(var x in sources) {
	    var s=sources[x];
	    if((s.func) && (s.func.qualify)) {
		results.push(s.func.qualify(query));
	    }
	}
	this.callback(results);
    };
};

