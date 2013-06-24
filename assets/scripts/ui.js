
function ui_init() {
    prop.ui={};
    $("#query").keyup(function(e) {
	if(e.which == 13)
	    search($("#query").val(),ui_update);
    });
    loaded("ui");
}

function ui_update(results) {
    console.log(results[0]);
}