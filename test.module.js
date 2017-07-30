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
*/

const assert = require( "should" );

//: @server:
const cemento = require( "./cemento.js" );
//: @end-server

//: @client:
const cemento = require( "./cemento.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "cemento", ( ) => {

	describe( "`cemento with entity and context`", ( ) => {

		describe( "cemento( { 'name': 'simple' }, { } )", ( ) => {

			let test = { };
			let entity = cemento( { "name": "simple" }, test );

			it( "should freeze the object", ( ) => {
				assert.equal( Object.isFrozen( entity ), true );
			} );

			it( "should have a name property with a value of 'simple'", ( ) => {
					assert.equal( entity[ "name" ], "simple" );
			} );

			describe( "Object properties or descriptor", ( ) => {

				let descriptor = Object.getOwnPropertyDescriptor( entity, "name" );

				it( "should make the object property or descriptor non-writable", ( ) => {
					assert.equal( descriptor.writable, false );
				} );

				it( "should make the object property or descriptor non-configurable", ( ) => {
					assert.equal( descriptor.configurable, false );
				} );

				it( "should make the object property or descriptor non-enumerable", ( ) => {
					assert.equal( descriptor.enumerable, false );
				} );

			} );

		} );

	} );

} );

//: @end-server

//: @client:
describe( "cemento", ( ) => {

	describe( "`cemento with entity and context`", ( ) => {

		describe( "cemento( { 'name': 'simple' }, { } )", ( ) => {

			let test = { };
			let entity = cemento( { "name": "simple" }, test );

			it( "should freeze the object", ( ) => {
				assert.equal( Object.isFrozen( entity ), true );
			} );

			it( "should have a name property with a value of 'simple'", ( ) => {
					assert.equal( entity[ "name" ], "simple" );
			} );

			describe( "Object properties or descriptor", ( ) => {

				let descriptor = Object.getOwnPropertyDescriptor( entity, "name" );

				it( "should make the object property or descriptor non-writable", ( ) => {
					assert.equal( descriptor.writable, false );
				} );

				it( "should make the object property or descriptor non-configurable", ( ) => {
					assert.equal( descriptor.configurable, false );
				} );

				it( "should make the object property or descriptor non-enumerable", ( ) => {
					assert.equal( descriptor.enumerable, false );
				} );

			} );

		} );

	} );

} );

//: @end-client

//: @bridge:

describe( "cemento", ( ) => {

	const testBridge = path.resolve(__dirname, "bridge.html");
	const bridgeURL = "file://" + testBridge;

	describe( "`cemento with entity and context`", ( ) => {

		describe( "cemento( { 'name': 'simple' }, { } )", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					//: @ignore:
					let test = { };
					let entity = cemento( { "name": "simple" }, test );
					//console.log( "Entity JLM", entity );
					return Object.isFrozen( entity );
					//: @end-ignore
				}

			);

			//console.log( "JLM logs", result );

		} );

	} );

} );

//: @end-bridge
