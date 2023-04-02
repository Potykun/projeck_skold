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
console.dir(InfStr);



console.log('dfdf');
function infinityString() {
	let widhElem = InfStr.offsetWidth;
	let k = InfStr.offsetWidth;
	let i = 0;
	let cloneElement = InfStr.CloneNode(true);

	while (k < window.innerWidth) {
		console.log(i);
		k = k + 400;
		i += 1;
		console.log(k);
		console.log(window.innerWidth);
		console.log(cloneElement);
		console.log('dfdf');
		InfStr.parentNode.prepend(cloneElement);
	}


}
infinityString();