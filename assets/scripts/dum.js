
var DUM_TYPE_INT=0;
var DUM_TYPE_FLOAT=1;
var DUM_TYPE_STRING=2;
var DUM_TYPE_STATEMENT=3;

var DumStackItem=function(value,type) {
    this.value=value;
    this.type=type;
};

var Dum=function(code) {
    this.code=code;
    this.cp=0;
    this.stack=[];
    this.getc=function() {
	this.cp++;
	if(this.cp >= this.code.length)
	    return this.code[this.cp];
	return null;
    }
    this.get_statement=function() {
	var c;
	var s="";
	while((c=this.getc()) != null) {
	    if(c == " " || c == "\n" || c == "\t")
		s+=c;
	    else
		return(s);
	}
    };
    this.go=function() {
	
    };
};