"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_sc_client_app_footer_Footer_tsx";
exports.ids = ["_sc_client_app_footer_Footer_tsx"];
exports.modules = {

/***/ "(sc_client)/./app/animations/AnimatedBody.tsx":
/*!*****************************************!*\
  !*** ./app/animations/AnimatedBody.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedBody)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(sc_client)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(sc_client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"(sc_client)/./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n\n\n\n\nfunction AnimatedBody({ text , className , wordSpace , charSpace  }) {\n    //   const text = \"Animated Text\"; // This would normally be passed into this component as a prop!\n    const ctrls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({\n        threshold: 0.1,\n        triggerOnce: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            ctrls.start(\"visible\");\n        }\n        if (!inView) {\n            ctrls.start(\"hidden\");\n        }\n    }, [\n        ctrls,\n        inView\n    ]);\n    const wordAnimation = {\n        hidden: {},\n        visible: {}\n    };\n    const bodyAnimation = {\n        hidden: {\n            opacity: 0,\n            y: `1em`\n        },\n        visible: {\n            opacity: 1,\n            y: `0em`,\n            transition: {\n                delay: 0.1,\n                duration: 1,\n                ease: [\n                    0.2,\n                    0.65,\n                    0.3,\n                    0.9\n                ]\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n        \"aria-label\": text,\n        role: \"heading\",\n        className: className,\n        ref: ref,\n        \"aria-hidden\": \"true\",\n        initial: \"hidden\",\n        animate: ctrls,\n        variants: bodyAnimation,\n        children: text\n    }, void 0, false, {\n        fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\animations\\\\AnimatedBody.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNjX2NsaWVudCkvLi9hcHAvYW5pbWF0aW9ucy9BbmltYXRlZEJvZHkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNtQjtBQUNHO0FBU3pDLFNBQVNJLGFBQWEsRUFDbkNDLEtBQUksRUFDSkMsVUFBUyxFQUNUQyxVQUFTLEVBQ1RDLFVBQVMsRUFDUyxFQUFFO0lBQ3BCLGtHQUFrRztJQUVsRyxNQUFNQyxRQUFRUiwyREFBWUE7SUFFMUIsTUFBTSxFQUFFUyxJQUFHLEVBQUVDLE9BQU0sRUFBRSxHQUFHUixzRUFBU0EsQ0FBQztRQUNoQ1MsV0FBVztRQUNYQyxhQUFhLElBQUk7SUFDbkI7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlXLFFBQVE7WUFDVkYsTUFBTUssS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQ0gsUUFBUTtZQUNYRixNQUFNSyxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRztRQUFDTDtRQUFPRTtLQUFPO0lBRWxCLE1BQU1JLGdCQUFnQjtRQUNwQkMsUUFBUSxDQUFDO1FBQ1RDLFNBQVMsQ0FBQztJQUNaO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCRixRQUFRO1lBQ05HLFNBQVM7WUFDVEMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNWO1FBQ0FILFNBQVM7WUFDUEUsU0FBUztZQUNUQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ1JDLFlBQVk7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLE1BQU07b0JBQUM7b0JBQUs7b0JBQU07b0JBQUs7aUJBQUk7WUFDN0I7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN0QixtREFBUTtRQUNQd0IsY0FBWXJCO1FBQ1pzQixNQUFLO1FBQ0xyQixXQUFXQTtRQUNYSSxLQUFLQTtRQUNMa0IsZUFBWTtRQUNaQyxTQUFRO1FBQ1JDLFNBQVNyQjtRQUNUc0IsVUFBVWI7a0JBRVRiOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9saW8tdjEvLi9hcHAvYW5pbWF0aW9ucy9BbmltYXRlZEJvZHkudHN4PzIyNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xyXG5cclxudHlwZSBBbmltYXRlZEJvZHlQcm9wcyA9IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHdvcmRTcGFjZT86IHN0cmluZztcclxuICBjaGFyU3BhY2U/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZEJvZHkoe1xyXG4gIHRleHQsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHdvcmRTcGFjZSxcclxuICBjaGFyU3BhY2UsXHJcbn06IEFuaW1hdGVkQm9keVByb3BzKSB7XHJcbiAgLy8gICBjb25zdCB0ZXh0ID0gXCJBbmltYXRlZCBUZXh0XCI7IC8vIFRoaXMgd291bGQgbm9ybWFsbHkgYmUgcGFzc2VkIGludG8gdGhpcyBjb21wb25lbnQgYXMgYSBwcm9wIVxyXG5cclxuICBjb25zdCBjdHJscyA9IHVzZUFuaW1hdGlvbigpO1xyXG5cclxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xyXG4gICAgdGhyZXNob2xkOiAwLjEsXHJcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpblZpZXcpIHtcclxuICAgICAgY3RybHMuc3RhcnQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpblZpZXcpIHtcclxuICAgICAgY3RybHMuc3RhcnQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW2N0cmxzLCBpblZpZXddKTtcclxuXHJcbiAgY29uc3Qgd29yZEFuaW1hdGlvbiA9IHtcclxuICAgIGhpZGRlbjoge30sXHJcbiAgICB2aXNpYmxlOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCBib2R5QW5pbWF0aW9uID0ge1xyXG4gICAgaGlkZGVuOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHk6IGAxZW1gLFxyXG4gICAgfSxcclxuICAgIHZpc2libGU6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgeTogYDBlbWAsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFswLjIsIDAuNjUsIDAuMywgMC45XSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24ucFxyXG4gICAgICBhcmlhLWxhYmVsPXt0ZXh0fVxyXG4gICAgICByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIGFuaW1hdGU9e2N0cmxzfVxyXG4gICAgICB2YXJpYW50cz17Ym9keUFuaW1hdGlvbn1cclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICA8L21vdGlvbi5wPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUFuaW1hdGlvbiIsIm1vdGlvbiIsInVzZUluVmlldyIsIkFuaW1hdGVkQm9keSIsInRleHQiLCJjbGFzc05hbWUiLCJ3b3JkU3BhY2UiLCJjaGFyU3BhY2UiLCJjdHJscyIsInJlZiIsImluVmlldyIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwic3RhcnQiLCJ3b3JkQW5pbWF0aW9uIiwiaGlkZGVuIiwidmlzaWJsZSIsImJvZHlBbmltYXRpb24iLCJvcGFjaXR5IiwieSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzZSIsInAiLCJhcmlhLWxhYmVsIiwicm9sZSIsImFyaWEtaGlkZGVuIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(sc_client)/./app/animations/AnimatedBody.tsx\n");

/***/ }),

/***/ "(sc_client)/./app/footer/Footer.tsx":
/*!*******************************!*\
  !*** ./app/footer/Footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(sc_client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(sc_client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/AnimatedBody */ \"(sc_client)/./app/animations/AnimatedBody.tsx\");\n\n\n\n\nconst Footer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {\n        className: \" h-[15vh] w-full  items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0\",\n        initial: \"initial\",\n        animate: \"animate\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \"mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    text: \"Copyright 2023\",\n                    className: \"m-0 p-0\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col sm:flex-row  sm:gap-1 md:gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: \"Design & Development by\",\n                            className: \"m-0 p-0\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"https://github.com/\",\n                            target: \"_blank\",\n                            \"aria-label\": \"Brian's Linkedin\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"underline underline-offset-2 hover:no-underline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animations_AnimatedBody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Brian Prakoso\",\n                                        className: \"m-0 p-0\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\cari cuan\\\\portfolio project\\\\folio-v1\\\\app\\\\footer\\\\Footer.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNjX2NsaWVudCkvLi9hcHAvZm9vdGVyL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVTtBQUNlO0FBRXRELE1BQU1HLFNBQVMsSUFBTTtJQUNuQixxQkFDRSw4REFBQ0YseURBQWM7UUFDYkksV0FBVTtRQUNWQyxTQUFRO1FBQ1JDLFNBQVE7a0JBRVIsNEVBQUNOLHFEQUFVO1lBQUNJLFdBQVU7OzhCQUNwQiw4REFBQ0gsZ0VBQVlBO29CQUFDTyxNQUFNO29CQUFrQkosV0FBVzs7Ozs7OzhCQUNqRCw4REFBQ0c7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDSCxnRUFBWUE7NEJBQ1hPLE1BQU07NEJBQ05KLFdBQVc7Ozs7OztzQ0FFYiw4REFBQ0wsa0RBQUlBOzRCQUNIVSxNQUFLOzRCQUNMQyxRQUFPOzRCQUNQQyxjQUFXOzs4Q0FFWCw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQ2QsNEVBQUNILGdFQUFZQTt3Q0FBQ08sTUFBTTt3Q0FBaUJKLFdBQVc7Ozs7Ozs7Ozs7O2dDQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0FBRUEsaUVBQWVGLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb2xpby12MS8uL2FwcC9mb290ZXIvRm9vdGVyLnRzeD85YjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEFuaW1hdGVkQm9keSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9BbmltYXRlZEJvZHlcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5zZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT1cIiBoLVsxNXZoXSB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItdC0yIGJvcmRlci1bI2U0ZGVkN10vMzAgYmctWyMwRTEwMTZdIHB0LTEwICBmb250LWJvbGQgdXBwZXJjYXNlIG1kOmgtWzIwdmhdIG1kOnB5LTE2IGxnOmgtWzEwdmhdIGxnOnB0LTYgbGc6cGItMFwiXHJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgPlxyXG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1bOTAlXSBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtY2VudGVyIHRleHQtWzEycHhdIHRleHQtWyNlNGRlZDddIHNtOnRleHQtWzEycHhdIG1kOnRleHQtWzE0cHhdIGxnOm1heC13LVsxNDQwcHhdIGxnOnRleHQtWzE0cHhdXCI+XHJcbiAgICAgICAgPEFuaW1hdGVkQm9keSB0ZXh0PXtcIkNvcHlyaWdodCAyMDIzXCJ9IGNsYXNzTmFtZT17XCJtLTAgcC0wXCJ9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93ICBzbTpnYXAtMSBtZDpnYXAtMlwiPlxyXG4gICAgICAgICAgPEFuaW1hdGVkQm9keVxyXG4gICAgICAgICAgICB0ZXh0PXtcIkRlc2lnbiAmIERldmVsb3BtZW50IGJ5XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJtLTAgcC0wXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQnJpYW4ncyBMaW5rZWRpblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6bm8tdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPEFuaW1hdGVkQm9keSB0ZXh0PXtcIkJyaWFuIFByYWtvc29cIn0gY2xhc3NOYW1lPXtcIm0tMCBwLTBcIn0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIm1vdGlvbiIsIkFuaW1hdGVkQm9keSIsIkZvb3RlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImRpdiIsInRleHQiLCJocmVmIiwidGFyZ2V0IiwiYXJpYS1sYWJlbCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(sc_client)/./app/footer/Footer.tsx\n");

/***/ })

};
;