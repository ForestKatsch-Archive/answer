
function ui_init() {
    prop.ui={};
    $("#query").keyup(function(e) {
	if(e.which == 13)
	    search($("#query").val());
    });
    loaded("ui");
}
