require.config({
    baseUrl: 'js',
    //require.config方法执行配置了baseUrl为“js”，baseUrl指的模块文件的根目录，可以是绝对路径或相对路径。
    //这里用的是相对路径。相对路径指引入require.js的页面为参考点，这里是index.html。
    shim:{
    	'underscore':{
　　　　　　exports: '_'
　　　　},
　　　　'backbone': {
　　　　　　deps: ['underscore', 'jquery'],
　　　　　　exports: 'Backbone'
　　　　}
    },
    paths:{
    	"aModel":"a",
    	"jquery":"http://cdn.bootcss.com/jquery/1.8.3/jquery",
    	"underscore":"https://cdn.bootcss.com/underscore.js/1.8.2/underscore-min",
    	"backbone":"http://cdn.bootcss.com/backbone.js/1.2.3/backbone-min"
    },

});
//因为selector的模块对应的js就是selector.js 所以不用再在config里面写地址
require(['aModel'], function(a) {
	a.hello();
});