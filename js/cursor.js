var strokeColor = "black";
var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (CP.lineTo) {
    CP.dashedLine = function(x, y, x2, y2, da) {
        if (!da) da = [10,5];
        this.save();
        var dx = (x2-x), dy = (y2-y);
        var len = Math.sqrt(dx*dx + dy*dy);
        var rot = Math.atan2(dy, dx);
        this.translate(x, y);
        this.moveTo(0, 0);
        this.rotate(rot);
        var dc = da.length;
        var di = 0, draw = true;
        x = 0;
        while (len > x) {
            x += da[di++ % dc];
            if (x > len) x = len;
            draw ? this.lineTo(x, 0): this.moveTo(x, 0);
            draw = !draw;
        }
        this.restore();
    }
}
function drawCursor()
{
	if(currentLocation !== null) {
		var x = currentLocation[0]*32;
		var y = currentLocation[1]*32;
		var xe = x+32;
		var ye = y+32;
		context.beginPath();
		context.lineCap   = 'square';
		context.lineWidth = 3;
		context.strokeStyle = strokeColor;
		context.dashedLine(x,y,xe,y,[6,6]);
		context.stroke();

		context.lineCap   = 'square';
		context.lineWidth = 3;
		context.strokeStyle = strokeColor;
		context.dashedLine(x,ye,xe,ye,[6,6]);
		context.stroke();

		context.lineCap   = 'square';
		context.lineWidth = 3;
		context.strokeStyle = strokeColor;
		context.dashedLine(x,y,x,ye,[6,6]);
		context.stroke();

		context.lineCap   = 'square';
		context.lineWidth = 3;
		context.strokeStyle = strokeColor;
		context.dashedLine(xe,y,xe,ye,[6,6]);
		context.stroke();
		// context.strokeRect((currentLocation[0] * 32), (currentLocation[1] * 32), 32, 32);
	}
}