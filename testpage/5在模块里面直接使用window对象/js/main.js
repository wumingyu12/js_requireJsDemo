require.config({
    baseUrl: 'js',
    paths:{
    	"aModel":"a"
    },

});
//因为selector的模块对应的js就是selector.js 所以不用再在config里面写地址
require(['aModel'], function(a) {
	a.hello();
});