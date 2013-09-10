( function ( $ ){
	$.fn.colorear = function( options ) {
		// Esta es la forma más facil de tener opciones por defecto.
		var settings = $.extend({}, $.fn.colorear.defaults, options );
		// Colorear la colección usando la variable de configuración.
		return this.css({
			color: settings.color,
			background: settings.background
		});
	};
	// Estos son los de por defecto.
	$.fn.colorear.defaults = {
		color: "green",
		background: "black"
	}
}( jQuery ));

// Cómo usarlo
// $(".coloreable").colorear({color: "orange"});