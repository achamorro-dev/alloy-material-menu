/*
 * Funcion para mostrar/ocultar el menu que se encuentra en un panel lateral
 */
function toggleMenu(event){
    var menuView = $.menu.getView("menu_view");
    //Si el menu esta oculto
    if(menuView._toggle == false){
    	menuView.animate({
			left: 0,
			duration: 250,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		$.scrollView.animate({
			backgroundColor: '#222222',
			duration: 250
		});
		menuView._toggle=true;
	//Si el menu esta visible
    }else{
    	menuView.animate({
			left: '-80%',
			duration: 250,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		$.scrollView.animate({
			backgroundColor: '#FFFFFF',
			duration: 250
		});
		menuView._toggle=false;
    }
}


$.menu.getView("index_menu_row").addEventListener('click',function(e){
	toggleMenu(e);
	alert("Inicio");
});
$.menu.getView("drivers_menu_row").addEventListener('click',function(e){
	toggleMenu(e);
	alert("Pilotos");
});
$.menu.getView("teams_menu_row").addEventListener('click',function(e){
	toggleMenu(e);
	alert("Equipos");
});
$.menu.getView("races_menu_row").addEventListener('click',function(e){
	toggleMenu(e);
	alert("Carreras");
});

