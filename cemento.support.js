"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "cemento",
			"path": "cemento/cemento.js",
			"file": "cemento.js",
			"module": "cemento",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/cemento.git",
			"test": "cemento-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Harden properties of entity.

		This will replace enumerable properties with non-enumerable.

		This will freeze the object.
	@end-module-documentation

	@include:
		{
			"harden": "harden"
		}
	@end-include
*/

var _freeze = require("babel-runtime/core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var harden = require("harden");

var cemento = function cemento(entity) {
	/*;
 	@meta-configuration:
 		{
 			"entity:required": "*"
 		}
 	@end-meta-configuration
 */

	if (typeof entity == "undefined" || !entity || (0, _getOwnPropertyNames2.default)(entity).length == 0) {
		throw new Error("invalid entity");
	}

	for (var property in entity) {
		if (entity.hasOwnProperty(property)) {
			var value = entity[property];
			try {
				delete entity[property];
			} catch (error) {}

			entity = entity.harden && typeof entity.harden == "function" ? entity.harden(property, value) : harden(property, value, entity);
		}
	}

	return (0, _freeze2.default)(entity);
};

module.exports = cemento;
