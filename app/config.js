requirejs.config({
	deps:['main'],
	paths: {
        'jquery':'../libs/jquery',
        'underscore':'../libs/underscore',
        'backbone':'../libs/backbone',
        'parse':'../libs/parse'
		},
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'parse': {
            deps: ['underscore', 'jquery'],
            exports: 'Parse'
        }
    }
	});
