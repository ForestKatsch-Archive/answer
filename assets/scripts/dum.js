
var DUM_TYPE_INT=0;
var DUM_TYPE_FLOAT=1;
var DUM_TYPE_STRING=2;
var DUM_TYPE_STATEMENT=3;

var DumStackItem=function(value,type) {
    this.value=value;
    this.type=type;
};

var DumDictItem=function(key,value) {
    this.key=key;
    this.value=value;
};

var Dum=function(code) {
    this.code=code;
    this.cp=0;
    this.stack=[];
    this.dict=[];
    this.getc=function() {
	var c;
	if(this.code.length <= this.cp-2)
	    c=this.code[this.cp];
	else
	    return null;
	this.cp++;
	return c;
    }
    this.eof=function() {
	if(this.cp >= this.code.length-2)
	    return true;
	return false;
    };
    this.get_statement=function() {
	var c;
	var s="";
	if(this.eof())
	    return null ;
	while((c=this.getc()) != null) {
	    if(c == " " || c == "\n" || c == "\t")
		return s;
	    else
		s+=c;
	}
	return s;
    };
    this.dict_get=function(s) {
	for(var i=this.dict.length-1;i>=0;i--) {
	    if(s == this.dict[i].name)
		return this.dict[i];
	}
	return null;
    };
    this.statement=function(s) {
	if(this.dict_get(s) != null) {
	    console.log("in dict");
	} else if(parseInt(s).toString() == s) {
	    console.log("is int");
	} else if(parseFloat(s).toString() == s) {
	    console.log("is float");
	} else {
	    console.log("is ERROR ERROR");
	}
    };
    this.go=function() {
	var s="";
	while((s=this.get_statement()) != null) {
	    if(this.statement(s) == false)
		break;
	}
    };
};