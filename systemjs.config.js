(function (global) {
	SystemJS.config({
		baseUrl: './src',
		transpiler: 'plugin-babel',
		map: {
			'immutable': './node_modules/immutable/dist/immutable.js',
			'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
			'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
		}
	});
})(this);
