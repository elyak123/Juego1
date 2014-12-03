var tablero;
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
}
var tifis = {
	x: 100,
	y: 100,
	izquierdaOk: false,
	arribaOk: false,
	derechaOk: false,
	frenteOK: false,
	velocidad: 10
};
var liz = 
{
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
	tifis.frente.src = "diana-frente.png";
	tifis.frente.onload = confirmarFrente;

	tifis.derecha = new Image();
	tifis.derecha.src = "diana-der.png";

	tifis.izquierda = new Image();
	tifis.izquierda.src = "diana-izq.png";

	tifis.arriba = new Image();
	tifis.arriba.src = "diana-atras.png"

	liz.lizy = new Image();
	liz.lizy.src = "liz.png";
	liz.lizy.onload = confirmarLiz;
	document.addEventListener("keydown", teclado);
}
function teclado(datos)
{

	var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}
	switch (datos.keyCode)
	{
		case teclas.DOWN:
		if ((tifis.y < 200 && tifis.y >= 150 && tifis.x < 130) || 
			(tifis.y < 360 && tifis.y >= 300 && tifis.x > 130) ) 
			{
				confirmarFrente();
			}
		else 
		{
			tifis.y += tifis.velocidad;
			confirmarFrente();
		};
		break;
		case teclas.RIGHT:
		if ((tifis.x > 160 && tifis.x < 210 && tifis.y <= 200 ) ||
			(tifis.x >= 120 && tifis.y > 300 & tifis.y <= 350 ))
			{
				confirmarDerecha();
			}
		else 
			{
				tifis.x += tifis.velocidad
				confirmarDerecha();
			}
		break;
		case teclas.UP:
		if ( (160 < tifis.x && tifis.x < 230  && tifis.y <= 210) || 
			(tifis.y >= 360 && tifis.y <= 361 && tifis.x >= 150) || 
			(tifis.y <= 210 && tifis.y > 150 && tifis.x < 150))
			{
				confirmarArriba();
			}
		else
		{
			tifis.y -= tifis.velocidad
			confirmarArriba();
		}
		break;
		case teclas.LEFT:
		if ((tifis.y > 150 && tifis.y < 200 && tifis.x < 150) || 
			(tifis.y < 210 && tifis.x < 240 && tifis.x > 190))
			{
				confirmarIzquierda();
			}
		else
		{
			tifis.x -= tifis.velocidad;
			confirmarIzquierda();
		}
	};
}
function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}
function confirmarFrente()
{
	tifis.frenteOK    = true;
	tifis.arribaOk    = false;
	tifis.derechaOk   = false;
	tifis.izquierdaOk = false;
	dibujar();
}
function confirmarDerecha()
{
	tifis.derechaOk   = true;
	tifis.arribaOk    = false;
	tifis.frenteOK    = false;
	tifis.izquierdaOk = false;
	dibujar();
}
function confirmarArriba()
{
	tifis.arribaOk    = true;
	tifis.frenteOK    = false;
	tifis.derechaOk   = false;
	tifis.izquierdaOk = false;
	dibujar();
}
function confirmarIzquierda()
{
	tifis.izquierdaOk = true;
	tifis.frenteOK    = false;
	tifis.arribaOk    = false;
	tifis.derechaOk   = false;
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
		if (liz.lizOK == true) 
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
	if (tifis.frenteOK == true) 
	{
		tablero.drawImage(tifis.frente, tifis.x,tifis.y);
	}
	else if (tifis.derechaOk == true) 
		{
			tablero.drawImage(tifis.derecha, tifis.x, tifis.y);
		};
	if (tifis.arribaOk == true) 
		{
			tablero.drawImage(tifis.arriba, tifis.x, tifis.y);
		};
	if (tifis.izquierdaOk == true) 
		{
			tablero.drawImage(tifis.izquierda, tifis.x, tifis.y);
		};
};