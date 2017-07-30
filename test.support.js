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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY2VtZW50byIsImRlc2NyaWJlIiwidGVzdCIsImVudGl0eSIsIml0IiwiZXF1YWwiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOzs7Ozs7QUFNQTtBQUNBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRBLFdBQVUsc0NBQVYsRUFBa0QsWUFBTzs7QUFFeEQsT0FBSUMsT0FBTyxFQUFYO0FBQ0EsT0FBSUMsU0FBU0gsUUFBUyxFQUFFLFFBQVEsUUFBVixFQUFULEVBQStCRSxJQUEvQixDQUFiOztBQUVBRSxNQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENOLFdBQU9PLEtBQVAsQ0FBYyx3QkFBaUJGLE1BQWpCLENBQWQsRUFBeUMsSUFBekM7QUFDQSxJQUZEOztBQUlBQyxNQUFJLHNEQUFKLEVBQTRELFlBQU87QUFDakVOLFdBQU9PLEtBQVAsQ0FBY0YsT0FBUSxNQUFSLENBQWQsRUFBZ0MsUUFBaEM7QUFDRCxJQUZEOztBQUlBRixZQUFVLGlDQUFWLEVBQTZDLFlBQU87O0FBRW5ELFFBQUlLLGFBQWEsd0NBQWlDSCxNQUFqQyxFQUF5QyxNQUF6QyxDQUFqQjs7QUFFQUMsT0FBSSw0REFBSixFQUFrRSxZQUFPO0FBQ3hFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdDLFFBQXpCLEVBQW1DLEtBQW5DO0FBQ0EsS0FGRDs7QUFJQUgsT0FBSSxnRUFBSixFQUFzRSxZQUFPO0FBQzVFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdFLFlBQXpCLEVBQXVDLEtBQXZDO0FBQ0EsS0FGRDs7QUFJQUosT0FBSSw4REFBSixFQUFvRSxZQUFPO0FBQzFFTixZQUFPTyxLQUFQLENBQWNDLFdBQVdHLFVBQXpCLEVBQXFDLEtBQXJDO0FBQ0EsS0FGRDs7QUFJQSxJQWhCRDs7QUFrQkEsR0EvQkQ7O0FBaUNBLEVBbkNEOztBQXFDQSxDQXZDRDs7QUF5Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjZW1lbnRvL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9jZW1lbnRvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJjZW1lbnRvXCI6IFwiY2VtZW50b1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiLi9jZW1lbnRvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJjZW1lbnRvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGNlbWVudG8gd2l0aCBlbnRpdHkgYW5kIGNvbnRleHRgXCIsICggKSA9PiB7XG5cblx0XHRkZXNjcmliZSggXCJjZW1lbnRvKCB7ICduYW1lJzogJ3NpbXBsZScgfSwgeyB9IClcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRsZXQgZW50aXR5ID0gY2VtZW50byggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9LCB0ZXN0ICk7XG5cblx0XHRcdGl0KCBcInNob3VsZCBmcmVlemUgdGhlIG9iamVjdFwiLCAoICkgPT4ge1xuXHRcdFx0XHRhc3NlcnQuZXF1YWwoIE9iamVjdC5pc0Zyb3plbiggZW50aXR5ICksIHRydWUgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0aXQoIFwic2hvdWxkIGhhdmUgYSBuYW1lIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiAnc2ltcGxlJ1wiLCAoICkgPT4ge1xuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggZW50aXR5WyBcIm5hbWVcIiBdLCBcInNpbXBsZVwiICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGRlc2NyaWJlKCBcIk9iamVjdCBwcm9wZXJ0aWVzIG9yIGRlc2NyaXB0b3JcIiwgKCApID0+IHtcblxuXHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGVudGl0eSwgXCJuYW1lXCIgKTtcblxuXHRcdFx0XHRpdCggXCJzaG91bGQgbWFrZSB0aGUgb2JqZWN0IHByb3BlcnR5IG9yIGRlc2NyaXB0b3Igbm9uLXdyaXRhYmxlXCIsICggKSA9PiB7XG5cdFx0XHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCBmYWxzZSApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0aXQoIFwic2hvdWxkIG1ha2UgdGhlIG9iamVjdCBwcm9wZXJ0eSBvciBkZXNjcmlwdG9yIG5vbi1jb25maWd1cmFibGVcIiwgKCApID0+IHtcblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLCBmYWxzZSApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0aXQoIFwic2hvdWxkIG1ha2UgdGhlIG9iamVjdCBwcm9wZXJ0eSBvciBkZXNjcmlwdG9yIG5vbi1lbnVtZXJhYmxlXCIsICggKSA9PiB7XG5cdFx0XHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmVudW1lcmFibGUsIGZhbHNlICk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
