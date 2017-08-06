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

	describe("`cemento with entity and context`", function () {

		describe("cemento( { 'name': 'simple' }, { } )", function () {

			var test = {};
			var entity = cemento({ "name": "simple" }, test);

			it("should freeze the object", function () {
				assert.equal((0, _isFrozen2.default)(entity), true);
			});

			it("should have a name property with a value of 'simple'", function () {
				assert.equal(entity["name"], "simple");
			});

			describe("Object properties or descriptor", function () {

				var descriptor = (0, _getOwnPropertyDescriptor2.default)(entity, "name");

				it("should make the object property or descriptor non-writable", function () {
					assert.equal(descriptor.writable, false);
				});

				it("should make the object property or descriptor non-configurable", function () {
					assert.equal(descriptor.configurable, false);
				});

				it("should make the object property or descriptor non-enumerable", function () {
					assert.equal(descriptor.enumerable, false);
				});

			});

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2VtZW50byIsImRlc2NyaWJlIiwidGVzdCIsImVudGl0eSIsIml0IiwiZXF1YWwiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOzs7Ozs7QUFNQTtBQUNBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRBLFdBQVUsc0NBQVYsRUFBa0QsWUFBTzs7QUFFeEQsT0FBSUMsT0FBTyxFQUFYO0FBQ0EsT0FBSUMsU0FBU0gsUUFBUyxFQUFFLFFBQVEsUUFBVixFQUFULEVBQStCRSxJQUEvQixDQUFiOztBQUVBRSxNQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENOLFdBQU9PLEtBQVAsQ0FBYyx3QkFBaUJGLE1BQWpCLENBQWQsRUFBeUMsSUFBekM7QUFDQSxJQUZEOztBQUlBQyxNQUFJLHNEQUFKLEVBQTRELFlBQU87QUFDakVOLFdBQU9PLEtBQVAsQ0FBY0YsT0FBUSxNQUFSLENBQWQsRUFBZ0MsUUFBaEM7QUFDRCxJQUZEOztBQUlBRixZQUFVLGlDQUFWLEVBQTZDLFlBQU87O0FBRW5ELFFBQUlLLGFBQWEsd0NBQWlDSCxNQUFqQyxFQUF5QyxNQUF6QyxDQUFqQjs7QUFFQUMsT0FBSSw0REFBSixFQUFrRSxZQUFPO0FBQ3hFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdDLFFBQXpCLEVBQW1DLEtBQW5DO0FBQ0EsS0FGRDs7QUFJQUgsT0FBSSxnRUFBSixFQUFzRSxZQUFPO0FBQzVFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdFLFlBQXpCLEVBQXVDLEtBQXZDO0FBQ0EsS0FGRDs7QUFJQUosT0FBSSw4REFBSixFQUFvRSxZQUFPO0FBQzFFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdHLFVBQXpCLEVBQXFDLEtBQXJDO0FBQ0EsS0FGRDs7QUFJQSxJQWhCRDs7QUFrQkEsR0EvQkQ7O0FBaUNBLEVBbkNEOztBQXFDQSxDQXZDRDs7QUF5Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImNlbWVudG9cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiY2VtZW50by90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2VtZW50by5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImNlbWVudG9cIjogXCJjZW1lbnRvXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGNlbWVudG8gPSByZXF1aXJlKCBcIi4vY2VtZW50by5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmRlc2NyaWJlKCBcImNlbWVudG9cIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGNlbWVudG8gd2l0aCBlbnRpdHkgYW5kIGNvbnRleHRgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwiY2VtZW50byggeyAnbmFtZSc6ICdzaW1wbGUnIH0sIHsgfSApXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgdGVzdCA9IHsgfTtcclxuXHRcdFx0bGV0IGVudGl0eSA9IGNlbWVudG8oIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSwgdGVzdCApO1xyXG5cclxuXHRcdFx0aXQoIFwic2hvdWxkIGZyZWV6ZSB0aGUgb2JqZWN0XCIsICggKSA9PiB7XHJcblx0XHRcdFx0YXNzZXJ0LmVxdWFsKCBPYmplY3QuaXNGcm96ZW4oIGVudGl0eSApLCB0cnVlICk7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdGl0KCBcInNob3VsZCBoYXZlIGEgbmFtZSBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgJ3NpbXBsZSdcIiwgKCApID0+IHtcclxuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggZW50aXR5WyBcIm5hbWVcIiBdLCBcInNpbXBsZVwiICk7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdGRlc2NyaWJlKCBcIk9iamVjdCBwcm9wZXJ0aWVzIG9yIGRlc2NyaXB0b3JcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBlbnRpdHksIFwibmFtZVwiICk7XHJcblxyXG5cdFx0XHRcdGl0KCBcInNob3VsZCBtYWtlIHRoZSBvYmplY3QgcHJvcGVydHkgb3IgZGVzY3JpcHRvciBub24td3JpdGFibGVcIiwgKCApID0+IHtcclxuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci53cml0YWJsZSwgZmFsc2UgKTtcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdGl0KCBcInNob3VsZCBtYWtlIHRoZSBvYmplY3QgcHJvcGVydHkgb3IgZGVzY3JpcHRvciBub24tY29uZmlndXJhYmxlXCIsICggKSA9PiB7XHJcblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLCBmYWxzZSApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0aXQoIFwic2hvdWxkIG1ha2UgdGhlIG9iamVjdCBwcm9wZXJ0eSBvciBkZXNjcmlwdG9yIG5vbi1lbnVtZXJhYmxlXCIsICggKSA9PiB7XHJcblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuZW51bWVyYWJsZSwgZmFsc2UgKTtcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
