function Projectile(type, posx, posy, destx, desty)
{
	switch (type)
	{
		case "normal":
			this.speed = 20;
			this.type = "normal";
			break;
		case "freeze":
			this.speed = 15;
			this.type = "freeze";
			break;
	}
	this.posx = posx;
	this.posy = posy;
	this.destx = destx;
	this.desty = desty;
	this.Update = function() {
		deltax = x2 - x1;
		deltay = y2 - y1;
		
	}
}

var testProjectile = new Projectile("normal", 0, 0, 90, 90);


var projectiles = new Array();
projectiles[0] = p