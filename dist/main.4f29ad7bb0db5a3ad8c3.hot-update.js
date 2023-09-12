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
   subList.classList.toggle("hover");
   document.querySelector("header").addEventListener("click", function removeClassOpen(event) {
      if (event.target !== document.querySelector("header").closest) {
         console.log("dd");
         subList.classList.remove("hover");
         document.querySelector("header").removeEventListener("click", removeClassOpen);
      }
   });
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
/******/ 	__webpack_require__.h = () => ("1bdd72203917d3d39c19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjI5YWQ3YmIwZGI1YTNhZDhjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFxRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkUsbUNBQW1DLE9BQU8scUNBQXFDLGVBQWU7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqTEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3R5a3VuLy4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3R5a3VuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGE0YPQvdC60YbRltC+0L3QsNC70YMgXCLQp9C10YDRgtC+0LPQuCDQpNGA0ZbQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHQv9C40YHQutGDINCw0LrRgtC40LLQvdC40YUg0LzQvtC00YPQu9GW0LJcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuLy89PT09PT09PT09PT09PT09PT09IFN1Yk1lbnUgPT09PT09PT09PT09PT09PT09XHJcblxyXG5sZXQgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2xpbmtfc3ViXCIpO1xyXG5sZXQgc3ViTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGluay1zdWJcIik7XHJcbm9wZW5NZW51Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgIHN1Ykxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiByZW1vdmVDbGFzc09wZW4oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5jbG9zZXN0KSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZGRcIik7XHJcbiAgICAgICAgIHN1Ykxpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVDbGFzc09wZW4pO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG59O1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09IGluZmluaXR5IHJ1bm5pbmcgc3RyaW5nICA9PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIC8vIGxldCBJbmZTdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5maW5UZXh0XVwiKTtcclxuLy8gbGV0IGluZlNjcm9sbFdvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtaW5maW5UZXh0XVwiKTtcclxuLy8gLy8gY29uc29sZS5sb2coSW5mU3RyKTtcclxuLy8gZnVuY3Rpb24gaW5mU3Jpbmcoc3RyKSB7XHJcbi8vICAgIHdoaWxlIChzdHIub2Zmc2V0V2lkdGggKiAyIDwgd2luZG93LmlubmVyV2lkdGgpIHtcclxuLy8gICAgICAgLy8gY29uc29sZS5kaXIoc3RyLnRleHRDb250ZW50KTtcclxuLy8gICAgICAgc3RyLmlubmVySFRNTCArPSBzdHIudGV4dENvbnRlbnQ7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHN0ci5jbGllbnRXaWR0aCk7XHJcbi8vICAgIH1cclxuLy8gICAgc3RyLmFmdGVyKHN0ci5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4vLyB9XHJcbi8vIC8vIGluZlNyaW5nKGluZlNjcm9sbFdvcmRbMF0pO1xyXG4vLyAvLyBpbmZTcmluZyhpbmZTY3JvbGxXb3JkWzFdKTtcclxuLy8gY29uc29sZS5kaXIoaW5mU2Nyb2xsV29yZFsxXS5vZmZzZXRXaWR0aCk7XHJcbi8vIGluZlNjcm9sbFdvcmQuZm9yRWFjaCgoZSkgPT4ge1xyXG4vLyAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuLy8gICAgaW5mU3JpbmcoZSk7XHJcbi8vIH0pO1xyXG5cclxuZnVuY3Rpb24gZXhwYW5kU3BhblRleHQoKSB7XHJcbiAgIGNvbnN0IHNwYW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1pbmZpblRleHRdXCIpO1xyXG5cclxuICAgaWYgKHNwYW5FbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuOyAvLyBFeGl0IGlmIG5vIHNwYW4gZWxlbWVudHMgYXJlIGZvdW5kXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICBzcGFuRWxlbWVudHMuZm9yRWFjaCgoc3BhbkVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IHNwYW5XaWR0aCA9IHNwYW5FbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzcGFuV2lkdGgpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdGV4dCB3aWR0aCBpcyBsZXNzIHRoYW4gdGhlIHNjcmVlbiB3aWR0aFxyXG4gICAgICBpZiAoc3BhbldpZHRoIDwgc2NyZWVuV2lkdGgpIHtcclxuICAgICAgICAgY29uc3QgY3VycmVudFRleHQgPSBzcGFuRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudFRleHQgKyBcIiBcIiArIGN1cnJlbnRUZXh0O1xyXG5cclxuICAgICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gcmVjdXJzaXZlbHkgdG8ga2VlcCBhZGRpbmcgdGV4dCB1bnRpbCB0aGUgd2lkdGggZXhjZWVkcyB0aGUgc2NyZWVuIHdpZHRoXHJcbiAgICAgICAgIGV4cGFuZFNwYW5UZXh0KCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn1cclxuXHJcbi8vIENhbGwgdGhlIGZ1bmN0aW9uIGluaXRpYWxseVxyXG5leHBhbmRTcGFuVGV4dCgpO1xyXG5cclxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gaW5pdGlhbGx5XHJcbmV4cGFuZFNwYW5UZXh0KCk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT0gY2FyZE9wZW4gPT09PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IGNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXJfX2NhcnRcIik7XHJcbmNhcmRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgY2FyZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuXHJcbiAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20taGVhZGVyX19jYXJ0LS1vcGVuLWhlYWRlci10aXRsZVwiKS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgIGNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNhcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgIH07XHJcbiAgIGNvbnN0IGNhcmRGb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXJfX2NhcnQtLW9wZW5cIik7XHJcbiAgIGNhcmRGb24ub25jbGljayA9IChFdmVudFRhcmdldCkgPT4ge1xyXG4gICAgICBpZiAoRXZlbnRUYXJnZXQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJib3R0b20taGVhZGVyX19jYXJ0LS1vcGVuXCIpIHtcclxuICAgICAgICAgY2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG59O1xyXG4vLz09PT09PT09PT09PT09PT09PT0gYW5pbWF0aW9uQXBlYXJTY3Jvb2wgPT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZnVuY3Rpb24gb25FbnRyeShlbnRyeSkge1xyXG4vLyAgICBlbnRyeS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcclxuLy8gICAgICAgaWYgKGNoYW5nZS5pc0ludGVyc2VjdGluZykge1xyXG4vLyAgICAgICAgICBjaGFuZ2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LXNob3dcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGxldCBvcHRpb25zID0ge1xyXG4vLyAgICB0aHJlc2hvbGQ6IFswLjVdLFxyXG4vLyAgICByb290TWFyZ2luOiBcIjUwcHhcIixcclxuLy8gfTtcclxuLy8gbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9uRW50cnksIG9wdGlvbnMpO1xyXG4vLyBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW5pbUFwcGVhcl1cIik7XHJcblxyXG4vLyBmb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuLy8gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xyXG4vLyB9XHJcblxyXG5jb25zdCBhbmltSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltQXBwZWFyXVwiKTtcclxuaWYgKGFuaW1JdGVtLmxlbmd0aCA+IDApIHtcclxuICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgYW5pbU9uU2Nyb2xsKTtcclxuICAgZnVuY3Rpb24gYW5pbU9uU2Nyb2xsKCkge1xyXG4gICAgICBhbmltSXRlbS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGFuaW1JdGVtID0gZWxlbTtcclxuICAgICAgICAgY29uc3QgYW5pbUl0ZW1IZWlnaHQgPSBhbmltSXRlbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgIGNvbnN0IGFuaW1JdGVtT2Zmc2V0ID0gb2Zmc2V0KGFuaW1JdGVtKS50b3A7XHJcbiAgICAgICAgIGNvbnN0IGFuaW1TdGFydCA9IDQ7XHJcbiAgICAgICAgIGxldCBhbmltSXRlbVBvaW50ID0gd2luZG93LmlubmVySGVpZ2h0IC0gYW5pbUl0ZW1IZWlnaHQgLyBhbmltU3RhcnQ7XHJcbiAgICAgICAgIGlmIChhbmltSXRlbUhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICBhbmltSXRlbVBvaW50ID0gd2luZG93LmlubmVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IC8gYW5pbVN0YXJ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChwYWdlWU9mZnNldCA+IGFuaW1JdGVtT2Zmc2V0IC0gYW5pbUl0ZW1Qb2ludCAmJiBwYWdlWU9mZnNldCA8IGFuaW1JdGVtT2Zmc2V0ICsgYW5pbUl0ZW1IZWlnaHQpIHtcclxuICAgICAgICAgICAgYW5pbUl0ZW0uY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtc2hvd1wiKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFhbmltSXRlbS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWFuaW1BcHBlYXItTm9IaWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgIGFuaW1JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LXNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBmdW5jdGlvbiBvZmZzZXQoZWwpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbHRvcDtcclxuICAgICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9O1xyXG4gICB9XHJcbiAgIGFuaW1PblNjcm9sbCgpO1xyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT0gdGV4dCBzY3Jvb2wgd2hlbiB3ZSBzY3JvbGwgPT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gYXJlRWxlbWVudHNWaXNpYmxlKHNjcm9sbEVsZW1lbnRzKSB7XHJcbiAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgIGNvbnN0IGlzVmlzaWJsZSA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBzY3JvbGxFbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgdmVydEluVmlldyA9IHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCAmJiByZWN0LmJvdHRvbSA+PSAwO1xyXG4gICAgICBjb25zdCBob3JJblZpZXcgPSByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggJiYgcmVjdC5yaWdodCA+PSAwO1xyXG4gICAgICBpc1Zpc2libGUucHVzaCh7IHZpc2libGU6IHZlcnRJblZpZXcgJiYgaG9ySW5WaWV3LCBzY3JvbGxZOiByZWN0LnRvcCB9KTtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIGlzVmlzaWJsZTtcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2Nyb2xsVGV4dF1cIik7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgIGNvbnN0IHZpc2liaWxpdHlBcnJheSA9IGFyZUVsZW1lbnRzVmlzaWJsZShzY3JvbGxFbGVtZW50cyk7XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlzaWJpbGl0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh2aXNpYmlsaXR5QXJyYXlbaV0udmlzaWJsZSkge1xyXG4gICAgICAgICBjb25zdCBzY3JvbGxlZFBpeGVscyA9ICh2aXNpYmlsaXR5QXJyYXlbaV0uc2Nyb2xsWSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyMDAgLSAxNTA7XHJcblxyXG4gICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IHNjcm9sbEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICBjdXJyZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Njcm9sbGVkUGl4ZWxzfXB4KWA7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7aSArIDF9IGlzIHZpc2libGUgb24gdGhlIHNjcmVlbiEgU2Nyb2xsZWQgJHtzY3JvbGxlZFBpeGVsc31weC5gKTtcclxuICAgICAgICAgLy8gUGVyZm9ybSBhbnkgZGVzaXJlZCBhY3Rpb25zIGZvciBlYWNoIHZpc2libGUgZWxlbWVudCBoZXJlXHJcbiAgICAgIH1cclxuICAgfVxyXG59KTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PSBzY3JvbGxsIHRvIHRvcCA9PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBhcnJvd1RvVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tZm9vdF9faXRlbS0tYXJyXCIpO1xyXG5hcnJvd1RvVG9wLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWJkZDcyMjAzOTE3ZDNkMzljMTlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=