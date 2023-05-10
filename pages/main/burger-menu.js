const burger = document.getElementById("burger-button");
const header_menu = document.getElementById("burger-menu");
const closer_menu = document.getElementById("close-button");

function toggleOpenClass() {
	header_menu.classList.toggle("open");
};

function toggleLockClass() {
	document.body.classList.toggle("lock");
};

function toggleMenuDisplay(e) {
	if (e.target == burger || e.target == closer_menu || document.body.classList.contains("lock") && !header_menu.contains(e.target)) {
		toggleOpenClass();
		toggleLockClass();
	}
};

function clickHandler(e) {
	toggleMenuDisplay(e);
};

document.addEventListener("click", clickHandler);