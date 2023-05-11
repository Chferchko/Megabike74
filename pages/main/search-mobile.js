const form = document.getElementById("form");
const search = document.getElementById("search");

function toggleActiveClass() {
	form.classList.toggle("active");
};

function toggleDispaySearch(e) {
	if (e.target == form || form.classList.contains("active") && !search.contains(e.target)) toggleActiveClass();
};

function clickHandler(e) {
	toggleDispaySearch(e);
};

document.addEventListener("click", clickHandler);