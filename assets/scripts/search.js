var sources={};

var Search=function(query,callback) {
    this.query=query;
    this.callback=callback;
    this.stop=function() {
	
    };
    this.go=function() {
	var qualified={};
	var results=[];
	for(var x in sources) {
	    var s=sources[x];
	    if((s.func) && (s.func.qualify)) {
		if(s.func.qualify(query))
		    qualified[x]=true;
	    }
	}
	for(var x in sources) {
	    if(!(x in qualified))
		continue;
	    var s=sources[x];
	    if((s.func) && (s.func.search)) {
		results.push([x,s.func.search(query)]);
	    }
	}
	this.callback(results);
    };
};


sources["test"]={
    "name":"Testing 123",
    "author":"Forest Ka",
    "func":{
	"qualify":function(query) {
	    return true;
	},
	"search":function(query) {
	    return {
		title:"Test",
		contents:{
		    type:"linear",
		    direction:"horizontal",
		    contents:[
			{
			    type:"text",
			    contents:"You searched for:"
			},
			{
			    type:"text",
			    style:["bold"],
			    contents:query
			}
		    ]
		}
	    };
	}
    }
};

var searcher;

function search_init() {
    loaded("search");
}

// function search(query,callback) {
//     chrome.runtime.getBackgroundPage(function(bg) {
// 	bg.search(query,callback);
//     });
// }

function search(query,callback) {
    if(searcher)
	searcher.stop();
    searcher=new Search(query,callback);
    searcher.go();
}

