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
      if (document.querySelector("header").contains(event.target) == document.querySelector("body").contains(event.target)) {
         console.log(event.target);
         console.log(document.querySelector("main").contains(event.target));
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
/******/ 	__webpack_require__.h = () => ("ac3c54355ad5f86dd585")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MjRmN2Y3NTk0Zjg4NGY5MTk4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBcUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxlQUFlO0FBQ3ZFLG1DQUFtQyxPQUFPLHFDQUFxQyxlQUFlO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbkxBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90eWt1bi8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG90eWt1bi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRhNGD0L3QutGG0ZbQvtC90LDQu9GDIFwi0KfQtdGA0YLQvtCz0Lgg0KTRgNGW0LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0L/QuNGB0LrRgyDQsNC60YLQuNCy0L3QuNGFINC80L7QtNGD0LvRltCyXHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcbi8vPT09PT09PT09PT09PT09PT09PSBTdWJNZW51ID09PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19saW5rX3N1YlwiKTtcclxubGV0IHN1Ykxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmstc3ViXCIpO1xyXG5vcGVuTWVudS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICBzdWJMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NPcGVuKGV2ZW50KSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5jb250YWlucyhldmVudC50YXJnZXQpKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJkZFwiKTtcclxuICAgICAgICAgc3ViTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUNsYXNzT3Blbik7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn07XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT0gaW5maW5pdHkgcnVubmluZyBzdHJpbmcgID09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gLy8gbGV0IEluZlN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbmZpblRleHRdXCIpO1xyXG4vLyBsZXQgaW5mU2Nyb2xsV29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1pbmZpblRleHRdXCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhJbmZTdHIpO1xyXG4vLyBmdW5jdGlvbiBpbmZTcmluZyhzdHIpIHtcclxuLy8gICAgd2hpbGUgKHN0ci5vZmZzZXRXaWR0aCAqIDIgPCB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4vLyAgICAgICAvLyBjb25zb2xlLmRpcihzdHIudGV4dENvbnRlbnQpO1xyXG4vLyAgICAgICBzdHIuaW5uZXJIVE1MICs9IHN0ci50ZXh0Q29udGVudDtcclxuLy8gICAgICAgLy8gY29uc29sZS5sb2coc3RyLmNsaWVudFdpZHRoKTtcclxuLy8gICAgfVxyXG4vLyAgICBzdHIuYWZ0ZXIoc3RyLmNsb25lTm9kZSh0cnVlKSk7XHJcbi8vIH1cclxuLy8gLy8gaW5mU3JpbmcoaW5mU2Nyb2xsV29yZFswXSk7XHJcbi8vIC8vIGluZlNyaW5nKGluZlNjcm9sbFdvcmRbMV0pO1xyXG4vLyBjb25zb2xlLmRpcihpbmZTY3JvbGxXb3JkWzFdLm9mZnNldFdpZHRoKTtcclxuLy8gaW5mU2Nyb2xsV29yZC5mb3JFYWNoKChlKSA9PiB7XHJcbi8vICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4vLyAgICBpbmZTcmluZyhlKTtcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBleHBhbmRTcGFuVGV4dCgpIHtcclxuICAgY29uc3Qgc3BhbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWluZmluVGV4dF1cIik7XHJcblxyXG4gICBpZiAoc3BhbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47IC8vIEV4aXQgaWYgbm8gc3BhbiBlbGVtZW50cyBhcmUgZm91bmRcclxuICAgfVxyXG5cclxuICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgIHNwYW5FbGVtZW50cy5mb3JFYWNoKChzcGFuRWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgc3BhbldpZHRoID0gc3BhbkVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNwYW5XaWR0aCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB0ZXh0IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgc2NyZWVuIHdpZHRoXHJcbiAgICAgIGlmIChzcGFuV2lkdGggPCBzY3JlZW5XaWR0aCkge1xyXG4gICAgICAgICBjb25zdCBjdXJyZW50VGV4dCA9IHNwYW5FbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgc3BhbkVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50VGV4dCArIFwiIFwiICsgY3VycmVudFRleHQ7XHJcblxyXG4gICAgICAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiByZWN1cnNpdmVseSB0byBrZWVwIGFkZGluZyB0ZXh0IHVudGlsIHRoZSB3aWR0aCBleGNlZWRzIHRoZSBzY3JlZW4gd2lkdGhcclxuICAgICAgICAgZXhwYW5kU3BhblRleHQoKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufVxyXG5cclxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gaW5pdGlhbGx5XHJcbmV4cGFuZFNwYW5UZXh0KCk7XHJcblxyXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiBpbml0aWFsbHlcclxuZXhwYW5kU3BhblRleHQoKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PSBjYXJkT3BlbiA9PT09PT09PT09PT09PT09PT09XHJcblxyXG5sZXQgY2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlcl9fY2FydFwiKTtcclxuY2FyZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICBjYXJkQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG5cclxuICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXJfX2NhcnQtLW9wZW4taGVhZGVyLXRpdGxlXCIpLm5leHRFbGVtZW50U2libGluZztcclxuICAgY2xvc2Uub25jbGljayA9ICgpID0+IHtcclxuICAgICAgY2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgfTtcclxuICAgY29uc3QgY2FyZEZvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlcl9fY2FydC0tb3BlblwiKTtcclxuICAgY2FyZEZvbi5vbmNsaWNrID0gKEV2ZW50VGFyZ2V0KSA9PiB7XHJcbiAgICAgIGlmIChFdmVudFRhcmdldC50YXJnZXQuY2xhc3NOYW1lID09PSBcImJvdHRvbS1oZWFkZXJfX2NhcnQtLW9wZW5cIikge1xyXG4gICAgICAgICBjYXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcbn07XHJcbi8vPT09PT09PT09PT09PT09PT09PSBhbmltYXRpb25BcGVhclNjcm9vbCA9PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBmdW5jdGlvbiBvbkVudHJ5KGVudHJ5KSB7XHJcbi8vICAgIGVudHJ5LmZvckVhY2goKGNoYW5nZSkgPT4ge1xyXG4vLyAgICAgICBpZiAoY2hhbmdlLmlzSW50ZXJzZWN0aW5nKSB7XHJcbi8vICAgICAgICAgIGNoYW5nZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtc2hvd1wiKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICB9KTtcclxuLy8gfVxyXG5cclxuLy8gbGV0IG9wdGlvbnMgPSB7XHJcbi8vICAgIHRocmVzaG9sZDogWzAuNV0sXHJcbi8vICAgIHJvb3RNYXJnaW46IFwiNTBweFwiLFxyXG4vLyB9O1xyXG4vLyBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25FbnRyeSwgb3B0aW9ucyk7XHJcbi8vIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltQXBwZWFyXVwiKTtcclxuXHJcbi8vIGZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4vLyAgICBvYnNlcnZlci5vYnNlcnZlKGVsbSk7XHJcbi8vIH1cclxuXHJcbmNvbnN0IGFuaW1JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1BcHBlYXJdXCIpO1xyXG5pZiAoYW5pbUl0ZW0ubGVuZ3RoID4gMCkge1xyXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhbmltT25TY3JvbGwpO1xyXG4gICBmdW5jdGlvbiBhbmltT25TY3JvbGwoKSB7XHJcbiAgICAgIGFuaW1JdGVtLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgY29uc3QgYW5pbUl0ZW0gPSBlbGVtO1xyXG4gICAgICAgICBjb25zdCBhbmltSXRlbUhlaWdodCA9IGFuaW1JdGVtLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgY29uc3QgYW5pbUl0ZW1PZmZzZXQgPSBvZmZzZXQoYW5pbUl0ZW0pLnRvcDtcclxuICAgICAgICAgY29uc3QgYW5pbVN0YXJ0ID0gNDtcclxuICAgICAgICAgbGV0IGFuaW1JdGVtUG9pbnQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBhbmltSXRlbUhlaWdodCAvIGFuaW1TdGFydDtcclxuICAgICAgICAgaWYgKGFuaW1JdGVtSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGFuaW1JdGVtUG9pbnQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyBhbmltU3RhcnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYgKHBhZ2VZT2Zmc2V0ID4gYW5pbUl0ZW1PZmZzZXQgLSBhbmltSXRlbVBvaW50ICYmIHBhZ2VZT2Zmc2V0IDwgYW5pbUl0ZW1PZmZzZXQgKyBhbmltSXRlbUhlaWdodCkge1xyXG4gICAgICAgICAgICBhbmltSXRlbS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1zaG93XCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWFuaW1JdGVtLmhhc0F0dHJpYnV0ZShcImRhdGEtYW5pbUFwcGVhci1Ob0hpZGVcIikpIHtcclxuICAgICAgICAgICAgICAgYW5pbUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtc2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGZ1bmN0aW9uIG9mZnNldChlbCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXHJcbiAgICAgICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsdG9wO1xyXG4gICAgICByZXR1cm4geyB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLCBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IH07XHJcbiAgIH1cclxuICAgYW5pbU9uU2Nyb2xsKCk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PSB0ZXh0IHNjcm9vbCB3aGVuIHdlIHNjcm9sbCA9PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBhcmVFbGVtZW50c1Zpc2libGUoc2Nyb2xsRWxlbWVudHMpIHtcclxuICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgY29uc3QgaXNWaXNpYmxlID0gW107XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHNjcm9sbEVsZW1lbnRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCB2ZXJ0SW5WaWV3ID0gcmVjdC50b3AgPD0gd2luZG93SGVpZ2h0ICYmIHJlY3QuYm90dG9tID49IDA7XHJcbiAgICAgIGNvbnN0IGhvckluVmlldyA9IHJlY3QubGVmdCA8PSB3aW5kb3dXaWR0aCAmJiByZWN0LnJpZ2h0ID49IDA7XHJcbiAgICAgIGlzVmlzaWJsZS5wdXNoKHsgdmlzaWJsZTogdmVydEluVmlldyAmJiBob3JJblZpZXcsIHNjcm9sbFk6IHJlY3QudG9wIH0pO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gaXNWaXNpYmxlO1xyXG59XHJcblxyXG5jb25zdCBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zY3JvbGxUZXh0XVwiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgY29uc3QgdmlzaWJpbGl0eUFycmF5ID0gYXJlRWxlbWVudHNWaXNpYmxlKHNjcm9sbEVsZW1lbnRzKTtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXNpYmlsaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHZpc2liaWxpdHlBcnJheVtpXS52aXNpYmxlKSB7XHJcbiAgICAgICAgIGNvbnN0IHNjcm9sbGVkUGl4ZWxzID0gKHZpc2liaWxpdHlBcnJheVtpXS5zY3JvbGxZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIwMCAtIDE1MDtcclxuXHJcbiAgICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gc2Nyb2xsRWxlbWVudHNbaV07XHJcbiAgICAgICAgIGN1cnJlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2Nyb2xsZWRQaXhlbHN9cHgpYDtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coYEVsZW1lbnQgJHtpICsgMX0gaXMgdmlzaWJsZSBvbiB0aGUgc2NyZWVuISBTY3JvbGxlZCAke3Njcm9sbGVkUGl4ZWxzfXB4LmApO1xyXG4gICAgICAgICAvLyBQZXJmb3JtIGFueSBkZXNpcmVkIGFjdGlvbnMgZm9yIGVhY2ggdmlzaWJsZSBlbGVtZW50IGhlcmVcclxuICAgICAgfVxyXG4gICB9XHJcbn0pO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09IHNjcm9sbGwgdG8gdG9wID09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGFycm93VG9Ub3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1mb290X19pdGVtLS1hcnJcIik7XHJcbmFycm93VG9Ub3Aub25jbGljayA9ICgpID0+IHtcclxuICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG59O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYzNjNTQzNTVhZDVmODZkZDU4NVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==