"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 5797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4695);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(663);





const AnimatedWords2 = ({ title , style  })=>{
    const ctrls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useAnimation */ ._)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__/* .useInView */ .YD)({
        threshold: 0.5,
        triggerOnce: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            ctrls.start("animate");
        }
        if (!inView) {
            ctrls.start("initial");
        }
    }, [
        ctrls,
        inView
    ]);
    const wordAnimation2 = {
        initial: {
            opacity: 0,
            y: 150
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                // delay: 1,
                ease: [
                    0.2,
                    0.65,
                    0.3,
                    0.9
                ],
                duration: 0.8
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        "aria-label": title,
        role: "heading",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion.span */ .E.span, {
            className: style,
            ref: ref,
            children: title.split(" ").map((word, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion.div */ .E.div, {
                    initial: "initial",
                    animate: ctrls,
                    className: "flex items-center justify-center overflow-hidden last:-mr-10",
                    transition: {
                        delayChildren: index * 0.25,
                        staggerChildren: 0.05
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion.span */ .E.span, {
                        className: "-mb-4 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4",
                        variants: wordAnimation2,
                        children: word + "\xa0"
                    })
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedWords2);


/***/ })

};
;