
var Card=function(id,card) {
    this.id=id;
    this.title=card.title;
    this.contents=card.contents;
    this.html=$(document.createElement("div"));
    this.html.attr("id","card-number-"+this.id);
    this.html.addClass("card");
    this.gen=function(c) {
	var html=$(document.createElement("div"));
	if(c.type == "linear") {
	    html.addClass("card-layout-linear");
	    html.addClass("card-layout-direction-"+c.direction);
	    for(var i=0;i<c.contents.length;i++) {
		html.append(this.gen(c.contents[i]));
	    }
	} else if(c.type == "text") {
	    html.addClass("card-layout-text");
	    html.text(c.contents);
	} else {
	    console.log("Unknown type '"+c.type+"'");
	    return null;
	}
	return html;
    };
    this.gen_html=function() {
	var c=this.gen(this.contents);
	if(c == null)
	    return;
	this.html.append(c);
    };
    this.show=function() {
	$("#cards").prepend(this.html);
	this.html.addClass("visible");
	this.html.css({height:"auto"});
	var height=this.html.outerHeight();
	this.html.css({height:0,"border-width":0,"margin-bottom":0,"padding-top":0,"padding-bottom":0,opacity:0});
	this.html.animate({height:height,"border-width":2,"margin-bottom":"1em","padding-top":"0.5em","padding-bottom":"0.5em",opacity:1},prop.ui.card_animate_time);
    };
    this.hide=function() {
	this.html.removeClass("visible");
	this.html.css({height:"auto"});
	var height=this.html.outerHeight();
	this.html.css({height:height});
	this.html.animate({height:0,"border-width":0,"margin-bottom":0,"padding-top":0,"padding-bottom":0,opacity:0},prop.ui.card_animate_time);
    };
    this.gen_html();
};

function ui_init() {
    prop.ui={};
    prop.ui.cards=[];
    prop.ui.card_id=0;
    prop.ui.card_animate_time=200;
    $("#query").keyup(function(e) {
	if(e.which == 13)
	    search($("#query").val(),ui_update);
    });
    search("foo",ui_update);
    loaded("ui");
}

function ui_hide_card(c) {
    if(c == "*") {
	for(var i=0;i<prop.ui.cards.length;i++) {
	    ui_hide_card(prop.ui.cards[i]);
	}
    } else {
	c.hide();
    }
}

function ui_add_card(result) {
    ui_hide_card("*");
    var c=new Card(prop.ui.card_id,result[1]);
    c.show();
    prop.ui.cards.push(c);
    prop.ui.card_id+=1;
}

function ui_update(results) {
    for(var i=0;i<results.length;i++) {
	ui_add_card(results[i]);
    }
}