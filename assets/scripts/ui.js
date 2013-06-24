
function ui_init() {
    prop.ui={};
    prop.ui.status="Loading...";
    prop.ui.hud={};
    prop.ui.hud.text={};
    prop.ui.hud.text.font={};
    prop.ui.hud.text.font.status="15px monospace";
    prop.ui.hud.text.font.heading="bold 20px monospace";
    prop.ui.hud.text.font.speed="bold 25px monospace";
    prop.ui.hud.text.font.alt="bold 25px monospace";
    prop.ui.hud.color={};
    prop.ui.hud.color.sky="#27a";
    prop.ui.hud.color.ground="#a72";
    prop.ui.hud.color.line="rgba(0,0,0,0)";
    prop.ui.hud.color.text={};
    prop.ui.hud.color.text.status="#0f0";
    prop.ui.hud.color.text.info="#0f0";
    prop.ui.hud.limit={};
    prop.ui.hud.limit.x=10000;
    prop.ui.hud.limit.y=10000;
    prop.ui.hud.mark={};
    prop.ui.hud.mark.pitch={};
    prop.ui.hud.mark.pitch.major=20;
    prop.ui.hud.mark.pitch.minor=10;
    prop.ui.hud.mark.pitch.major_width=350;
    prop.ui.hud.mark.pitch.minor_width=250;
    prop.ui.hud.scale={};
    prop.ui.hud.scale.heading=50; // pixels per degree
//    prop.ui.scale.roll=10; // pixels per degree
    prop.ui.hud.scale.pitch=10; // pixels per degree
    prop.ui.canvas={};
    prop.ui.canvas.size={width:0,height:0};
    prop.ui.canvas.context=$("#canvas").get(0).getContext("2d");
    $(window).resize(ui_resize);
    ui_resize();
    loaded("ui");
}

function ui_status(s) {
    prop.ui.status=s;
}

function ui_resize() {
    prop.ui.canvas.size={width:$(window).width(),height:$(window).height()};
    prop.ui.canvas.context.canvas.width=prop.ui.canvas.size.width;
    prop.ui.canvas.context.canvas.height=prop.ui.canvas.size.height;
}

function ui_clear() {
    prop.ui.canvas.context.fillStyle="#000";
    prop.ui.canvas.context.fillRect(0,0,prop.ui.canvas.size.width,prop.ui.canvas.size.width);
}

function ui_translate() {
    prop.ui.canvas.context.translate(prop.ui.canvas.size.width/2,prop.ui.canvas.size.height/2);
    prop.ui.canvas.context.translate(0,prop.fgfs.aircraft.orientation.pitch*prop.ui.hud.scale.pitch);
    prop.ui.canvas.context.rotate(-radians(prop.fgfs.aircraft.orientation.roll));
}

function ui_draw_horizon() {
    prop.ui.canvas.context.save();
//    prop.ui.canvas.context.translate(prop.ui.canvas.size.width/2,prop.ui.canvas.size.height/2);
    ui_translate();
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.ground;
    prop.ui.canvas.context.fillRect(-prop.ui.hud.limit.x,0,prop.ui.hud.limit.x*2,prop.ui.hud.limit.y);
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.sky;
    prop.ui.canvas.context.fillRect(-prop.ui.hud.limit.x,-prop.ui.hud.limit.y,prop.ui.hud.limit.x*2,prop.ui.hud.limit.y);
    prop.ui.canvas.context.beginPath();
    prop.ui.canvas.context.strokeStyle=prop.ui.hud.color.line;
    prop.ui.canvas.context.lineWidth=2;
    prop.ui.canvas.context.moveTo(-prop.ui.hud.limit.x,0);
    prop.ui.canvas.context.lineTo(prop.ui.hud.limit.x,0);
    prop.ui.canvas.context.stroke();
    prop.ui.canvas.context.restore();
}

function ui_draw_heading() {
    prop.ui.canvas.context.font=prop.ui.hud.text.font.heading;
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.text.info;
    prop.ui.canvas.context.textAlign="center";
    prop.ui.canvas.context.textBaseline="top";
    prop.ui.canvas.context.fillText(prop.fgfs.aircraft.orientation.heading,prop.ui.canvas.size.width/2,10);
}

function ui_draw_speed() {
    prop.ui.canvas.context.font=prop.ui.hud.text.font.speed;
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.text.info;
    prop.ui.canvas.context.textAlign="left";
    prop.ui.canvas.context.textBaseline="middle";
    prop.ui.canvas.context.fillText(pad(prop.fgfs.aircraft.velocity.airspeed,2),20,prop.ui.canvas.size.height/2);
}

function ui_draw_alt() {
    prop.ui.canvas.context.font=prop.ui.hud.text.font.alt;
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.text.info;
    prop.ui.canvas.context.textAlign="right";
    prop.ui.canvas.context.textBaseline="middle";
    prop.ui.canvas.context.fillText(pad(prop.fgfs.aircraft.velocity.airspeed,6),prop.ui.canvas.size.width-20,prop.ui.canvas.size.height/2);
}

function ui_draw_hud() {
    ui_draw_heading();
    ui_draw_speed();
    ui_draw_alt();
}

function ui_draw_status() {
    prop.ui.canvas.context.font=prop.ui.hud.text.font.status;
    prop.ui.canvas.context.fillStyle=prop.ui.hud.color.text.status;
    prop.ui.canvas.context.textAlign="center";
    prop.ui.canvas.context.textBaseline="bottom";
    prop.ui.canvas.context.fillText(prop.ui.status,prop.ui.canvas.size.width/2,prop.ui.canvas.size.height-10);
}

function ui_update() {
    ui_clear();
    ui_draw_horizon();
    ui_draw_hud();
    ui_draw_status();
}