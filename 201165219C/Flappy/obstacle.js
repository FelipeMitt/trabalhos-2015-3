function Obstacle (width,height) {
	this.x = width;
	this.y = Math.random()*height;
	this.w = 10;
	this.h = 50+Math.random()*200;
	this.vx = -100;

	this.mover = function (dt) {
		this.x += dt*this.vx;
	};
	this.desenha = function (ctx) {
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.x+this.w,this.y);
		ctx.lineTo(this.x+this.w,this.y+this.h);
		ctx.lineTo(this.x,this.y+this.h);
		ctx.fill();
	};
	
};

// Funcao que elimina do vetor obstaculos que passaram da tela
function checkObstacleLimit (obstacles,width,height,point) {
	for (var i = 0; i < obstacles.length; i++) {
		if (obstacles[i].x < 0)
		{
			point++;
			obstacles.splice(i,1);
		}
	}
	return (point);
};

function checkColision (obstacles,x,y) {
	for (var i = 0; i < obstacles.length; i++) {
		if ((obstacles[i].x <= x+40 && obstacles[i].x >= x)&&((y >= obstacles[i].y && y <= obstacles[i].y+obstacles[i].h)||(y+40 >= obstacles[i].y && y+40 <= obstacles[i].y+obstacles[i].h)))
			return (true);
	}
	return (false);
}
