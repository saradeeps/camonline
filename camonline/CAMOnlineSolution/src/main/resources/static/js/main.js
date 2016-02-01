	require.config({
		baseUrl:'/js/',
		paths: {
			bootstrap:'libs/bootstrap.min',
			jquery: 'libs/jquery.min',
			mockjax: 'libs/jquery.mockjax',
			mockjson: 'libs/jquery.mockjson',
			knockout : 'libs/knockout',
			
		},
		shim: {
			'jquery': {
				exports: '$'
			},
			bootstrap: {
				deps:['jquery']
			},
			mockjax: {
				deps:['jquery']
			},
			mockjson: {
				deps:['jquery']
			},
			knockout: {
				exports: 'ko',
				deps:['jquery']
			}
		}
	});