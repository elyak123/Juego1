var tablero;
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
}
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}
var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false
};
var liz = 
{
	lizURL: "liz.png",
	lizOk: false,
	x: 400,
	y: 200
};
function inicio ()
{
	var canvas = document.getElementById('campo');
	tablero = canvas.getContext('2d');
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;
	document.addEventListener("keydown", teclado);
}
function teclado(datos)
{
	if (datos.keyCode == teclas.UP) 
	{
		tifis.y = tifis.y - 10;
		dibujar();
	}
	if (datos.keyCode == teclas.DOWN) 
	{
		tifis.y = tifis.y + 10;
		dibujar();
	}
	if (datos.keyCode == teclas.RIGHT) 
	{
		tifis.x = tifis.x + 10;
		dibujar();
	}
	if (datos.keyCode == teclas.LEFT) 
	{
		tifis.x = tifis.x - 10;
		dibujar();
	}
}
function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}
function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}
function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}
function dibujar()
{
	if (fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	if (tifis.frenteOK == true) 
	{
		tablero.drawImage(tifis.frente, tifis.x,tifis.y);
	}
	if (liz.lizOK == true) 
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
};

// function dibujar()
// {
// 	tablero.drawImage(fondo.imagen, 0, 0);
// }