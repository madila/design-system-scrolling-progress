import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  state,
  actions,
  callbacks
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block', {
  state: {
    timer: null
  },
  actions: {
    reset: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const {
        requestAnimationFrame,
        requestIdleCallback
      } = window;
      const header = document.querySelector(context.offsetSelector);
      if (header) {
        context.offsetHeight = `${header.getBoundingClientRect().height}px`;
        context.offsetTop = header.getBoundingClientRect().height;
      }
      ref.dataset.ready = true;
      requestIdleCallback((0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.withScope)(() => {
        context.max = ref.getBoundingClientRect().height - context.offsetTop;
        context.stopAt = ref.getBoundingClientRect().height + context.offsetTop;
        callbacks.bodyScrolled();
      }));
    }
  },
  callbacks: {
    resize: event => {
      if (state.timer) clearTimeout(state.timer);
      console.log(state.timer, 'trigger-resize');
      state.timer = setTimeout((0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.withScope)(() => {
        actions.reset();
      }), 30, event);
    },
    bodyScrolled: () => {
      const {
        scrollY
      } = window;
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (scrollY > context.stopAt) return;
      context.value = scrollY < context.offsetTop ? 0 : scrollY - context.offsetTop;
      const scrollProgress = (context.value * 100 / context.max).toFixed();
      context.progress = scrollProgress < 100 ? scrollProgress : 100;
      context.label = `${context.progress}%`;
    }
  }
});
})();


//# sourceMappingURL=view.js.map