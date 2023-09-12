"use strict";
self["webpackHotUpdatepotykun"]("main",{

/***/ "./src/js/files/script.js":
/*!********************************!*\
  !*** ./src/js/files/script.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Підключення функціоналу "Чертоги Фрілансера"

// Підключення списку активних модулів

//=================== SubMenu ==================

let openMenu = document.querySelector(".menu__link_sub");
let subList = document.querySelector(".link-sub");
openMenu.onclick = () => {
   console.log("some");
   subList.classList.toggle("hover");
};

//=================== infinity running string  ==================

// // let InfStr = document.querySelector("[data-infinText]");
// let infScrollWord = document.querySelectorAll("[data-infinText]");
// // console.log(InfStr);
// function infSring(str) {
//    while (str.offsetWidth * 2 < window.innerWidth) {
//       // console.dir(str.textContent);
//       str.innerHTML += str.textContent;
//       // console.log(str.clientWidth);
//    }
//    str.after(str.cloneNode(true));
// }
// // infSring(infScrollWord[0]);
// // infSring(infScrollWord[1]);
// console.dir(infScrollWord[1].offsetWidth);
// infScrollWord.forEach((e) => {
//    // console.log(e);
//    infSring(e);
// });

function expandSpanText() {
   const spanElements = document.querySelectorAll("[data-infinText]");

   if (spanElements.length === 0) {
      return; // Exit if no span elements are found
   }

   const screenWidth = window.innerWidth;

   spanElements.forEach((spanElement) => {
      let spanWidth = spanElement.clientWidth;
      // console.log(spanWidth);

      // Check if the current text width is less than the screen width
      if (spanWidth < screenWidth) {
         const currentText = spanElement.textContent.trim();
         spanElement.textContent = currentText + " " + currentText;

         // Call the function recursively to keep adding text until the width exceeds the screen width
         expandSpanText();
      }
   });
}

// Call the function initially
expandSpanText();

// Call the function initially
expandSpanText();

//=================== cardOpen ===================

let cardButton = document.querySelector(".bottom-header__cart");
cardButton.onclick = () => {
   cardButton.classList.toggle("open");
   // document.querySelector('body').addEventListener('click', function removeClassOpen(event) {
   //    if (event.target !== document.querySelector('header').closest) {
   //       cardButton.classList.remove("open");
   //       this.removeEventListener('click', removeClassOpen)
   //    }
   // })
   const close = document.querySelector(".bottom-header__cart--open-header-title").nextElementSibling;
   close.onclick = () => {
      cardButton.classList.remove("open");
   };
   const cardFon = document.querySelector(".bottom-header__cart--open");
   cardFon.onclick = (EventTarget) => {
      if (EventTarget.target.className === "bottom-header__cart--open") {
         cardButton.classList.remove("open");
      }
   };
};
//=================== animationApearScrool ===================

// function onEntry(entry) {
//    entry.forEach((change) => {
//       if (change.isIntersecting) {
//          change.target.classList.add("element-show");
//       }
//    });
// }

// let options = {
//    threshold: [0.5],
//    rootMargin: "50px",
// };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll("[data-animAppear]");

// for (let elm of elements) {
//    observer.observe(elm);
// }

const animItem = document.querySelectorAll("[data-animAppear]");
if (animItem.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      animItem.forEach((elem) => {
         const animItem = elem;
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
            animItem.classList.add("element-show");
         } else {
            if (!animItem.hasAttribute("data-animAppear-NoHide")) {
               animItem.classList.remove("element-show");
            }
         }
      });
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrolltop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
   animOnScroll();
}

//=================== text scrool when we scroll ===================

function areElementsVisible(scrollElements) {
   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
   const windowWidth = window.innerWidth || document.documentElement.clientWidth;

   const isVisible = [];
   for (let i = 0; i < scrollElements.length; i++) {
      const rect = scrollElements[i].getBoundingClientRect();
      const vertInView = rect.top <= windowHeight && rect.bottom >= 0;
      const horInView = rect.left <= windowWidth && rect.right >= 0;
      isVisible.push({ visible: vertInView && horInView, scrollY: rect.top });
   }

   return isVisible;
}

const scrollElements = document.querySelectorAll("[data-scrollText]");

window.addEventListener("scroll", () => {
   const visibilityArray = areElementsVisible(scrollElements);
   for (let i = 0; i < visibilityArray.length; i++) {
      if (visibilityArray[i].visible) {
         const scrolledPixels = (visibilityArray[i].scrollY / window.innerHeight) * 200 - 150;

         const currentElement = scrollElements[i];
         currentElement.style.transform = `translateX(${scrolledPixels}px)`;
         // console.log(`Element ${i + 1} is visible on the screen! Scrolled ${scrolledPixels}px.`);
         // Perform any desired actions for each visible element here
      }
   }
});

//=================== scrolll to top ===================

const arrowToTop = document.querySelector(".bottom-foot__item--arr");
arrowToTop.onclick = () => {
   window.scrollTo(0, 0);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f3532f90c476159d4ce7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGVhZDU0NmNiNWZhNzNkMGVhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBcUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxlQUFlO0FBQ3ZFLG1DQUFtQyxPQUFPLHFDQUFxQyxlQUFlO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaExBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90eWt1bi8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG90eWt1bi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRhNGD0L3QutGG0ZbQvtC90LDQu9GDIFwi0KfQtdGA0YLQvtCz0Lgg0KTRgNGW0LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0L/QuNGB0LrRgyDQsNC60YLQuNCy0L3QuNGFINC80L7QtNGD0LvRltCyXHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcbi8vPT09PT09PT09PT09PT09PT09PSBTdWJNZW51ID09PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19saW5rX3N1YlwiKTtcclxubGV0IHN1Ykxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmstc3ViXCIpO1xyXG5vcGVuTWVudS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICBjb25zb2xlLmxvZyhcInNvbWVcIik7XHJcbiAgIHN1Ykxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xyXG59O1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09IGluZmluaXR5IHJ1bm5pbmcgc3RyaW5nICA9PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIC8vIGxldCBJbmZTdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5maW5UZXh0XVwiKTtcclxuLy8gbGV0IGluZlNjcm9sbFdvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtaW5maW5UZXh0XVwiKTtcclxuLy8gLy8gY29uc29sZS5sb2coSW5mU3RyKTtcclxuLy8gZnVuY3Rpb24gaW5mU3Jpbmcoc3RyKSB7XHJcbi8vICAgIHdoaWxlIChzdHIub2Zmc2V0V2lkdGggKiAyIDwgd2luZG93LmlubmVyV2lkdGgpIHtcclxuLy8gICAgICAgLy8gY29uc29sZS5kaXIoc3RyLnRleHRDb250ZW50KTtcclxuLy8gICAgICAgc3RyLmlubmVySFRNTCArPSBzdHIudGV4dENvbnRlbnQ7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHN0ci5jbGllbnRXaWR0aCk7XHJcbi8vICAgIH1cclxuLy8gICAgc3RyLmFmdGVyKHN0ci5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4vLyB9XHJcbi8vIC8vIGluZlNyaW5nKGluZlNjcm9sbFdvcmRbMF0pO1xyXG4vLyAvLyBpbmZTcmluZyhpbmZTY3JvbGxXb3JkWzFdKTtcclxuLy8gY29uc29sZS5kaXIoaW5mU2Nyb2xsV29yZFsxXS5vZmZzZXRXaWR0aCk7XHJcbi8vIGluZlNjcm9sbFdvcmQuZm9yRWFjaCgoZSkgPT4ge1xyXG4vLyAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuLy8gICAgaW5mU3JpbmcoZSk7XHJcbi8vIH0pO1xyXG5cclxuZnVuY3Rpb24gZXhwYW5kU3BhblRleHQoKSB7XHJcbiAgIGNvbnN0IHNwYW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1pbmZpblRleHRdXCIpO1xyXG5cclxuICAgaWYgKHNwYW5FbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuOyAvLyBFeGl0IGlmIG5vIHNwYW4gZWxlbWVudHMgYXJlIGZvdW5kXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICBzcGFuRWxlbWVudHMuZm9yRWFjaCgoc3BhbkVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IHNwYW5XaWR0aCA9IHNwYW5FbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzcGFuV2lkdGgpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdGV4dCB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHNjcmVlbiB3aWR0aFxyXG4gICAgICBpZiAoc3BhbldpZHRoIDwgc2NyZWVuV2lkdGgpIHtcclxuICAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSBzcGFuRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudFRleHQgKyBcIiBcIiArIGN1cnJlbnRUZXh0O1xyXG5cclxuICAgICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gcmVjdXJzaXZlbHkgdG8ga2VlcCBhZGRpbmcgdGV4dCB1bnRpbCB0aGUgd2lkdGggZXhjZWVkcyB0aGUgc2NyZWVuIHdpZHRoXHJcbiAgICAgICAgIGV4cGFuZFNwYW5UZXh0KCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn1cclxuXHJcbi8vIENhbGwgdGhlIGZ1bmN0aW9uIGluaXRpYWxseVxyXG5leHBhbmRTcGFuVGV4dCgpO1xyXG5cclxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gaW5pdGlhbGx5XHJcbmV4cGFuZFNwYW5UZXh0KCk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT0gY2FyZE9wZW4gPT09PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IGNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXJfX2NhcnRcIik7XHJcbmNhcmRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgY2FyZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NPcGVuKGV2ZW50KSB7XHJcbiAgIC8vICAgIGlmIChldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmNsb3Nlc3QpIHtcclxuICAgLy8gICAgICAgY2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgLy8gICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNsYXNzT3BlbilcclxuICAgLy8gICAgfVxyXG4gICAvLyB9KVxyXG4gICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlcl9fY2FydC0tb3Blbi1oZWFkZXItdGl0bGVcIikubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICBjbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICB9O1xyXG4gICBjb25zdCBjYXJkRm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20taGVhZGVyX19jYXJ0LS1vcGVuXCIpO1xyXG4gICBjYXJkRm9uLm9uY2xpY2sgPSAoRXZlbnRUYXJnZXQpID0+IHtcclxuICAgICAgaWYgKEV2ZW50VGFyZ2V0LnRhcmdldC5jbGFzc05hbWUgPT09IFwiYm90dG9tLWhlYWRlcl9fY2FydC0tb3BlblwiKSB7XHJcbiAgICAgICAgIGNhcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgIH1cclxuICAgfTtcclxufTtcclxuLy89PT09PT09PT09PT09PT09PT09IGFuaW1hdGlvbkFwZWFyU2Nyb29sID09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGZ1bmN0aW9uIG9uRW50cnkoZW50cnkpIHtcclxuLy8gICAgZW50cnkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XHJcbi8vICAgICAgIGlmIChjaGFuZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuLy8gICAgICAgICAgY2hhbmdlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1zaG93XCIpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgdGhyZXNob2xkOiBbMC41XSxcclxuLy8gICAgcm9vdE1hcmdpbjogXCI1MHB4XCIsXHJcbi8vIH07XHJcbi8vIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkVudHJ5LCBvcHRpb25zKTtcclxuLy8gbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1BcHBlYXJdXCIpO1xyXG5cclxuLy8gZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbi8vICAgIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcclxuLy8gfVxyXG5cclxuY29uc3QgYW5pbUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW5pbUFwcGVhcl1cIik7XHJcbmlmIChhbmltSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFuaW1PblNjcm9sbCk7XHJcbiAgIGZ1bmN0aW9uIGFuaW1PblNjcm9sbCgpIHtcclxuICAgICAgYW5pbUl0ZW0uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICBjb25zdCBhbmltSXRlbSA9IGVsZW07XHJcbiAgICAgICAgIGNvbnN0IGFuaW1JdGVtSGVpZ2h0ID0gYW5pbUl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICBjb25zdCBhbmltSXRlbU9mZnNldCA9IG9mZnNldChhbmltSXRlbSkudG9wO1xyXG4gICAgICAgICBjb25zdCBhbmltU3RhcnQgPSA0O1xyXG4gICAgICAgICBsZXQgYW5pbUl0ZW1Qb2ludCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGFuaW1JdGVtSGVpZ2h0IC8gYW5pbVN0YXJ0O1xyXG4gICAgICAgICBpZiAoYW5pbUl0ZW1IZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgYW5pbUl0ZW1Qb2ludCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIGFuaW1TdGFydDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAocGFnZVlPZmZzZXQgPiBhbmltSXRlbU9mZnNldCAtIGFuaW1JdGVtUG9pbnQgJiYgcGFnZVlPZmZzZXQgPCBhbmltSXRlbU9mZnNldCArIGFuaW1JdGVtSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGFuaW1JdGVtLmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LXNob3dcIik7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghYW5pbUl0ZW0uaGFzQXR0cmlidXRlKFwiZGF0YS1hbmltQXBwZWFyLU5vSGlkZVwiKSkge1xyXG4gICAgICAgICAgICAgICBhbmltSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1zaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGx0b3A7XHJcbiAgICAgIHJldHVybiB7IHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQgfTtcclxuICAgfVxyXG4gICBhbmltT25TY3JvbGwoKTtcclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09IHRleHQgc2Nyb29sIHdoZW4gd2Ugc2Nyb2xsID09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGFyZUVsZW1lbnRzVmlzaWJsZShzY3JvbGxFbGVtZW50cykge1xyXG4gICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICBjb25zdCBpc1Zpc2libGUgPSBbXTtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZWN0ID0gc2Nyb2xsRWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHZlcnRJblZpZXcgPSByZWN0LnRvcCA8PSB3aW5kb3dIZWlnaHQgJiYgcmVjdC5ib3R0b20gPj0gMDtcclxuICAgICAgY29uc3QgaG9ySW5WaWV3ID0gcmVjdC5sZWZ0IDw9IHdpbmRvd1dpZHRoICYmIHJlY3QucmlnaHQgPj0gMDtcclxuICAgICAgaXNWaXNpYmxlLnB1c2goeyB2aXNpYmxlOiB2ZXJ0SW5WaWV3ICYmIGhvckluVmlldywgc2Nyb2xsWTogcmVjdC50b3AgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBpc1Zpc2libGU7XHJcbn1cclxuXHJcbmNvbnN0IHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNjcm9sbFRleHRdXCIpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICBjb25zdCB2aXNpYmlsaXR5QXJyYXkgPSBhcmVFbGVtZW50c1Zpc2libGUoc2Nyb2xsRWxlbWVudHMpO1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHZpc2liaWxpdHlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodmlzaWJpbGl0eUFycmF5W2ldLnZpc2libGUpIHtcclxuICAgICAgICAgY29uc3Qgc2Nyb2xsZWRQaXhlbHMgPSAodmlzaWJpbGl0eUFycmF5W2ldLnNjcm9sbFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMjAwIC0gMTUwO1xyXG5cclxuICAgICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50c1tpXTtcclxuICAgICAgICAgY3VycmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzY3JvbGxlZFBpeGVsc31weClgO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhgRWxlbWVudCAke2kgKyAxfSBpcyB2aXNpYmxlIG9uIHRoZSBzY3JlZW4hIFNjcm9sbGVkICR7c2Nyb2xsZWRQaXhlbHN9cHguYCk7XHJcbiAgICAgICAgIC8vIFBlcmZvcm0gYW55IGRlc2lyZWQgYWN0aW9ucyBmb3IgZWFjaCB2aXNpYmxlIGVsZW1lbnQgaGVyZVxyXG4gICAgICB9XHJcbiAgIH1cclxufSk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT0gc2Nyb2xsbCB0byB0b3AgPT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgYXJyb3dUb1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWZvb3RfX2l0ZW0tLWFyclwiKTtcclxuYXJyb3dUb1RvcC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYzNTMyZjkwYzQ3NjE1OWQ0Y2U3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9