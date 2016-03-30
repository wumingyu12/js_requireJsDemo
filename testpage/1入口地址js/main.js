require.config({
    paths: {
    	//注意//cdn.bootcss.com/jquery/1.8.3/jquery.js  不要用后面的js
        jquery: 'http://cdn.bootcss.com/jquery/1.8.3/jquery'
    }
});
 
require(['jquery'], function($) {
    alert($().jquery);//打印版本
});