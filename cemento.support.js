"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbWVudG8uanMiXSwibmFtZXMiOlsiaGFyZGVuIiwicmVxdWlyZSIsImNlbWVudG8iLCJlbnRpdHkiLCJsZW5ndGgiLCJFcnJvciIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDOzs7Ozs7OztBQVFBLEtBQUksT0FBT0EsTUFBUCxJQUFpQixXQUFqQixJQUFnQyxDQUFDQSxNQUFqQyxJQUNILG1DQUE0QkEsTUFBNUIsRUFBcUNDLE1BQXJDLElBQStDLENBRGhELEVBRUE7QUFDQyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSyxJQUFJQyxRQUFULElBQXFCSCxNQUFyQixFQUE2QjtBQUM1QixNQUFJQSxPQUFPSSxjQUFQLENBQXVCRCxRQUF2QixDQUFKLEVBQXVDO0FBQ3RDLE9BQUlFLFFBQVFMLE9BQVFHLFFBQVIsQ0FBWjs7QUFFQSxPQUFHO0FBQUUsV0FBT0gsT0FBUUcsUUFBUixDQUFQO0FBQTRCLElBQWpDLENBQWlDLE9BQU9HLEtBQVAsRUFBYyxDQUFHOztBQUVsRE4sWUFBV0EsT0FBT0gsTUFBUCxJQUFpQixPQUFPRyxPQUFPSCxNQUFkLElBQXdCLFVBQTNDLEdBQ1JHLE9BQU9ILE1BQVAsQ0FBZU0sUUFBZixFQUF5QkUsS0FBekIsQ0FEUSxHQUVSUixPQUFRTSxRQUFSLEVBQWtCRSxLQUFsQixFQUF5QkwsTUFBekIsQ0FGRDtBQUdBO0FBQ0Q7O0FBRUQsUUFBTyxzQkFBZUEsTUFBZixDQUFQO0FBQ0EsQ0E1QkQ7O0FBOEJBTyxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQiIsImZpbGUiOiJjZW1lbnRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjZW1lbnRvL2NlbWVudG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNlbWVudG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiY2VtZW50b1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NlbWVudG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJjZW1lbnRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0SGFyZGVuIHByb3BlcnRpZXMgb2YgZW50aXR5LlxuXG5cdFx0VGhpcyB3aWxsIHJlcGxhY2UgZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHdpdGggbm9uLWVudW1lcmFibGUuXG5cblx0XHRUaGlzIHdpbGwgZnJlZXplIHRoZSBvYmplY3QuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuY29uc3QgY2VtZW50byA9IGZ1bmN0aW9uIGNlbWVudG8oIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiB8fCAhZW50aXR5IHx8XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGVudGl0eSApLmxlbmd0aCA9PSAwIClcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBlbnRpdHkgKXtcblx0XHRpZiggZW50aXR5Lmhhc093blByb3BlcnR5KCBwcm9wZXJ0eSApICl7XG5cdFx0XHRsZXQgdmFsdWUgPSBlbnRpdHlbIHByb3BlcnR5IF07XG5cblx0XHRcdHRyeXsgZGVsZXRlIGVudGl0eVsgcHJvcGVydHkgXTsgfWNhdGNoKCBlcnJvciApeyB9XG5cblx0XHRcdGVudGl0eSA9ICggZW50aXR5LmhhcmRlbiAmJiB0eXBlb2YgZW50aXR5LmhhcmRlbiA9PSBcImZ1bmN0aW9uXCIgKT9cblx0XHRcdFx0ZW50aXR5LmhhcmRlbiggcHJvcGVydHksIHZhbHVlICkgOlxuXHRcdFx0XHRoYXJkZW4oIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5mcmVlemUoIGVudGl0eSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjZW1lbnRvO1xuIl19
