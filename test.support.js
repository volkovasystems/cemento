"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "cemento",
              			"path": "cemento/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/cemento.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"cemento": "cemento"
              		}
              	@end-include
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _isFrozen = require("babel-runtime/core-js/object/is-frozen");var _isFrozen2 = _interopRequireDefault(_isFrozen);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var cemento = require("./cemento.support.js");
//: @end-client





//: @client:

describe("cemento", function () {

	describe("`cemento( { 'name': 'simple' }, { } )`", function () {

		it("should contain name property with value of 'simple'", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);

			assert.equal(entity.name, "simple");

		});

		it("should freeze the object", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);

			assert.equal((0, _isFrozen2.default)(entity), true);

		});

	});


	describe("`Property descriptor writable`", function () {
		it("should be equal to false", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, "name");

			assert.equal(descriptor.writable, false);

		});
	});


	describe("`Property descriptor configurable`", function () {
		it("should be equal to false", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, "name");

			assert.equal(descriptor.configurable, false);

		});
	});


	describe("`Property descriptor enumerable`", function () {
		it("should be equal to false", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);
			var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, "name");

			assert.equal(descriptor.enumerable, false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2VtZW50byIsImRlc2NyaWJlIiwiaXQiLCJ0ZXN0IiwiZW50aXR5IiwiZXF1YWwiLCJuYW1lIiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSx3Q0FBVixFQUFvRCxZQUFPOztBQUUxREMsS0FBSSxxREFBSixFQUEyRCxZQUFPOztBQUVqRSxPQUFJQyxPQUFPLEVBQVg7QUFDQSxPQUFJQyxTQUFTSixRQUFTLEVBQUUsUUFBUSxRQUFWLEVBQVQsRUFBK0JHLElBQS9CLENBQWI7O0FBRUFMLFVBQU9PLEtBQVAsQ0FBY0QsT0FBT0UsSUFBckIsRUFBMkIsUUFBM0I7O0FBRUEsR0FQRDs7QUFTQUosS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxPQUFJQyxPQUFPLEVBQVg7QUFDQSxPQUFJQyxTQUFTSixRQUFTLEVBQUUsUUFBUSxRQUFWLEVBQVQsRUFBK0JHLElBQS9CLENBQWI7O0FBRUFMLFVBQU9PLEtBQVAsQ0FBYyx3QkFBaUJELE1BQWpCLENBQWQsRUFBeUMsSUFBekM7O0FBRUEsR0FQRDs7QUFTQSxFQXBCRDs7O0FBdUJBSCxVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsT0FBTyxFQUFYO0FBQ0EsT0FBSUMsU0FBU0osUUFBUyxFQUFFLFFBQVEsUUFBVixFQUFULEVBQStCRyxJQUEvQixDQUFiO0FBQ0EsT0FBSUksYUFBYSx3Q0FBaUNILE1BQWpDLEVBQXlDLE1BQXpDLENBQWpCOztBQUVBTixVQUFPTyxLQUFQLENBQWNFLFdBQVdDLFFBQXpCLEVBQW1DLEtBQW5DOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQVAsVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3REQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLE9BQU8sRUFBWDtBQUNBLE9BQUlDLFNBQVNKLFFBQVMsRUFBRSxRQUFRLFFBQVYsRUFBVCxFQUErQkcsSUFBL0IsQ0FBYjtBQUNBLE9BQUlJLGFBQWEsd0NBQWlDSCxNQUFqQyxFQUF5QyxNQUF6QyxDQUFqQjs7QUFFQU4sVUFBT08sS0FBUCxDQUFjRSxXQUFXRSxZQUF6QixFQUF1QyxLQUF2Qzs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7O0FBYUFSLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxPQUFJQyxPQUFPLEVBQVg7QUFDQSxPQUFJQyxTQUFTSixRQUFTLEVBQUUsUUFBUSxRQUFWLEVBQVQsRUFBK0JHLElBQS9CLENBQWI7QUFDQSxPQUFJSSxhQUFhLHdDQUFpQ0gsTUFBakMsRUFBeUMsTUFBekMsQ0FBakI7O0FBRUFOLFVBQU9PLEtBQVAsQ0FBY0UsV0FBV0csVUFBekIsRUFBcUMsS0FBckM7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7O0FBWUEsQ0EvREQ7O0FBaUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY2VtZW50b1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2VtZW50by90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2VtZW50by5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNlbWVudG8gPSByZXF1aXJlKCBcIi4vY2VtZW50by5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJjZW1lbnRvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGNlbWVudG8oIHsgJ25hbWUnOiAnc2ltcGxlJyB9LCB7IH0gKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBjb250YWluIG5hbWUgcHJvcGVydHkgd2l0aCB2YWx1ZSBvZiAnc2ltcGxlJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdCA9IHsgfTtcblx0XHRcdGxldCBlbnRpdHkgPSBjZW1lbnRvKCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0sIHRlc3QgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlbnRpdHkubmFtZSwgXCJzaW1wbGVcIiApO1xuXG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIGZyZWV6ZSB0aGUgb2JqZWN0XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0bGV0IGVudGl0eSA9IGNlbWVudG8oIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSwgdGVzdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE9iamVjdC5pc0Zyb3plbiggZW50aXR5ICksIHRydWUgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciB3cml0YWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRsZXQgZW50aXR5ID0gY2VtZW50byggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9LCB0ZXN0ICk7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGVudGl0eSwgXCJuYW1lXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciBjb25maWd1cmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0bGV0IGVudGl0eSA9IGNlbWVudG8oIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSwgdGVzdCApO1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBlbnRpdHksIFwibmFtZVwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGVudW1lcmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0bGV0IGVudGl0eSA9IGNlbWVudG8oIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSwgdGVzdCApO1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBlbnRpdHksIFwibmFtZVwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5lbnVtZXJhYmxlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
