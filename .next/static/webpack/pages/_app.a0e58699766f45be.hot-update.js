"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/HireMeModal.jsx":
/*!************************************!*\
  !*** ./components/HireMeModal.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _reusable_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/Button */ \"./components/reusable/Button.jsx\");\n\n\n\nfunction HireMeModal(param) {\n    let { onClose  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        className: \"fixed inset-0 z-30 transition-all duration-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20\"\n            }, void 0, false, {\n                fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center md:justify-start lg:justify-center mt-0 md:mt-60 lg:mt-0 h-full w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"z-30\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal max-w-xs sm:max-w-sm md:max-w-md sm:max-w-sm mx-2 bg-secondary-light dark:bg-primary-dark shadow-lg flex-row rounded-lg relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-5 p-5 border-b border-ternary-light dark:border-ternary-dark\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \" text-primary-dark dark:text-primary-light text-xl\",\n                                    children: \"전화번호\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5 w-full h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: (e)=>e.preventDefault(),\n                                    className: \"m-4 text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-2xl mt-6 mb-8\",\n                                        children: \"010-5752-7191\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-8 sm:mt-0 py-5 px-8 border0-t text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: onClose,\n                                    type: \"button\",\n                                    className: \"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-600 duration-300\",\n                                    \"aria-label\": \"Close Modal\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reusable_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        title: \"Close\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mikael/projects/Webpage projects/Portfolio/components/HireMeModal.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = HireMeModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HireMeModal);\nvar _c;\n$RefreshReg$(_c, \"HireMeModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hpcmVNZU1vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXVDO0FBQ0E7QUFFdkMsU0FBU0UsWUFBWSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDtJQUNqQixxQkFDSSw4REFBQ0gscURBQVU7UUFDUEssU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLFNBQVM7WUFBRUQsU0FBUztRQUFFO1FBQ3RCRSxNQUFNO1lBQUVGLFNBQVM7UUFBRTtRQUNuQkcsV0FBVTs7MEJBR1YsOERBQUNMO2dCQUFJSyxXQUFVOzs7Ozs7MEJBR2YsOERBQUNDO2dCQUFLRCxXQUFVOzBCQUNaLDRFQUFDTDtvQkFBSUssV0FBVTs4QkFDZiw0RUFBQ0w7d0JBQUlLLFdBQVU7OzBDQUNQLDhEQUFDTDtnQ0FBSUssV0FBVTswQ0FDWCw0RUFBQ0U7b0NBQUdGLFdBQVU7OENBQXFEOzs7Ozs7Ozs7OzswQ0FFdkUsOERBQUNMO2dDQUFJSyxXQUFVOzBDQUNYLDRFQUFDRztvQ0FBS0MsVUFBVSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO29DQUFJTixXQUFVOzhDQUNqRCw0RUFBQ0w7d0NBQUlLLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUc1Qyw4REFBQ0w7Z0NBQUlLLFdBQVU7MENBQ1gsNEVBQUNPO29DQUNHQyxTQUFTZDtvQ0FDVGUsTUFBSztvQ0FDTFQsV0FBVTtvQ0FDVlUsY0FBVzs4Q0FFWCw0RUFBQ2xCLHdEQUFNQTt3Q0FBQ21CLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlDO0tBdENTbEI7QUF3Q1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXJlTWVNb2RhbC5qc3g/OGQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9yZXVzYWJsZS9CdXR0b24nO1xuXG5mdW5jdGlvbiBIaXJlTWVNb2RhbCh7IG9uQ2xvc2UgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgey8qIE1vZGFsIEJhY2tkcm9wICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1maWx0ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmaXhlZCBpbnNldC0wIHctZnVsbCBoLWZ1bGwgei0yMFwiPjwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTW9kYWwgQ29udGVudCAqL31cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgbGc6anVzdGlmeS1jZW50ZXIgbXQtMCBtZDptdC02MCBsZzptdC0wIGgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMzBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIG1heC13LXhzIHNtOm1heC13LXNtIG1kOm1heC13LW1kIHNtOm1heC13LXNtIG14LTIgYmctc2Vjb25kYXJ5LWxpZ2h0IGRhcms6YmctcHJpbWFyeS1kYXJrIHNoYWRvdy1sZyBmbGV4LXJvdyByb3VuZGVkLWxnIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTUgcC01IGJvcmRlci1iIGJvcmRlci10ZXJuYXJ5LWxpZ2h0IGRhcms6Ym9yZGVyLXRlcm5hcnktZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCIgdGV4dC1wcmltYXJ5LWRhcmsgZGFyazp0ZXh0LXByaW1hcnktbGlnaHQgdGV4dC14bFwiPuyghO2ZlOuyiO2YuDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPVwibS00IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG10LTYgbWItOFwiPjAxMC01NzUyLTcxOTE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBzbTptdC0wIHB5LTUgcHgtOCBib3JkZXIwLXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IHB5LTIgYmctZ3JheS02MDAgdGV4dC1wcmltYXJ5LWxpZ2h0IGhvdmVyOmJnLXRlcm5hcnktZGFyayBkYXJrOmJnLWdyYXktMjAwIGRhcms6dGV4dC1zZWNvbmRhcnktZGFyayBkYXJrOmhvdmVyOmJnLXByaW1hcnktbGlnaHQgcm91bmRlZC1tZCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1pbmRpZ28tNjAwIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiQ2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpcmVNZU1vZGFsO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkJ1dHRvbiIsIkhpcmVNZU1vZGFsIiwib25DbG9zZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJjbGFzc05hbWUiLCJtYWluIiwiaDUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzcGFuIiwib25DbGljayIsInR5cGUiLCJhcmlhLWxhYmVsIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HireMeModal.jsx\n"));

/***/ })

});