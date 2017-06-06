const assert = require( "assert" );
const cemento = require( "./cemento.js" );

let test = { };
let entity = cemento( { "name": "simple" }, test );
let descriptor = Object.getOwnPropertyDescriptor( entity, "name" );
assert.equal( entity[ "name" ], "simple", "should have value 'simple'" );
assert.equal( descriptor[ "writable" ], false, "should be false" );
assert.equal( descriptor[ "configurable" ], false, "should be false" );
assert.equal( descriptor[ "enumerable" ], false, "should be false" );

console.log( "ok" );
