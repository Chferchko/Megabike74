const form = document.getElementById("form");
const search = document.getElementById("search");
const cancel = document.getElementById("search-cancel");

function toggleActiveClass() {
	form.classList.toggle("active");
};

function toggleDispaySearch(e) {
	if (e.target == form || e.target == cancel) toggleActiveClass();
};

function clickHandler(e) {
	toggleDispaySearch(e);
};

document.addEventListener("click", clickHandler);