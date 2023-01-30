window.onscroll = function(){
	scroll = document.documentElement.scrollTop;
	header = document.getElementById("header");

	if (scroll > 20) {
		header.classList.add('nav-mod');
	} else if (scroll < 20) {
		header.classList.remove('nav-mod');
	}
}

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

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}