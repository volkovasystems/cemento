"use strict";

const cemento = require( "./cemento.js" );

console.log( require( "util" )
.inspect( cemento( { "name": "simple" } ), { "showHidden":true } ) );
console.log( require( "util" )
.inspect( cemento( ), { "showHidden":true } ) );
