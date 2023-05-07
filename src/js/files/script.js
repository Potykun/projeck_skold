// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//=================== SubMenu ==================

let openMenu = document.querySelector('.menu__link_sub');
let subList = document.querySelector('.link-sub');
openMenu.onclick = () => {
	console.log('some');
	subList.classList.toggle('hover');
}

//=================== infinity running string  ==================

let InfStr = document.querySelector('[data-infinText]');



function infSring(str) {
	while ((str.clientWidth * 2) < window.innerWidth) {
		// console.dir(str.textContent);
		str.innerHTML += str.textContent;
		// console.log(str.clientWidth);
	}
	str.after(str.cloneNode(true))
}
infSring(InfStr);