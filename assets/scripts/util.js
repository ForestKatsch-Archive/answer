
function pad(n,d,c) {
    if(c == undefined)
	c="0";
    n=n.toString();
    for(var i=n.length;i<d;i++) {
	n=c+n;
    }
    return n;
}

function distance(a,b) {
    var x=a[0]-b[0];
    var y=a[1]-b[1];
    return Math.sqrt(x*x*y*y);
}

function s(i) {
    if(i == 1)
	return "";
    else
	return "s";
}

function trange(il,i,ih,ol,oh) {
    i=i/(ih-il)-il;
    return (i*(oh-ol))+ol;
}

function distance(a,b) {
    var x=Math.abs(a[0]-b[0]);
    var y=Math.abs(a[1]-b[1]);
    return Math.sqrt((x*x)+(y*y));
}

function degrees(radians) {
    return (radians/(Math.PI*2))*360;
}

function radians(degrees) {
    return (degrees/360)*(Math.PI*2);
}

function choose(l) {
    return l[Math.floor(Math.random()*l.length)];
}