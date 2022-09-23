// collape bar start

const burger = document.querySelector("#burger");
const times = document.querySelector("#times");
const collapseMenu = document.querySelector("#collapseMenu");
const mainHero = document.querySelector("#mainHero");

burger.onclick = () => {
	collapseMenu.className = "show";
	mainHero.className = "hideTwo";
};

times.onclick = () => {
	collapseMenu.className = "hide";
	mainHero.className = "showTwo";
};

// collape bar end
// color mode start

const body = document.querySelector("body");
const colorModeBtn = document.querySelector("#colorMode");
const colorModeP = document.querySelector("#colorModeP");
const colorMode = {
	dark: "dark",
	light: "light",
};

const colorModeInner = {
	dark: "&#9790;",
	light: "&#9788;",
};

colorModeBtn.onclick = () => {
	if (body.className === colorMode.light) {
		localStorage.setItem("colorMode", colorMode.dark);
		body.className = localStorage.getItem("colorMode");
		localStorage.setItem("colorModeInner", colorModeInner.light);
		colorModeP.innerHTML = localStorage.getItem("colorModeInner");
	} else {
		localStorage.setItem("colorMode", colorMode.light);
		body.className = localStorage.getItem("colorMode");
		localStorage.setItem("colorModeInner", colorModeInner.dark);
		colorModeP.innerHTML = localStorage.getItem("colorModeInner");
	}
};

if (localStorage.getItem("colorMode")) {
	body.className = localStorage.getItem("colorMode");
	colorModeP.innerHTML = localStorage.getItem("colorModeInner");
}

// color mode end
// lang mode start

const langModeBtn = document.querySelector("#langMode"); //button
const langModeP = document.querySelector("#langModeP"); // text inside the button
const langMarker = document.querySelectorAll(".langMarker"); //translated text

const langModeInner = {
	eng: "EN",
	az: "AZ",
};

const langValues = {
	eng: [
		"I'm <span>Osman Abdulla</span>",
		"FRONT-END DEVELOPER",
		"Home",
		"Portfolio",
		"Elements",
		"Pages",
		"Blog",
		"Features",
		"Baku Based Creative <br> Studio",
		"15 Nizami street",
		"Baku Azerbaijan",
		"Call - (+994)55 875 83 22",
	],

	// adding a comma inside the array values yields a mistake
	az: [
		"Mən <span>Osman Abdulla</span>",
		"FRONT-END DEVELOPER",
		"Ana Səhifə",
		"Portfolio",
		"Elementlər",
		"Səhifələr",
		"Bloq",
		"Xüsusiyyətlər",
		"Studiyamız Bakı Şəhərində <br> Yerləşir",
		"15 Nizami küçəsi",
		"Bakı Azərbaycan",
		"Əlaqə - (+994)55 875 83 22",
	],
};

// Navigation language Start
window.onload = function () {
	if (localStorage.getItem("hasCodeRunBefore") === null) {
		if (navigator.language === "en") {
			console.log(navigator.language);
			localStorage.setItem("langValues", langValues.eng);
			for (let m in langMarker) {
				langMarker[m].innerHTML = localStorage.getItem("langValues").split(",")[
					m
				];
			}
			localStorage.setItem("langModeInner", langModeInner.az);
			langModeP.innerHTML = localStorage.getItem("langModeInner");
		} else if (navigator.language === "az") {
			localStorage.setItem("langValues", langValues.az);
			for (let m in langMarker) {
				langMarker[m].innerHTML = localStorage.getItem("langValues").split(",")[
					m
				];
			}
			localStorage.setItem("langModeInner", langModeInner.eng);
			langModeP.innerHTML = localStorage.getItem("langModeInner");
		}
	}
	localStorage.setItem("hasCodeRunBefore", true);
};

// Navigation Language End

langModeBtn.onclick = () => {
	if (langModeP.innerHTML === "AZ") {
		localStorage.setItem("langValues", langValues.az);
		for (let m in langMarker) {
			langMarker[m].innerHTML = localStorage.getItem("langValues").split(",")[
				m
			];
		}
		localStorage.setItem("langModeInner", langModeInner.eng);
		langModeP.innerHTML = localStorage.getItem("langModeInner");
	} else {
		localStorage.setItem("langValues", langValues.eng);
		for (let m in langMarker) {
			langMarker[m].innerHTML = localStorage.getItem("langValues").split(",")[
				m
			];
		}
		localStorage.setItem("langModeInner", langModeInner.az);
		langModeP.innerHTML = localStorage.getItem("langModeInner");
	}
};

if (localStorage.getItem("langValues")) {
	for (let m in langMarker) {
		langMarker[m].innerHTML = localStorage.getItem("langValues").split(",")[m];
	}
	langModeP.innerHTML = localStorage.getItem("langModeInner");
}

// when setting innerHTML to a null value, innerHTML remains unchanged.
// in contrary, setting class to a null value destroys all styles.

// for (let n in langMarker) {
// 	console.log(langMarker[n].innerHTML);
// }

// questions regarding commas in innerHTML and settings classes and innerHTML to a null value

// lang mode end
