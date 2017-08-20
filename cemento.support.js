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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"harden": "harden",
              			"kount": "kount",
              		}
              	@end-include
              */var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");
var kount = require("kount");

var cemento = function cemento(entity, context) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"entity:required": "object",
                                                 			"context": "object"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object" || !entity || kount(entity) == 0) {
		throw new Error("invalid entity");
	}

	var data = entity;
	context = context || entity;

	entity = harden.bind(context);

	(0, _keys2.default)(data).forEach(function (property) {
		var value = data[property];

		try {delete data[property];} catch (error) {}

		entity(property, value);
	});

	try {
		return (0, _freeze2.default)(context);

	} catch (error) {
		throw new Error("cannot freeze context, " + error.stack);
	}
};

module.exports = cemento;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbWVudG8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwia291bnQiLCJjZW1lbnRvIiwiZW50aXR5IiwiY29udGV4dCIsIkVycm9yIiwiZGF0YSIsImJpbmQiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJ2YWx1ZSIsImVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQ2xEOzs7Ozs7Ozs7QUFTQSxLQUFJLFFBQU9ELE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBakIsSUFBNkIsQ0FBQ0EsTUFBOUIsSUFBd0NGLE1BQU9FLE1BQVAsS0FBbUIsQ0FBL0QsRUFBa0U7QUFDakUsUUFBTSxJQUFJRSxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9ILE1BQVg7QUFDQUMsV0FBVUEsV0FBV0QsTUFBckI7O0FBRUFBLFVBQVNKLE9BQU9RLElBQVAsQ0FBYUgsT0FBYixDQUFUOztBQUVBLHFCQUFhRSxJQUFiLEVBQW9CRSxPQUFwQixDQUE2QixVQUFFQyxRQUFGLEVBQWdCO0FBQzVDLE1BQUlDLFFBQVFKLEtBQU1HLFFBQU4sQ0FBWjs7QUFFQSxNQUFHLENBQUUsT0FBT0gsS0FBTUcsUUFBTixDQUFQLENBQTBCLENBQS9CLENBQStCLE9BQU9FLEtBQVAsRUFBYyxDQUFHOztBQUVoRFIsU0FBUU0sUUFBUixFQUFrQkMsS0FBbEI7QUFDQSxFQU5EOztBQVFBLEtBQUc7QUFDRixTQUFPLHNCQUFlTixPQUFmLENBQVA7O0FBRUEsRUFIRCxDQUdDLE9BQU9PLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSU4sS0FBSiw2QkFBc0NNLE1BQU1DLEtBQTVDLENBQU47QUFDQTtBQUNELENBakNEOztBQW1DQUMsT0FBT0MsT0FBUCxHQUFpQlosT0FBakIiLCJmaWxlIjoiY2VtZW50by5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImNlbWVudG9cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiY2VtZW50by9jZW1lbnRvLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImNlbWVudG8uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJjZW1lbnRvXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NlbWVudG8uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImNlbWVudG8tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRIYXJkZW4gcHJvcGVydGllcyBvZiBlbnRpdHkuXHJcblxyXG5cdFx0VGhpcyB3aWxsIHJlcGxhY2UgZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHdpdGggbm9uLWVudW1lcmFibGUuXHJcblxyXG5cdFx0VGhpcyB3aWxsIGZyZWV6ZSB0aGUgb2JqZWN0LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXHJcblx0XHRcdFwia291bnRcIjogXCJrb3VudFwiLFxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xyXG5jb25zdCBrb3VudCA9IHJlcXVpcmUoIFwia291bnRcIiApO1xyXG5cclxuY29uc3QgY2VtZW50byA9IGZ1bmN0aW9uIGNlbWVudG8oIGVudGl0eSwgY29udGV4dCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwib2JqZWN0XCIsXHJcblx0XHRcdFx0XCJjb250ZXh0XCI6IFwib2JqZWN0XCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiIHx8ICFlbnRpdHkgfHwga291bnQoIGVudGl0eSApID09IDAgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XHJcblx0fVxyXG5cclxuXHRsZXQgZGF0YSA9IGVudGl0eTtcclxuXHRjb250ZXh0ID0gY29udGV4dCB8fCBlbnRpdHk7XHJcblxyXG5cdGVudGl0eSA9IGhhcmRlbi5iaW5kKCBjb250ZXh0ICk7XHJcblxyXG5cdE9iamVjdC5rZXlzKCBkYXRhICkuZm9yRWFjaCggKCBwcm9wZXJ0eSApID0+IHtcclxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbIHByb3BlcnR5IF07XHJcblxyXG5cdFx0dHJ5eyBkZWxldGUgZGF0YVsgcHJvcGVydHkgXTsgfWNhdGNoKCBlcnJvciApeyB9XHJcblxyXG5cdFx0ZW50aXR5KCBwcm9wZXJ0eSwgdmFsdWUgKTtcclxuXHR9ICk7XHJcblxyXG5cdHRyeXtcclxuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBjb250ZXh0ICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBmcmVlemUgY29udGV4dCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNlbWVudG87XHJcbiJdfQ==
//# sourceMappingURL=cemento.support.js.map
