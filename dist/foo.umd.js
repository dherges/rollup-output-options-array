(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.foo = {})));
}(this, (function (exports) { 'use strict';

	const FOO = 'BAR123';

	exports.FOO = FOO;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
