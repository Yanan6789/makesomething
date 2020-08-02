
(function(modules) {

	function __webpack_require__(moduleId) {

	var module = installedModules[moduleId] = {
		exports: {}
		};

 		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		return module.exports;
 	}

 	return __webpack_require__(__webpack_require__.s = "../../src/index.js");
 })

({

"../../src/index.js":

(function(module, exports) {

eval(`module.exports = 'hello pearyman'
console.log('123 ')
`);

})


 });

