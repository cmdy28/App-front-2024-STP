"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(DashboardLayout)/page",{

/***/ "(app-pages-browser)/./src/app/(DashboardLayout)/conductores/components/tablaConductores.tsx":
/*!*******************************************************************************!*\
  !*** ./src/app/(DashboardLayout)/conductores/components/tablaConductores.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/api */ \"(app-pages-browser)/./src/app/utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst PostList = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            try {\n                const response = await (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_2__.get)(\"/conductor\");\n                setPosts(Object.values(response.data.data));\n                console.log(response.data.data);\n            } catch (error) {\n                console.error(\"Error fetching posts:\", error);\n            }\n        };\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardCard, {\n        title: \"Product Performance\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n            sx: {\n                overflow: \"auto\",\n                width: {\n                    xs: \"280px\",\n                    sm: \"auto\"\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                \"aria-label\": \"simple table\",\n                sx: {\n                    whiteSpace: \"nowrap\",\n                    mt: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"subtitle2\",\n                                        fontWeight: 600,\n                                        children: \"Id\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"subtitle2\",\n                                        fontWeight: 600,\n                                        children: \"Assigned\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"subtitle2\",\n                                        fontWeight: 600,\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"subtitle2\",\n                                        fontWeight: 600,\n                                        children: \"Priority\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"subtitle2\",\n                                        fontWeight: 600,\n                                        children: \"Budget\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableBody, {\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                            sx: {\n                                                fontSize: \"15px\",\n                                                fontWeight: \"500\"\n                                            },\n                                            children: product.id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                                            sx: {\n                                                display: \"flex\",\n                                                alignItems: \"center\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                                        variant: \"subtitle2\",\n                                                        fontWeight: 600,\n                                                        children: product.name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 45\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                                        color: \"textSecondary\",\n                                                        sx: {\n                                                            fontSize: \"13px\"\n                                                        },\n                                                        children: product.post\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 45\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                            color: \"textSecondary\",\n                                            variant: \"subtitle2\",\n                                            fontWeight: 400,\n                                            children: product.pname\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chip, {\n                                            sx: {\n                                                px: \"4px\",\n                                                backgroundColor: product.pbg,\n                                                color: \"#fff\"\n                                            },\n                                            size: \"small\",\n                                            label: product.priority\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        align: \"right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                            variant: \"h6\",\n                                            children: [\n                                                \"$\",\n                                                product.budget,\n                                                \"k\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, product.name, true, {\n                                fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CARO-PC\\\\Documents\\\\Modernize-Nextjs-Free-main\\\\src\\\\app\\\\(DashboardLayout)\\\\conductores\\\\components\\\\tablaConductores.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostList, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKERhc2hib2FyZExheW91dCkvY29uZHVjdG9yZXMvY29tcG9uZW50cy90YWJsYUNvbmR1Y3RvcmVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ047QUF1QnRDLE1BQU1HLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUwsbURBQUdBLENBQWM7Z0JBQ3hDRyxTQUFTRyxPQUFPQyxNQUFNLENBQUNGLFNBQVNHLElBQUksQ0FBQ0EsSUFBSTtnQkFDekNDLFFBQVFDLEdBQUcsQ0FBQ0wsU0FBU0csSUFBSSxDQUFDQSxJQUFJO1lBQ2hDLEVBQUUsT0FBT0csT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUTtRQUFjQyxPQUFNO2tCQUNiLDRFQUFDQztZQUFJQyxJQUFJO2dCQUFFQyxVQUFVO2dCQUFRQyxPQUFPO29CQUFFQyxJQUFJO29CQUFTQyxJQUFJO2dCQUFPO1lBQUU7c0JBQzVELDRFQUFDQztnQkFDR0MsY0FBVztnQkFDWE4sSUFBSTtvQkFDQU8sWUFBWTtvQkFDWkMsSUFBSTtnQkFDUjs7a0NBRUEsOERBQUNDO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUNHLDRFQUFDQzt3Q0FBV0MsU0FBUTt3Q0FBWUMsWUFBWTtrREFBSzs7Ozs7Ozs7Ozs7OENBSXJELDhEQUFDSDs4Q0FDRyw0RUFBQ0M7d0NBQVdDLFNBQVE7d0NBQVlDLFlBQVk7a0RBQUs7Ozs7Ozs7Ozs7OzhDQUlyRCw4REFBQ0g7OENBQ0csNEVBQUNDO3dDQUFXQyxTQUFRO3dDQUFZQyxZQUFZO2tEQUFLOzs7Ozs7Ozs7Ozs4Q0FJckQsOERBQUNIOzhDQUNHLDRFQUFDQzt3Q0FBV0MsU0FBUTt3Q0FBWUMsWUFBWTtrREFBSzs7Ozs7Ozs7Ozs7OENBSXJELDhEQUFDSDtvQ0FBVUksT0FBTTs4Q0FDYiw0RUFBQ0g7d0NBQVdDLFNBQVE7d0NBQVlDLFlBQVk7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTdELDhEQUFDRTtrQ0FDSUMsU0FBU0MsR0FBRyxDQUFDLENBQUNDLHdCQUNYLDhEQUFDVDs7a0RBQ0csOERBQUNDO2tEQUNHLDRFQUFDQzs0Q0FDR1osSUFBSTtnREFDQW9CLFVBQVU7Z0RBQ1ZOLFlBQVk7NENBQ2hCO3NEQUVDSyxRQUFRRSxFQUFFOzs7Ozs7Ozs7OztrREFHbkIsOERBQUNWO2tEQUNHLDRFQUFDWjs0Q0FDR0MsSUFBSTtnREFDQXNCLFNBQVM7Z0RBQ1RDLFlBQVk7NENBQ2hCO3NEQUVBLDRFQUFDeEI7O2tFQUNHLDhEQUFDYTt3REFBV0MsU0FBUTt3REFBWUMsWUFBWTtrRUFDdkNLLFFBQVFLLElBQUk7Ozs7OztrRUFFakIsOERBQUNaO3dEQUNHYSxPQUFNO3dEQUNOekIsSUFBSTs0REFDQW9CLFVBQVU7d0RBQ2Q7a0VBRUNELFFBQVFPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSzdCLDhEQUFDZjtrREFDRyw0RUFBQ0M7NENBQVdhLE9BQU07NENBQWdCWixTQUFROzRDQUFZQyxZQUFZO3NEQUM3REssUUFBUVEsS0FBSzs7Ozs7Ozs7Ozs7a0RBR3RCLDhEQUFDaEI7a0RBQ0csNEVBQUNpQjs0Q0FDRzVCLElBQUk7Z0RBQ0E2QixJQUFJO2dEQUNKQyxpQkFBaUJYLFFBQVFZLEdBQUc7Z0RBQzVCTixPQUFPOzRDQUNYOzRDQUNBTyxNQUFLOzRDQUNMQyxPQUFPZCxRQUFRZSxRQUFROzs7Ozs7Ozs7OztrREFHL0IsOERBQUN2Qjt3Q0FBVUksT0FBTTtrREFDYiw0RUFBQ0g7NENBQVdDLFNBQVE7O2dEQUFLO2dEQUFFTSxRQUFRZ0IsTUFBTTtnREFBQzs7Ozs7Ozs7Ozs7OzsrQkFsRG5DaEIsUUFBUUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRHZEO0dBckhNdEM7S0FBQUE7QUF1SE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb25kdWN0b3Jlcy9jb21wb25lbnRzL3RhYmxhQ29uZHVjdG9yZXMudHN4PzZkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gJ0AvYXBwL3V0aWxzL2FwaSc7XHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXBvX2lkZW50aWZpY2FjaW9uX2lkOiBudW1iZXI7XHJcbiAgbm9tYnJlOiBzdHJpbmc7XHJcbiAgY2VkdWxhOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBzZXhvOiBzdHJpbmc7XHJcbiAgZGlyZWNjaW9uOiBzdHJpbmc7XHJcbiAgY2VsdWxhcjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTXNnIHtcclxuICBzdW1tYXJ5OiBzdHJpbmc7XHJcbiAgZGV0YWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBcGlSZXNwb25zZSB7XHJcbiAgbXNnIDogTXNnO1xyXG4gIGRhdGE6IFBvc3Q7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0PEFwaVJlc3BvbnNlPignL2NvbmR1Y3RvcicpO1xyXG4gICAgICAgIHNldFBvc3RzKE9iamVjdC52YWx1ZXMocmVzcG9uc2UuZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0czonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQb3N0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXNoYm9hcmRDYXJkIHRpdGxlPVwiUHJvZHVjdCBQZXJmb3JtYW5jZVwiPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IG92ZXJmbG93OiAnYXV0bycsIHdpZHRoOiB7IHhzOiAnMjgwcHgnLCBzbTogJ2F1dG8nIH0gfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZm9udFdlaWdodD17NjAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzc2lnbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBmb250V2VpZ2h0PXs2MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBmb250V2VpZ2h0PXs2MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Byb2R1Y3QubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwic3VidGl0bGUyXCIgZm9udFdlaWdodD17NDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnBuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHg6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9kdWN0LnBiZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9kdWN0LnByaW9yaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9DaGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj4ke3Byb2R1Y3QuYnVkZ2V0fWs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRGFzaGJvYXJkQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0IiwiUG9zdExpc3QiLCJwb3N0cyIsInNldFBvc3RzIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkRhc2hib2FyZENhcmQiLCJ0aXRsZSIsIkJveCIsInN4Iiwib3ZlcmZsb3ciLCJ3aWR0aCIsInhzIiwic20iLCJUYWJsZSIsImFyaWEtbGFiZWwiLCJ3aGl0ZVNwYWNlIiwibXQiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImFsaWduIiwiVGFibGVCb2R5IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiZm9udFNpemUiLCJpZCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibmFtZSIsImNvbG9yIiwicG9zdCIsInBuYW1lIiwiQ2hpcCIsInB4IiwiYmFja2dyb3VuZENvbG9yIiwicGJnIiwic2l6ZSIsImxhYmVsIiwicHJpb3JpdHkiLCJidWRnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(DashboardLayout)/conductores/components/tablaConductores.tsx\n"));

/***/ })

});