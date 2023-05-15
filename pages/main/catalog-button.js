const catalog = document.getElementById("catalog");
const catalog_button = document.getElementById("catalog-button");

function toggleVisibleClass() {
	catalog.classList.toggle("visible");
};

function toggleStatusButtonClass() {
	catalog_button.classList.toggle("cancel");
};

function toggleDisplayCatalog(e) {
	if (e.target == catalog_button || catalog.classList.contains("visible") && !catalog.contains(e.target)) {
		toggleVisibleClass();
		toggleStatusButtonClass();
	}
};

function clickHandler(e) {
	toggleDisplayCatalog(e);
};

document.addEventListener("click", clickHandler);