// CAMBIA EL TAMAÑO DEL NAV CON EL SCROLL
window.onscroll = function(){
	scroll = document.documentElement.scrollTop;
	header = document.getElementById("header");

	if (scroll > 20) {
		header.classList.add('nav-mod');
	} else if (scroll < 20) {
		header.classList.remove('nav-mod');
	}
}

// MUESTRA EL NAV EN MODO RESPONSIVE
document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){

	document.getElementById("header").classList.toggle('move-header');
	document.getElementById("nav").classList.toggle('move-nav');
}

window.addEventListener("resize", function(){
	if (window.innerWidth > 700) {
		document.getElementById("header").classList.remove('move-header');
		document.getElementById("nav").classList.remove('move-nav');
	}
})