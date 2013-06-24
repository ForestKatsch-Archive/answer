
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
		var d=new Dum(s.func.qualify);
		d.go();
		results.push(d);
	    }
	}
	this.callback(results);
    };
};

