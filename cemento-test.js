"use strict";

const cemento = require( "./cemento.js" );

console.log( cemento( { "name": "simple" } ) );
console.log( require( "util" ).inspect( cemento( { "name": "simple" } ), { "showHidden":true } ) );
