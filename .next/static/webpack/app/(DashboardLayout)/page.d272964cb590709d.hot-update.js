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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/api */ \"(app-pages-browser)/./src/app/utils/api.ts\");\nvar _s = $RefreshSig$();\n\n\nconst PostList = ()=>{\n    _s();\n    // const [posts, setPosts] = useState<Post[]>([]);\n    // useEffect(() => {\n    //   const fetchPosts = async () => {\n    //     try {\n    //       const response = await get<ApiResponse>('/conductor');\n    //       setPosts(Object.values(response.data.data));\n    //       console.log(response.data.data);\n    //     } catch (error) {\n    //       console.error('Error fetching posts:', error);\n    //     }\n    //   };\n    //   fetchPosts();\n    // }, []);\n    const [conductores, setConductores] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchConductoresConDatosPersonales = async ()=>{\n            try {\n                // Primero, obtén la lista de conductores\n                const responseConductores = await (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_1__.get)(\"/conductor\");\n                const conductoresData = Object.values(responseConductores.data.data);\n                // Ahora, obtén los datos personales para cada conductor\n                const conductoresConDatosPersonales = await Promise.all(conductoresData.map(async (conductor)=>{\n                    const responsePersona = await (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_1__.get)(\"/persona/\".concat(conductor.id));\n                    const datosPersonales = responsePersona.data.data;\n                    // // Combina la información del conductor con sus datos personales\n                    // return {\n                    //   ...conductor,\n                    //   datosPersonales : datosPersonales\n                    // };\n                    // Combina la información del conductor con sus datos personales\n                    const conductorConDatosPersonales = {\n                        ...conductor,\n                        datosPersonales: datosPersonales\n                    };\n                    console.log(\"Conductor con Datos Personales:\", conductorConDatosPersonales); // Para depuración\n                    return conductorConDatosPersonales;\n                }));\n                setConductores(conductoresConDatosPersonales);\n                console.log(conductoresConDatosPersonales);\n            } catch (error) {\n                console.error(\"Error fetching conductores con datos personales:\", error);\n            }\n        };\n        fetchConductoresConDatosPersonales();\n    }, []);\n// return (\n//   <DashboardCard title=\"Conductores\">\n//           <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>\n//               <Table\n//                   aria-label=\"simple table\"\n//                   sx={{\n//                       whiteSpace: \"nowrap\",\n//                       mt: 2\n//                   }}\n//               >\n//                   <TableHead>\n//                       <TableRow>\n//                           <TableCell>\n//                               <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                   Id\n//                               </Typography>\n//                           </TableCell>\n//                           <TableCell>\n//                               <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                   Nombre\n//                               </Typography>\n//                           </TableCell>\n//                           <TableCell>\n//                               <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                   Licencia\n//                               </Typography>\n//                           </TableCell>\n//                           <TableCell>\n//                               <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                   Priority\n//                               </Typography>\n//                           </TableCell>\n//                           <TableCell align=\"right\">\n//                               <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                   Budget\n//                               </Typography>\n//                           </TableCell>\n//                       </TableRow>\n//                   </TableHead>\n//                   <TableBody>\n//                       {posts.map((post) => (\n//                           <TableRow key={post.id}>\n//                               <TableCell>\n//                                   <Typography\n//                                       sx={{\n//                                           fontSize: \"15px\",\n//                                           fontWeight: \"500\",\n//                                       }}\n//                                   >\n//                                       {post.id}\n//                                   </Typography>\n//                               </TableCell>\n//                               <TableCell>\n//                                   <Box\n//                                       sx={{\n//                                           display: \"flex\",\n//                                           alignItems: \"center\",\n//                                       }}\n//                                   >\n//                                       <Box>\n//                                           <Typography variant=\"subtitle2\" fontWeight={600}>\n//                                               {post.nombre}\n//                                           </Typography>\n//                                           <Typography\n//                                               color=\"textSecondary\"\n//                                               sx={{\n//                                                   fontSize: \"13px\",\n//                                               }}\n//                                           >\n//                                               {post.cedula}\n//                                           </Typography>\n//                                       </Box>\n//                                   </Box>\n//                               </TableCell>\n//                               <TableCell>\n//                                   <Typography color=\"textSecondary\" variant=\"subtitle2\" fontWeight={400}>\n//                                       {post.email}\n//                                   </Typography>\n//                               </TableCell>\n//                               <TableCell>\n//                                   <Chip\n//                                       sx={{\n//                                           px: \"4px\",\n//                                           backgroundColor: '',\n//                                           color: \"#fff\",\n//                                       }}\n//                                       size=\"small\"\n//                                       label={post.sexo}\n//                                   ></Chip>\n//                               </TableCell>\n//                               <TableCell align=\"right\">\n//                                   <Typography variant=\"h6\">${post.sexo}k</Typography>\n//                               </TableCell>\n//                           </TableRow>\n//                       ))}\n//                   </TableBody>\n//               </Table>\n//           </Box>\n//       </DashboardCard>\n// );\n};\n_s(PostList, \"PHtO4QH0FJjzpnyRG/GkklwXW8U=\");\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKERhc2hib2FyZExheW91dCkvY29uZHVjdG9yZXMvY29tcG9uZW50cy90YWJsYUNvbmR1Y3RvcmVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQVU0QztBQUNOO0FBdUJ0QyxNQUFNRyxXQUFXOztJQUNmLGtEQUFrRDtJQUVsRCxvQkFBb0I7SUFDcEIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWiwrREFBK0Q7SUFDL0QscURBQXFEO0lBQ3JELHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsdURBQXVEO0lBQ3ZELFFBQVE7SUFDUixPQUFPO0lBRVAsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQWdDLEVBQUU7SUFFbEZDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUsscUNBQXFDO1lBQ3pDLElBQUk7Z0JBQ0YseUNBQXlDO2dCQUN6QyxNQUFNQyxzQkFBc0IsTUFBTUwsbURBQUdBLENBQWM7Z0JBQ25ELE1BQU1NLGtCQUFrQkMsT0FBT0MsTUFBTSxDQUFDSCxvQkFBb0JJLElBQUksQ0FBQ0EsSUFBSTtnQkFFbkUsd0RBQXdEO2dCQUN4RCxNQUFNQyxnQ0FBZ0MsTUFBTUMsUUFBUUMsR0FBRyxDQUNyRE4sZ0JBQWdCTyxHQUFHLENBQUMsT0FBT0M7b0JBQ3pCLE1BQU1DLGtCQUFrQixNQUFNZixtREFBR0EsQ0FBYyxZQUF5QixPQUFiYyxVQUFVRSxFQUFFO29CQUN2RSxNQUFNQyxrQkFBa0JGLGdCQUFnQk4sSUFBSSxDQUFDQSxJQUFJO29CQUVqRCxtRUFBbUU7b0JBQ25FLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQixzQ0FBc0M7b0JBQ3RDLEtBQUs7b0JBQ0wsZ0VBQWdFO29CQUNoRSxNQUFNUyw4QkFBOEI7d0JBQ2xDLEdBQUdKLFNBQVM7d0JBQ1pHLGlCQUFpQkE7b0JBQ25CO29CQUVBRSxRQUFRQyxHQUFHLENBQUMsbUNBQW1DRiw4QkFBOEIsa0JBQWtCO29CQUUvRixPQUFPQTtnQkFDVDtnQkFHRmYsZUFBZU87Z0JBQ2ZTLFFBQVFDLEdBQUcsQ0FBQ1Y7WUFDZCxFQUFFLE9BQU9XLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyxvREFBb0RBO1lBQ3BFO1FBQ0Y7UUFFQWpCO0lBQ0YsR0FBRyxFQUFFO0FBRUgsV0FBVztBQUNYLHdDQUF3QztBQUN4QyxnRkFBZ0Y7QUFDaEYsdUJBQXVCO0FBQ3ZCLDhDQUE4QztBQUM5QywwQkFBMEI7QUFDMUIsOENBQThDO0FBQzlDLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGdDQUFnQztBQUNoQyxtQ0FBbUM7QUFDbkMsd0NBQXdDO0FBQ3hDLGtGQUFrRjtBQUNsRix1Q0FBdUM7QUFDdkMsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6Qyx3Q0FBd0M7QUFDeEMsa0ZBQWtGO0FBQ2xGLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLHdDQUF3QztBQUN4QyxrRkFBa0Y7QUFDbEYsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekMsd0NBQXdDO0FBQ3hDLGtGQUFrRjtBQUNsRiw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6QyxzREFBc0Q7QUFDdEQsa0ZBQWtGO0FBQ2xGLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBQ2hDLCtDQUErQztBQUMvQyxxREFBcUQ7QUFDckQsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUNoRCw4Q0FBOEM7QUFDOUMsOERBQThEO0FBQzlELCtEQUErRDtBQUMvRCwyQ0FBMkM7QUFDM0Msc0NBQXNDO0FBQ3RDLGtEQUFrRDtBQUNsRCxrREFBa0Q7QUFDbEQsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsOENBQThDO0FBQzlDLDZEQUE2RDtBQUM3RCxrRUFBa0U7QUFDbEUsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUN0Qyw4Q0FBOEM7QUFDOUMsOEZBQThGO0FBQzlGLDhEQUE4RDtBQUM5RCwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELHNFQUFzRTtBQUN0RSxzREFBc0Q7QUFDdEQsc0VBQXNFO0FBQ3RFLG1EQUFtRDtBQUNuRCw4Q0FBOEM7QUFDOUMsOERBQThEO0FBQzlELDBEQUEwRDtBQUMxRCwrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBQzNDLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsNEdBQTRHO0FBQzVHLHFEQUFxRDtBQUNyRCxrREFBa0Q7QUFDbEQsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFDMUMsOENBQThDO0FBQzlDLHVEQUF1RDtBQUN2RCxpRUFBaUU7QUFDakUsMkRBQTJEO0FBQzNELDJDQUEyQztBQUMzQyxxREFBcUQ7QUFDckQsMERBQTBEO0FBQzFELDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsMERBQTBEO0FBQzFELHdGQUF3RjtBQUN4Riw2Q0FBNkM7QUFDN0Msd0NBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsS0FBSztBQUNQO0dBOUpNSDtLQUFBQTtBQWdLTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhEYXNoYm9hcmRMYXlvdXQpL2NvbmR1Y3RvcmVzL2NvbXBvbmVudHMvdGFibGFDb25kdWN0b3Jlcy50c3g/NmRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksIEJveCxcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlSGVhZCxcclxuICBUYWJsZVJvdyxcclxuICBDaGlwXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBEYXNoYm9hcmRDYXJkIGZyb20gJ0AvYXBwLyhEYXNoYm9hcmRMYXlvdXQpLy9jb21wb25lbnRzL3NoYXJlZC9EYXNoYm9hcmRDYXJkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnQC9hcHAvdXRpbHMvYXBpJztcclxuXHJcbmludGVyZmFjZSBDb25kdWN0b3JDb25EYXRvc1BlcnNvbmFsZXMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGlwb19pZGVudGlmaWNhY2lvbl9pZDogbnVtYmVyO1xyXG4gIG5vbWJyZTogc3RyaW5nO1xyXG4gIGNlZHVsYTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgc2V4bzogc3RyaW5nO1xyXG4gIGRpcmVjY2lvbjogc3RyaW5nO1xyXG4gIGNlbHVsYXI6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1zZyB7XHJcbiAgc3VtbWFyeTogc3RyaW5nO1xyXG4gIGRldGFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2Uge1xyXG4gIG1zZyA6IE1zZztcclxuICBkYXRhOiBDb25kdWN0b3JDb25EYXRvc1BlcnNvbmFsZXM7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICB0cnkge1xyXG4gIC8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0PEFwaVJlc3BvbnNlPignL2NvbmR1Y3RvcicpO1xyXG4gIC8vICAgICAgIHNldFBvc3RzKE9iamVjdC52YWx1ZXMocmVzcG9uc2UuZGF0YS5kYXRhKSk7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0czonLCBlcnJvcik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgZmV0Y2hQb3N0cygpO1xyXG4gIC8vIH0sIFtdKTtcclxuICBjb25zdCBbY29uZHVjdG9yZXMsIHNldENvbmR1Y3RvcmVzXSA9IHVzZVN0YXRlPENvbmR1Y3RvckNvbkRhdG9zUGVyc29uYWxlc1tdPihbXSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IGZldGNoQ29uZHVjdG9yZXNDb25EYXRvc1BlcnNvbmFsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBQcmltZXJvLCBvYnTDqW4gbGEgbGlzdGEgZGUgY29uZHVjdG9yZXNcclxuICAgICAgY29uc3QgcmVzcG9uc2VDb25kdWN0b3JlcyA9IGF3YWl0IGdldDxBcGlSZXNwb25zZT4oJy9jb25kdWN0b3InKTtcclxuICAgICAgY29uc3QgY29uZHVjdG9yZXNEYXRhID0gT2JqZWN0LnZhbHVlcyhyZXNwb25zZUNvbmR1Y3RvcmVzLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAvLyBBaG9yYSwgb2J0w6luIGxvcyBkYXRvcyBwZXJzb25hbGVzIHBhcmEgY2FkYSBjb25kdWN0b3JcclxuICAgICAgY29uc3QgY29uZHVjdG9yZXNDb25EYXRvc1BlcnNvbmFsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBjb25kdWN0b3Jlc0RhdGEubWFwKGFzeW5jIChjb25kdWN0b3IpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUGVyc29uYSA9IGF3YWl0IGdldDxBcGlSZXNwb25zZT4oYC9wZXJzb25hLyR7Y29uZHVjdG9yLmlkfWApO1xyXG4gICAgICAgICAgY29uc3QgZGF0b3NQZXJzb25hbGVzID0gcmVzcG9uc2VQZXJzb25hLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAvLyAvLyBDb21iaW5hIGxhIGluZm9ybWFjacOzbiBkZWwgY29uZHVjdG9yIGNvbiBzdXMgZGF0b3MgcGVyc29uYWxlc1xyXG4gICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgIC8vICAgLi4uY29uZHVjdG9yLFxyXG4gICAgICAgICAgLy8gICBkYXRvc1BlcnNvbmFsZXMgOiBkYXRvc1BlcnNvbmFsZXNcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAvLyBDb21iaW5hIGxhIGluZm9ybWFjacOzbiBkZWwgY29uZHVjdG9yIGNvbiBzdXMgZGF0b3MgcGVyc29uYWxlc1xyXG4gICAgICAgICAgY29uc3QgY29uZHVjdG9yQ29uRGF0b3NQZXJzb25hbGVzID0ge1xyXG4gICAgICAgICAgICAuLi5jb25kdWN0b3IsXHJcbiAgICAgICAgICAgIGRhdG9zUGVyc29uYWxlczogZGF0b3NQZXJzb25hbGVzXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25kdWN0b3IgY29uIERhdG9zIFBlcnNvbmFsZXM6JywgY29uZHVjdG9yQ29uRGF0b3NQZXJzb25hbGVzKTsgLy8gUGFyYSBkZXB1cmFjacOzblxyXG5cclxuICAgICAgICAgIHJldHVybiBjb25kdWN0b3JDb25EYXRvc1BlcnNvbmFsZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldENvbmR1Y3RvcmVzKGNvbmR1Y3RvcmVzQ29uRGF0b3NQZXJzb25hbGVzKTtcclxuICAgICAgY29uc29sZS5sb2coY29uZHVjdG9yZXNDb25EYXRvc1BlcnNvbmFsZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29uZHVjdG9yZXMgY29uIGRhdG9zIHBlcnNvbmFsZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoQ29uZHVjdG9yZXNDb25EYXRvc1BlcnNvbmFsZXMoKTtcclxufSwgW10pO1xyXG5cclxuICAvLyByZXR1cm4gKFxyXG4gIC8vICAgPERhc2hib2FyZENhcmQgdGl0bGU9XCJDb25kdWN0b3Jlc1wiPlxyXG4gIC8vICAgICAgICAgICA8Qm94IHN4PXt7IG92ZXJmbG93OiAnYXV0bycsIHdpZHRoOiB7IHhzOiAnMjgwcHgnLCBzbTogJ2F1dG8nIH0gfX0+XHJcbiAgLy8gICAgICAgICAgICAgICA8VGFibGVcclxuICAvLyAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCJcclxuICAvLyAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBtdDogMlxyXG4gIC8vICAgICAgICAgICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZm9udFdlaWdodD17NjAwfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWRcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZm9udFdlaWdodD17NjAwfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGljZW5jaWFcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW9yaXR5XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZm9udFdlaWdodD17NjAwfT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVkZ2V0XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cG9zdC5pZH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5pZH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezYwMH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lm5vbWJyZX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNlZHVsYX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9ezQwMH0+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5lbWFpbH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4OiBcIjRweFwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cG9zdC5zZXhvfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9DaGlwPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj4ke3Bvc3Quc2V4b31rPC9UeXBvZ3JhcGh5PlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgLy8gICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gIC8vICAgICAgICAgICA8L0JveD5cclxuICAvLyAgICAgICA8L0Rhc2hib2FyZENhcmQ+XHJcbiAgLy8gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldCIsIlBvc3RMaXN0IiwiY29uZHVjdG9yZXMiLCJzZXRDb25kdWN0b3JlcyIsImZldGNoQ29uZHVjdG9yZXNDb25EYXRvc1BlcnNvbmFsZXMiLCJyZXNwb25zZUNvbmR1Y3RvcmVzIiwiY29uZHVjdG9yZXNEYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0YSIsImNvbmR1Y3RvcmVzQ29uRGF0b3NQZXJzb25hbGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImNvbmR1Y3RvciIsInJlc3BvbnNlUGVyc29uYSIsImlkIiwiZGF0b3NQZXJzb25hbGVzIiwiY29uZHVjdG9yQ29uRGF0b3NQZXJzb25hbGVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(DashboardLayout)/conductores/components/tablaConductores.tsx\n"));

/***/ })

});