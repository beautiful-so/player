(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Scv'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = function( root, Scv ) {
            if ( Scv === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    Scv = require('Scv');
                }
                else {
                    Scv = require('Scv')(root);
                }
            }
            factory(Scv);
            return Scv;
        };
    } else {
        factory(Scv);
    }
}(function (Scv) {
    window.app = function(){
		return function(){
			
		};
	};
}));