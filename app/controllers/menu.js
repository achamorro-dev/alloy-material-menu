/*
 * Funcion para cambiar a la vista elegida en el menu
 */

function menuItemFunction(e){
	var menuView = $.menu_view;
	//Animamos el fondo del item seleccionado
	e.source.animate({
	    backgroundColor: Alloy.CFG.dark_main_color,
	    duration : 100,
	    autoreverse : true,
    });
};