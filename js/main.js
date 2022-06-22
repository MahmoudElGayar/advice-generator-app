function returnData() {
	fetch("https://api.adviceslip.com/advice")
		.then((value) => {
			let myData = value.json();
			return myData;
		})
		.then((myData) => {
			document.querySelector(".advice").innerText = `"${myData.slip.advice}"`;
			document.querySelector(".id").innerText = myData.slip.id;
		});
}

window.addEventListener("load", onResize());
window.addEventListener("load", returnData());

function onResize() {
	if (window.innerWidth <= 515) {
		document.querySelector(
			".svg"
		).innerHTML = `<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`;
	} else {
		document.querySelector(
			".svg"
		).innerHTML = `<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`;
	}
}

window.onresize = onResize();
